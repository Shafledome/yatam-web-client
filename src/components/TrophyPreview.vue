<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ trophy_name }}</strong> <small>{{ date }}</small>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TrophyPreview",
  props: {
      key: String,
      user: String,
      trophy: String,
      date: String
  },
  data() {
      return {
        trophy_name : null
      }
  },
  mounted() {
    axios
    .get('http://127.0.0.1:30006/trophies/key/' + this.trophy)
    .then(response => (this.trophy_name = response.data.name))
  }
};
</script>
