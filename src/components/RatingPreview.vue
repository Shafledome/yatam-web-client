<template>
  <div class="ratingPreview">
    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ title }}</strong> <!--<small>{{leisure}}</small>-->
              <br>
              <br>
              <b-rate v-model="grade" icon-pack="fas" disabled="true"></b-rate>
              {{ text }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(faStar)

export default {
  name: "RatingPreview",
  props: {
      user: String,
      leisure: String,
      grade: Number,
      text: String,
      bool: Boolean
  },
  data() {
      return {
        title : null
      }
  },
  mounted() {
    if(this.bool == true){
      axios
      .get('http://127.0.0.1:30007/leisures/id/' + this.leisure)
      .then(response => (this.title = response.data.name))
    }else{
      axios
      .get('http://127.0.0.1:30006/users/user_key/' + this.user)
      .then(response => (this.title = response.data.username))
    }

  }
};
</script>

<style>
.ratingPreview {
  margin: auto;
  max-width: 900px;
}
</style>