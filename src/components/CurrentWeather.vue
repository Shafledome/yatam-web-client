<template>
  <div class="currentWeather">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="../assets/clear.svg" alt="Image">
            <!-- TODO hacer imagen dinámica -->
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ temp }}ºC </strong> Sensación {{ feels_like }}ºC
              <br>
              <small>Precipitación {{ precipitation }}mm/hr <br> Humedad {{humidity}}% <br> Viento {{ wind_speed }}m/s</small>
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "CurrentWeather",
  //RANDOM DATA TO TEST, CHANGE TO NULL WHEN REAL-USE SCENARIO
  data() {
    return {
      temp: 45,
      feels_like: 55,
      precipitation: 66,
      humidity: 0,
      wind_speed: 66,
      weather_code: null
    }
  },
  //UNCOMMENT ONLY WHEN TESTING REAL-USE SCENARIO SO NOT TO REACH THE MAXIMUM LIMIT OF REQUESTS. IF UNCOMMENTED, REMEMBER TO CHANGE RETURN VALUES TO NULL.
  //mounted() {
    //axios
      //.get('https://api.climacell.co/v3/weather/realtime?lat=-4.4212655&lon=36.721261&unit_system=si&fields=temp%2Cfeels_like%2Cprecipitation%2Chumidity%2Cwind_speed%2Cweather_code&apikey=EYH8w3fFjccLUcI6IFU1M443pSc5pIfI')
      //.then(response => (this.temp = response.data.temp.value, this.feels_like = response.data.feels_like.value, this.precipitation = response.data.precipitation.value, this.humidity = response.data.humidity.value, this.wind_speed = response.data.wind_speed.value, this.weather_code = response.data.weather_code.value))
  //}
}
</script>

<style>
.currentWeather {
  margin: auto;
  max-width: 500px;
}
</style>