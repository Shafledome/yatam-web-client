<template>
  <div class="map">
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"

    >
      <l-tile-layer
        :url="url"
      />
      <l-marker 
      v-for="museum in museum"
      v-bind:key="museum.key"
      :lat-lng="museum.coordinates"
      :icon="iconMuseum"
      >
        <l-popup>
          <div @click="innerClick">            
            {{museum.name}}
          </div>
        </l-popup>
      </l-marker>

      <l-marker 
      v-for="artgallery in artGallery"
      v-bind:key="artgallery.key"
      :lat-lng="artgallery.coordinates"
      :icon="iconArtGallery"
      >
        <l-popup>
          <div @click="innerClick">
            {{artgallery.name}}
          </div>
        </l-popup>
      </l-marker>

      <l-marker 
      v-for="monument in monument"
      v-bind:key="monument.key"
      :lat-lng="artGallery.coordinates"
      :icon="iconMonument"
      >
        <l-popup>
          <div @click="innerClick">
            {{monument.name}}
          </div>
        </l-popup>
      </l-marker>

      <l-marker 
      v-for="dogpark in dogPark"
      v-bind:key="dogpark.key"
      :lat-lng="dogpark.coordinates"
      :icon="iconDogPark"
      >
        <l-popup>
          <div @click="innerClick">
            {{dogpark.name}}
          </div>
        </l-popup>
      </l-marker>

      <l-marker 
      v-for="training in training"
      v-bind:key="training.key"
      :lat-lng="training.coordinates"
      :icon="iconTraining"
      >
        <l-popup>
          <div @click="innerClick">
            {{training.name}}
          </div>
        </l-popup>
      </l-marker>

      <l-marker 
      v-for="library in library"
      v-bind:key="library.key"
      :lat-lng="library.coordinates"
      :icon="iconLibrary"
      >
        <l-popup>
          <div @click="innerClick">
            {{library.name}}
          </div>
        </l-popup>
      </l-marker>

      <l-marker 
      v-for="cinema in cinema"
      v-bind:key="cinema.key"
      :lat-lng="cinema.coordinates"
      :icon="iconCinema"
      >
        <l-popup>
          <div @click="innerClick">
            {{artGallery.name}}
          </div>
        </l-popup>
      </l-marker>

      <l-marker 
      v-for="theater in theater"
      v-bind:key="theater.key"
      :lat-lng="theater.coordinates"
      :icon="iconTheater"
      >
        <l-popup>
          <div @click="innerClick">
            {{theater.name}}
          </div>
        </l-popup>
      </l-marker>
    </l-map>    
  </div>
</template>

<script>
import { latLng, icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 14.5,
      center: latLng(36.72016, -4.42034),
      url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
      mapOptions: {
        zoomSnap: 0.5
      },
      museum: null,
      iconMuseum: icon({
        iconUrl: require("../assets/museum.svg"),
        iconSize: [20, 21],
        iconAnchor: [10, 21]
      }),
      artGallery: null,
      iconArtGallery: icon({
        iconUrl: require("../assets/artGallery.svg"),
        iconSize: [20, 21],
        iconAnchor: [10, 21]
      }),
      dogPark: null,
      iconDogPark: icon({
        iconUrl: require("../assets/dogPark.svg"),
        iconSize: [20, 21],
        iconAnchor: [10, 21]
      }),
      monument: null,
      iconMonument: icon({
        iconUrl: require("../assets/monument.svg"),
        iconSize: [20, 21],
        iconAnchor: [10, 21]
      }),
      training: null,
      iconTraining: icon({
        iconUrl: require("../assets/training.svg"),
        iconSize: [20, 21],
        iconAnchor: [10, 21]
      }),
      library: null,
      iconLibrary: icon({
        iconUrl: require("../assets/library.svg"),
        iconSize: [20, 21],
        iconAnchor: [10, 21]
      }),
      cinema: null,
      iconCinema: icon({
        iconUrl: require("../assets/cinema.svg"),
        iconSize: [20, 21],
        iconAnchor: [10, 21]
      }),
      theater: null,
      iconTheater: icon({
        iconUrl: require("../assets/theater.svg"),
        iconSize: [20, 21],
        iconAnchor: [10, 21]
      })
    };
  },
  mounted() {
    if(!("geolocation" in navigator)) {
      this.errorStr = 'Geolocation is not available.';
      return;
    }
    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.gettingLocation = false;
      this.centerUpdate(pos);
    }, err => {
      this.gettingLocation = false;
      this.errorStr = err.message;
    })
  
  },
  methods: {
    
    centerUpdate(center) {
      this.center = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  },
  created(){
    axios
        .get('http://127.0.0.1:30007/leisures/museum')
        .then(response => (this.museum = response.data))
    axios
        .get('http://127.0.0.1:30007/leisures/artgallery')
        .then(response => (this.artGallery = response.data))
  
    axios
        .get('http://127.0.0.1:30007/leisures/dogpark')
        .then(response => (this.dogPark = response.data))

    axios
        .get('http://127.0.0.1:30007/leisures/monument')
        .then(response => (this.monument = response.data))

    axios
        .get('http://127.0.0.1:30007/leisures/training')
        .then(response => (this.training = response.data))
    
    axios
        .get('http://127.0.0.1:30007/leisures/library')
        .then(response => (this.library = response.data))
    
    axios
        .get('http://127.0.0.1:30007/leisures/cinema')
        .then(response => (this.cinema = response.data))
    
    axios
        .get('http://127.0.0.1:30007/leisures/theater')
        .then(response => (this.theater = response.data))
  }
};
</script>


<style>
  .map{
    height: 500px;
    width: 80%;
    padding-top: -2%;
    padding-left: 20%;
    padding-bottom: 2%;
  }
</style>