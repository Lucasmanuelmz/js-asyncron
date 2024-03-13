export default function myAppWeb() {
  const images = document.querySelector(".weather");
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");
  const title = document.querySelector("#title");
  const temperature = document.querySelector("#temp");
  const humidity = document.querySelector("#umid");
  const lastUpdated = document.querySelector("#last-updated");
  const feelslikeC = document.querySelector("#feelslike-c");
  const uv = document.querySelector("#uv");
  const visKm = document.querySelector("#vis-km");
  const windKph = document.querySelector("#wind-kph");
  const precipitation = document.querySelector("#precip-mm");
  const gustKph = document.querySelector("#gust-kph");
  const pressureIn = document.querySelector("#pressure-in");
  const country = document.querySelector("#country");
  const localName = document.querySelector("#local-name");
  const region = document.querySelector("#region");
  const latitude = document.querySelector("#lat");
  const longitude = document.querySelector("#lon");
  const fu = document.querySelector("#fu");
  const localTime = document.querySelector("#localtime");
  const cloud = document.querySelector("#cloud");
  const url =
    "https://api.giphy.com/v1/gifs/translate?api_key=SwX8Xw5ch6JuKYsNPbyctL7KJgq7d3J3&s=weather";

 function defaultWeather() {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=01c21fc75230474f9e1172231240303&q=maputo",
      {
        mode: "cors",
      },
    )
      .then((response) => response.json())
      .then((response) => {
        title.textContent = response.current.condition.text;
        images.src = response.current.condition.icon;
        temperature.textContent = `${response.current.temp_c}°C`;
        humidity.textContent = `${response.current.humidity}%`;
        lastUpdated.textContent = response.current.last_updated;
        feelslikeC.textContent = `${response.current.feelslike_c}°C`;
        uv.textContent = response.current.uv;
        visKm.textContent = `${response.current.vis_km} km`;
        windKph.textContent = `${response.current.wind_kph} kph`;
        precipitation.textContent = `${response.current.precip_mm} mm`;
        gustKph.textContent = `${response.current.gust_kph} kph`;
        pressureIn.textContent = `${response.current.pressure_in} in`;
        country.textContent = response.location.country;
        localName.textContent = response.location.name;
        region.textContent = response.location.region;
        latitude.textContent = response.location.lat;
        longitude.textContent = response.location.lon;
        fu.textContent = response.location.tz_id;
        localTime.textContent = response.location.localtime;
        cloud.textContent = `${response.current.cloud}%`;
      });
  }

  function displayBackground() {
    const body = document.querySelector("body");
    fetch(url, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
       if (response.data && response.data.images && response.data.images.original && response.data.images.original.url) {
        body.style.cssText = `
          background-image: url(${response.data.images.original.url});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        `;
      }

        defaultWeather();
      });
  }
  displayBackground();

  async function searchWeather() {
    const searchCity = searchInput.value;

    if (!searchCity) {
      // eslint-disable-next-line no-alert
      alert("Por favor insira uma cidade valida");
    } else {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=01c21fc75230474f9e1172231240303&q=${searchCity}`,
        { mode: "cors" },
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao obter dados da API.");
          } else {
            return response.json();
          }
        })
        .then((response) => {
          title.textContent = response.current.condition.text;
          images.src = response.current.condition.icon;
          temperature.textContent = `${response.current.temp_c}°C`;
          humidity.textContent = `${response.current.humidity}%`;
          lastUpdated.textContent = response.current.last_updated;
          feelslikeC.textContent = `${response.current.feelslike_c}°C`;
          uv.textContent = response.current.uv;
          visKm.textContent = `${response.current.vis_km} km`;
          windKph.textContent = `${response.current.wind_kph} kph`;
          precipitation.textContent = `${response.current.precip_mm} mm`;
          gustKph.textContent = `${response.current.gust_kph} kph`;
          pressureIn.textContent = `${response.current.pressure_in} in`;
          country.textContent = response.location.country;
          localName.textContent = response.location.name;
          region.textContent = response.location.region;
          latitude.textContent = response.location.lat;
          longitude.textContent = response.location.lon;
          fu.textContent = response.location.tz_id;
          localTime.textContent = response.location.localtime;
          cloud.textContent = `${response.current.cloud}%`;
        })
        .catch((error) => {
          console.log('Name: '+error.name);
          console.log('Message: '+error.message)
        });
    }
  }
  searchButton.addEventListener("click", searchWeather);
}
