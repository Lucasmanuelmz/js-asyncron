"use strict";
(self["webpackChunkjs_asyncron"] = self["webpackChunkjs_asyncron"] || []).push([["index"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _splash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash.js */ "./src/splash.js");




function app() {
  (0,_splash_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_print_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app());



/***/ }),

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

/***/ }),

/***/ "./src/splash.js":
/*!***********************!*\
  !*** ./src/splash.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function displaySplash() {
    const splash = document.querySelector('.splash');

    if (splash) {

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                splash.classList.add('display-none');
            }, 6000)
        })
    } else {
        console.log('Splash nao foi encontrado nesta pagina');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displaySplash);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFDTTs7QUFFeEM7QUFDQSxFQUFFLHNEQUFhO0FBQ2YsSUFBSSxxREFBUTtBQUNaO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUk47QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHdCQUF3QjtBQUM3RCxrQ0FBa0MsMEJBQTBCO0FBQzVEO0FBQ0Esb0NBQW9DLDZCQUE2QjtBQUNqRTtBQUNBLCtCQUErQix5QkFBeUI7QUFDeEQsaUNBQWlDLDJCQUEyQjtBQUM1RCx1Q0FBdUMsNEJBQTRCO0FBQ25FLGlDQUFpQywyQkFBMkI7QUFDNUQsb0NBQW9DLDhCQUE4QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1QkFBdUI7QUFDdEQsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQ0FBa0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNEZBQTRGLFdBQVc7QUFDdkcsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHdCQUF3QjtBQUMvRCxvQ0FBb0MsMEJBQTBCO0FBQzlEO0FBQ0Esc0NBQXNDLDZCQUE2QjtBQUNuRTtBQUNBLGlDQUFpQyx5QkFBeUI7QUFDMUQsbUNBQW1DLDJCQUEyQjtBQUM5RCx5Q0FBeUMsNEJBQTRCO0FBQ3JFLG1DQUFtQywyQkFBMkI7QUFDOUQsc0NBQXNDLDhCQUE4QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1QkFBdUI7QUFDMUQsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDcklEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1hc3luY3Jvbi8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9qcy1hc3luY3Jvbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qcy1hc3luY3Jvbi8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly9qcy1hc3luY3Jvbi8uL3NyYy9zcGxhc2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBteUFwcFdlYiBmcm9tIFwiLi9wcmludC5qc1wiO1xuaW1wb3J0IGRpc3BsYXlTcGxhc2ggZnJvbSBcIi4vc3BsYXNoLmpzXCI7XG5cbmZ1bmN0aW9uIGFwcCgpIHtcbiAgZGlzcGxheVNwbGFzaCgpO1xuICAgIG15QXBwV2ViKCk7XG59XG5leHBvcnQgZGVmYXVsdCBhcHAoKTtcblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXlBcHBXZWIoKSB7XG4gIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlclwiKTtcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYnV0dG9uXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW1pZFwiKTtcbiAgY29uc3QgbGFzdFVwZGF0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhc3QtdXBkYXRlZFwiKTtcbiAgY29uc3QgZmVlbHNsaWtlQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmVlbHNsaWtlLWNcIik7XG4gIGNvbnN0IHV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1dlwiKTtcbiAgY29uc3QgdmlzS20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Zpcy1rbVwiKTtcbiAgY29uc3Qgd2luZEtwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZC1rcGhcIik7XG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWNpcC1tbVwiKTtcbiAgY29uc3QgZ3VzdEtwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3VzdC1rcGhcIik7XG4gIGNvbnN0IHByZXNzdXJlSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXNzdXJlLWluXCIpO1xuICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuICBjb25zdCBsb2NhbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLW5hbWVcIik7XG4gIGNvbnN0IHJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnaW9uXCIpO1xuICBjb25zdCBsYXRpdHVkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGF0XCIpO1xuICBjb25zdCBsb25naXR1ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvblwiKTtcbiAgY29uc3QgZnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1XCIpO1xuICBjb25zdCBsb2NhbFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsdGltZVwiKTtcbiAgY29uc3QgY2xvdWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3VkXCIpO1xuICBjb25zdCB1cmwgPVxuICAgIFwiaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9U3dYOFh3NWNoNkp1S1lzTlBieWN0TDdLSmdxN2QzSjMmcz13ZWF0aGVyXCI7XG5cbiBmdW5jdGlvbiBkZWZhdWx0V2VhdGhlcigpIHtcbiAgICBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0wMWMyMWZjNzUyMzA0NzRmOWUxMTcyMjMxMjQwMzAzJnE9bWFwdXRvXCIsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfSxcbiAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGltYWdlcy5zcmMgPSByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmN1cnJlbnQudGVtcF9jfcKwQ2A7XG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgICAgbGFzdFVwZGF0ZWQudGV4dENvbnRlbnQgPSByZXNwb25zZS5jdXJyZW50Lmxhc3RfdXBkYXRlZDtcbiAgICAgICAgZmVlbHNsaWtlQy50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmN1cnJlbnQuZmVlbHNsaWtlX2N9wrBDYDtcbiAgICAgICAgdXYudGV4dENvbnRlbnQgPSByZXNwb25zZS5jdXJyZW50LnV2O1xuICAgICAgICB2aXNLbS50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmN1cnJlbnQudmlzX2ttfSBrbWA7XG4gICAgICAgIHdpbmRLcGgudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LndpbmRfa3BofSBrcGhgO1xuICAgICAgICBwcmVjaXBpdGF0aW9uLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY3VycmVudC5wcmVjaXBfbW19IG1tYDtcbiAgICAgICAgZ3VzdEtwaC50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmN1cnJlbnQuZ3VzdF9rcGh9IGtwaGA7XG4gICAgICAgIHByZXNzdXJlSW4udGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LnByZXNzdXJlX2lufSBpbmA7XG4gICAgICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSByZXNwb25zZS5sb2NhdGlvbi5jb3VudHJ5O1xuICAgICAgICBsb2NhbE5hbWUudGV4dENvbnRlbnQgPSByZXNwb25zZS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICByZWdpb24udGV4dENvbnRlbnQgPSByZXNwb25zZS5sb2NhdGlvbi5yZWdpb247XG4gICAgICAgIGxhdGl0dWRlLnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24ubGF0O1xuICAgICAgICBsb25naXR1ZGUudGV4dENvbnRlbnQgPSByZXNwb25zZS5sb2NhdGlvbi5sb247XG4gICAgICAgIGZ1LnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24udHpfaWQ7XG4gICAgICAgIGxvY2FsVGltZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgICAgICAgY2xvdWQudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LmNsb3VkfSVgO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5QmFja2dyb3VuZCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaW1hZ2VzICYmIHJlc3BvbnNlLmRhdGEuaW1hZ2VzLm9yaWdpbmFsICYmIHJlc3BvbnNlLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybCkge1xuICAgICAgICBib2R5LnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsfSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgICBkZWZhdWx0V2VhdGhlcigpO1xuICAgICAgfSk7XG4gIH1cbiAgZGlzcGxheUJhY2tncm91bmQoKTtcblxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyKCkge1xuICAgIGNvbnN0IHNlYXJjaENpdHkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcblxuICAgIGlmICghc2VhcmNoQ2l0eSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgICBhbGVydChcIlBvciBmYXZvciBpbnNpcmEgdW1hIGNpZGFkZSB2YWxpZGFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0wMWMyMWZjNzUyMzA0NzRmOWUxMTcyMjMxMjQwMzAzJnE9JHtzZWFyY2hDaXR5fWAsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfSxcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJybyBhbyBvYnRlciBkYWRvcyBkYSBBUEkuXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHRpdGxlICYmIGltYWdlcyAmJiB0ZW1wZXJhdHVyZSAmJiBodW1pZGl0eSAmJiBsYXN0VXBkYXRlZCAmJiBmZWVsc2xpa2VDICYmXG4gICAgICAgICAgICB1diAmJiB2aXNLbSAmJiB3aW5kS3BoICYmIHByZWNpcGl0YXRpb24gJiYgZ3VzdEtwaCAmJiBwcmVzc3VyZUluICYmIGNvdW50cnkgJiZcbiAgICAgICAgICAgIGxvY2FsTmFtZSAmJiByZWdpb24gJiYgbGF0aXR1ZGUgJiYgbG9uZ2l0dWRlICYmIGZ1ICYmIGxvY2FsVGltZSAmJiBjbG91ZCkge1xuICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgICBpbWFnZXMuc3JjID0gcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmN1cnJlbnQudGVtcF9jfcKwQ2A7XG4gICAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgICAgIGxhc3RVcGRhdGVkLnRleHRDb250ZW50ID0gcmVzcG9uc2UuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XG4gICAgICAgICAgZmVlbHNsaWtlQy50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmN1cnJlbnQuZmVlbHNsaWtlX2N9wrBDYDtcbiAgICAgICAgICB1di50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmN1cnJlbnQudXY7XG4gICAgICAgICAgdmlzS20udGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LnZpc19rbX0ga21gO1xuICAgICAgICAgIHdpbmRLcGgudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LndpbmRfa3BofSBrcGhgO1xuICAgICAgICAgIHByZWNpcGl0YXRpb24udGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LnByZWNpcF9tbX0gbW1gO1xuICAgICAgICAgIGd1c3RLcGgudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50Lmd1c3Rfa3BofSBrcGhgO1xuICAgICAgICAgIHByZXNzdXJlSW4udGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LnByZXNzdXJlX2lufSBpbmA7XG4gICAgICAgICAgY291bnRyeS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgICAgICAgbG9jYWxOYW1lLnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24ubmFtZTtcbiAgICAgICAgICByZWdpb24udGV4dENvbnRlbnQgPSByZXNwb25zZS5sb2NhdGlvbi5yZWdpb247XG4gICAgICAgICAgbGF0aXR1ZGUudGV4dENvbnRlbnQgPSByZXNwb25zZS5sb2NhdGlvbi5sYXQ7XG4gICAgICAgICAgbG9uZ2l0dWRlLnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24ubG9uO1xuICAgICAgICAgIGZ1LnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24udHpfaWQ7XG4gICAgICAgICAgbG9jYWxUaW1lLnRleHRDb250ZW50ID0gcmVzcG9uc2UubG9jYXRpb24ubG9jYWx0aW1lO1xuICAgICAgICAgICAgY2xvdWQudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS5jdXJyZW50LmNsb3VkfSVgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWxndW1hIGNsYXNzZSBuYW8gZXN0YSBkaXNwb25pbmVsJylcbiAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdOYW1lOiAnK2Vycm9yLm5hbWUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlOiAnK2Vycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaFdlYXRoZXIpO1xufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbXlBcHBXZWIoKTtcbn0pIiwiZnVuY3Rpb24gZGlzcGxheVNwbGFzaCgpIHtcclxuICAgIGNvbnN0IHNwbGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGxhc2gnKTtcclxuXHJcbiAgICBpZiAoc3BsYXNoKSB7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3BsYXNoLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xyXG4gICAgICAgICAgICB9LCA2MDAwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTcGxhc2ggbmFvIGZvaSBlbmNvbnRyYWRvIG5lc3RhIHBhZ2luYScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5U3BsYXNoOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==