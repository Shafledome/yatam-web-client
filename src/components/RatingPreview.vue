<template>
  <div class="ratingPreview">
    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p v-if="bool">
              <strong>{{ title }}</strong>
            </p>
            <p v-else>
              <a v-on:click="viewProfile()" >
                <strong>{{ title }}</strong>
              </a>
            </p>
            <b-rate v-model="grade" icon-pack="fas" disabled></b-rate>
            {{ text }}
            
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
import {router} from '../main.js'

dom.watch()

library.add(faStar)

export default {
  name: "RatingPreview",
  props: {
      user: String,
      leisure: Number,
      grade: Number,
      text: String,
      bool: Boolean
  },
  data() {
      return {
        title : null,
        email : null,
        leisureObject : null,
        isActive: false
      }
  },
  mounted() {
    if(this.bool == true){
      axios
      .get('http://127.0.0.1:30007/leisures/id/' + this.leisure)
      .then(response => (this.title = response.data.name,
                         this.leisureObject = response.data))
    }else{
      axios
      .get('http://127.0.0.1:30006/users/user_key/' + this.user)
      .then(response => (this.title = response.data.username,
                         this.email = response.data.email))
    }
  },
  methods:{
    viewProfile(){
      router.push({ name: 'profile', params: { email: this.email }})
    },
  }
};
</script>

<style>
.ratingPreview {
  margin: auto;
  max-width: 900px;
}
</style>