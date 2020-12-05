<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ user }}</strong> <small>{{leisure}}</small>
            <br>
            <br>
            <b-rate v-model="grade" icon-pack="fas" disabled="true"></b-rate>
            {{ text }}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "RatingPreview",
  props: {
      user: String,
      leisure: String,
      grade: Number,
      text: String,
  }
};
</script>

<style>
.box {
  margin: auto;
  max-width: 900px;
}
</style>