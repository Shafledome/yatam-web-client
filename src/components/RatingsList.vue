<template>
  <div class="ratings-list">
    <div class="column">
      <RatingPreview v-for="rating in ratings"
                      v-bind:key="rating.id"
                      v-bind:user="rating.user"
                      v-bind:leisure="rating.leisure"
                      v-bind:grade="rating.grade"
                      v-bind:text="rating.text"
                      v-bind:bool="user"
      ></RatingPreview>
      <!-- TODO change user and leisure id's for their respective names-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RatingPreview from './RatingPreview'

export default {
  name: "RatingsList",
  components: {
    RatingPreview
  },
  props: {
    data: String,
    user: Boolean
  },
  data() {
    return {
      ratings: null
    }
  },
  mounted() {
    if(this.user == true){
      axios
      .get('http://127.0.0.1:30006/ratings/user/' + this.data)
      .then(response => (this.ratings = response.data))
    }else{
      axios
      .get('http://127.0.0.1:30006/ratings/leisure/' + this.leisure)
      .then(response => (this.ratings = response.data))
    }
    
  }
  //TODO change url depending of search by user or leisure and the needed id
}
</script>

<style>

</style>