<template>
  <div class="ratings-list">
    <div class="column">
      <h3 class="title is-5" style="color:000">Reviews</h3>
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
    user: Boolean,
    idLeisure: Number
  },
  data() {
    return {
      ratings: null
    }
  },
  mounted() {
    var url1 = 'http://127.0.0.1:30006/ratings/user/'
    url1 = url1 + this.data;
    var url2 = 'http://127.0.0.1:30006/ratings/leisure/'
    url2 = url2 + this.idLeisure;
    if(this.user == true){
      axios
      .get(url1)
      .then(response => (this.ratings = response.data))
    }else{
      console.log(url2)
      axios
      .get(url2)
      .then(response => (this.ratings = response.data))
    }
    
  }
  //TODO change url depending of search by user or leisure and the needed id
}
</script>

<style>

</style>