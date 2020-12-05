<template>
  <div class="trophy-list">
    <div class="column">
      <TrophyPreview v-for="trophy in trophies"
                      v-bind:key="trophy.id"
                      v-bind:user="trophy.user"
                      v-bind:trophy="trophy.trophy"
                      v-bind:date="trophy.date"
      ></TrophyPreview>
      <!-- TODO change user and leisure id's for their respective names-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TrophyPreview from './TrophyPreview'

export default {
  name: "TrophyList",
  components: {
    TrophyPreview
  },
  props: {
    user: String
  },
  data() {
    return {
      trophies: null
    }
  },
  mounted() {
    axios
    .get('http://127.0.0.1:30006/trophy/' + this.user)
    .then(response => (this.trophies = response.data))
  }

}
</script>
