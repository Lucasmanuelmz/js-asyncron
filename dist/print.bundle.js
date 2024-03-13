"use strict";
(self["webpackChunkjs_asyncron"] = self["webpackChunkjs_asyncron"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ myAppWeb)
/* harmony export */ });
function myAppWeb() {
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
          if (title && images && temperature && humidity && lastUpdated && feelslikeC &&
            uv && visKm && windKph && precipitation && gustKph && pressureIn && country &&
            localName && region && latitude && longitude && fu && localTime && cloud) {
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
          } else {
            console.log('Alguma classe nao esta disponinel')
         }
        })
        .catch((error) => {
          console.log('Name: '+error.name);
          console.log('Message: '+error.message)
        });
    }
  }
  searchButton.addEventListener("click", searchWeather);
}
document.addEventListener('DOMContentLoaded', () => {
  myAppWeb();
})

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsd0JBQXdCO0FBQzdELGtDQUFrQywwQkFBMEI7QUFDNUQ7QUFDQSxvQ0FBb0MsNkJBQTZCO0FBQ2pFO0FBQ0EsK0JBQStCLHlCQUF5QjtBQUN4RCxpQ0FBaUMsMkJBQTJCO0FBQzVELHVDQUF1Qyw0QkFBNEI7QUFDbkUsaUNBQWlDLDJCQUEyQjtBQUM1RCxvQ0FBb0MsOEJBQThCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QjtBQUN0RCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtDQUFrQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSw0RkFBNEYsV0FBVztBQUN2RyxVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsd0JBQXdCO0FBQy9ELG9DQUFvQywwQkFBMEI7QUFDOUQ7QUFDQSxzQ0FBc0MsNkJBQTZCO0FBQ25FO0FBQ0EsaUNBQWlDLHlCQUF5QjtBQUMxRCxtQ0FBbUMsMkJBQTJCO0FBQzlELHlDQUF5Qyw0QkFBNEI7QUFDckUsbUNBQW1DLDJCQUEyQjtBQUM5RCxzQ0FBc0MsOEJBQThCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVCQUF1QjtBQUMxRCxZQUFZO0FBQ1o7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWFzeW5jcm9uLy4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG15QXBwV2ViKCkge1xuICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJcIik7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtaW5wdXRcIik7XG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWJ1dHRvblwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcFwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VtaWRcIik7XG4gIGNvbnN0IGxhc3RVcGRhdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXN0LXVwZGF0ZWRcIik7XG4gIGNvbnN0IGZlZWxzbGlrZUMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzbGlrZS1jXCIpO1xuICBjb25zdCB1diA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXZcIik7XG4gIGNvbnN0IHZpc0ttID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aXMta21cIik7XG4gIGNvbnN0IHdpbmRLcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbmQta3BoXCIpO1xuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVjaXAtbW1cIik7XG4gIGNvbnN0IGd1c3RLcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2d1c3Qta3BoXCIpO1xuICBjb25zdCBwcmVzc3VyZUluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVzc3VyZS1pblwiKTtcbiAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcbiAgY29uc3QgbG9jYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1uYW1lXCIpO1xuICBjb25zdCByZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ2lvblwiKTtcbiAgY29uc3QgbGF0aXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhdFwiKTtcbiAgY29uc3QgbG9uZ2l0dWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb25cIik7XG4gIGNvbnN0IGZ1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdVwiKTtcbiAgY29uc3QgbG9jYWxUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbHRpbWVcIik7XG4gIGNvbnN0IGNsb3VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG91ZFwiKTtcbiAgY29uc3QgdXJsID1cbiAgICBcImh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PVN3WDhYdzVjaDZKdUtZc05QYnljdEw3S0pncTdkM0ozJnM9d2VhdGhlclwiO1xuXG4gZnVuY3Rpb24gZGVmYXVsdFdlYXRoZXIoKSB7XG4gICAgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MDFjMjFmYzc1MjMwNDc0ZjllMTE3MjIzMTI0MDMwMyZxPW1hcHV0b1wiLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH0sXG4gICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBpbWFnZXMuc3JjID0gcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LnRlbXBfY33CsENgO1xuICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gICAgICAgIGxhc3RVcGRhdGVkLnRleHRDb250ZW50ID0gcmVzcG9uc2UuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XG4gICAgICAgIGZlZWxzbGlrZUMudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9jfcKwQ2A7XG4gICAgICAgIHV2LnRleHRDb250ZW50ID0gcmVzcG9uc2UuY3VycmVudC51djtcbiAgICAgICAgdmlzS20udGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LnZpc19rbX0ga21gO1xuICAgICAgICB3aW5kS3BoLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC53aW5kX2twaH0ga3BoYDtcbiAgICAgICAgcHJlY2lwaXRhdGlvbi50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmN1cnJlbnQucHJlY2lwX21tfSBtbWA7XG4gICAgICAgIGd1c3RLcGgudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50Lmd1c3Rfa3BofSBrcGhgO1xuICAgICAgICBwcmVzc3VyZUluLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC5wcmVzc3VyZV9pbn0gaW5gO1xuICAgICAgICBjb3VudHJ5LnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24uY291bnRyeTtcbiAgICAgICAgbG9jYWxOYW1lLnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24ubmFtZTtcbiAgICAgICAgcmVnaW9uLnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24ucmVnaW9uO1xuICAgICAgICBsYXRpdHVkZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmxvY2F0aW9uLmxhdDtcbiAgICAgICAgbG9uZ2l0dWRlLnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24ubG9uO1xuICAgICAgICBmdS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmxvY2F0aW9uLnR6X2lkO1xuICAgICAgICBsb2NhbFRpbWUudGV4dENvbnRlbnQgPSByZXNwb25zZS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gICAgICAgIGNsb3VkLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC5jbG91ZH0lYDtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUJhY2tncm91bmQoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmltYWdlcyAmJiByZXNwb25zZS5kYXRhLmltYWdlcy5vcmlnaW5hbCAmJiByZXNwb25zZS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmwpIHtcbiAgICAgICAgYm9keS5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Jlc3BvbnNlLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybH0pO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGA7XG4gICAgICB9XG5cbiAgICAgICAgZGVmYXVsdFdlYXRoZXIoKTtcbiAgICAgIH0pO1xuICB9XG4gIGRpc3BsYXlCYWNrZ3JvdW5kKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2VhdGhlcigpIHtcbiAgICBjb25zdCBzZWFyY2hDaXR5ID0gc2VhcmNoSW5wdXQudmFsdWU7XG5cbiAgICBpZiAoIXNlYXJjaENpdHkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgICAgYWxlcnQoXCJQb3IgZmF2b3IgaW5zaXJhIHVtYSBjaWRhZGUgdmFsaWRhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MDFjMjFmYzc1MjMwNDc0ZjllMTE3MjIzMTI0MDMwMyZxPSR7c2VhcmNoQ2l0eX1gLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH0sXG4gICAgICApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm8gYW8gb2J0ZXIgZGFkb3MgZGEgQVBJLlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICh0aXRsZSAmJiBpbWFnZXMgJiYgdGVtcGVyYXR1cmUgJiYgaHVtaWRpdHkgJiYgbGFzdFVwZGF0ZWQgJiYgZmVlbHNsaWtlQyAmJlxuICAgICAgICAgICAgdXYgJiYgdmlzS20gJiYgd2luZEtwaCAmJiBwcmVjaXBpdGF0aW9uICYmIGd1c3RLcGggJiYgcHJlc3N1cmVJbiAmJiBjb3VudHJ5ICYmXG4gICAgICAgICAgICBsb2NhbE5hbWUgJiYgcmVnaW9uICYmIGxhdGl0dWRlICYmIGxvbmdpdHVkZSAmJiBmdSAmJiBsb2NhbFRpbWUgJiYgY2xvdWQpIHtcbiAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgICAgaW1hZ2VzLnNyYyA9IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LnRlbXBfY33CsENgO1xuICAgICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgICAgICBsYXN0VXBkYXRlZC50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmN1cnJlbnQubGFzdF91cGRhdGVkO1xuICAgICAgICAgIGZlZWxzbGlrZUMudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9jfcKwQ2A7XG4gICAgICAgICAgdXYudGV4dENvbnRlbnQgPSByZXNwb25zZS5jdXJyZW50LnV2O1xuICAgICAgICAgIHZpc0ttLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC52aXNfa219IGttYDtcbiAgICAgICAgICB3aW5kS3BoLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC53aW5kX2twaH0ga3BoYDtcbiAgICAgICAgICBwcmVjaXBpdGF0aW9uLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC5wcmVjaXBfbW19IG1tYDtcbiAgICAgICAgICBndXN0S3BoLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC5ndXN0X2twaH0ga3BoYDtcbiAgICAgICAgICBwcmVzc3VyZUluLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC5wcmVzc3VyZV9pbn0gaW5gO1xuICAgICAgICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSByZXNwb25zZS5sb2NhdGlvbi5jb3VudHJ5O1xuICAgICAgICAgIGxvY2FsTmFtZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgICAgcmVnaW9uLnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24ucmVnaW9uO1xuICAgICAgICAgIGxhdGl0dWRlLnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24ubGF0O1xuICAgICAgICAgIGxvbmdpdHVkZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmxvY2F0aW9uLmxvbjtcbiAgICAgICAgICBmdS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmxvY2F0aW9uLnR6X2lkO1xuICAgICAgICAgIGxvY2FsVGltZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgICAgICAgICAgIGNsb3VkLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC5jbG91ZH0lYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FsZ3VtYSBjbGFzc2UgbmFvIGVzdGEgZGlzcG9uaW5lbCcpXG4gICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTmFtZTogJytlcnJvci5uYW1lKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTWVzc2FnZTogJytlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hXZWF0aGVyKTtcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIG15QXBwV2ViKCk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==