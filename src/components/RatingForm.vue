<template>
  <section>
      <div class="box">
        <div class="rating-form">

          <b-rate v-model="grade" icon-pack="fas"></b-rate>

          <b-field label="Text">
            <b-input v-model="text"></b-input>
          </b-field>

          <button
                class="button is-primary"
                @click="createRating">Create Review</button>
          <br>
          <br>
        </div>
      </div>
  </section>
</template>

<script>
import axios from "axios"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(faStar)

export default {
  name: "RatingForm",
  props: {
    leisure: String,
    userKey: String
  },
  data() {
    return {
      grade: 0,
      text: null
    }
  },
  methods: {
    createRating() {
      axios
          .post('http://127.0.0.1:30006/ratings/create/rating',
              {user: this.userKey, leisure: this.leisure, grade: this.grade, text: this.text})
    }
  }
}
</script>

<style>
.rating-form {
  margin: auto;
  max-width: 900px;
}
</style>