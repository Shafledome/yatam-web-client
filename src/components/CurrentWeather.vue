<template>
  <div class="currentWeather">
    <b-dropdown position="is-bottom-left" append-to-body aria-role="menu" trap-focus>
      <a
          class="navbar-item"
          slot="trigger"
          role="button">
        <figure class="image is-24x24">
          <img :src="getImage(weather_code)" alt="Image" style="margin-left: -10px">
        </figure>
        <span> {{ temp }} ºC <small>Sensación {{ feels_like }} ºC</small></span>
      </a>

      <b-dropdown-item
          aria-role="menu-item"
          :focusable="false">
        <p> Precipitación {{ precipitation }}mm/hr <br> Humedad {{humidity}}% <br> Viento {{ wind_speed }}m/s</p>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "CurrentWeather",
  //RANDOM DATA TO TEST, CHANGE TO NULL WHEN REAL-USE SCENARIO
  data() {
    return {
      temp: 8,
      feels_like: 8,
      precipitation: 8,
      humidity: 8,
      wind_speed: 8,
      weather_code: 'rain'
    }
  },
  methods: {
    getImage(path){
      var images = require.context('../assets/')
      return images('./' + path + ".svg")
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
  max-width: 300px;
}
</style>