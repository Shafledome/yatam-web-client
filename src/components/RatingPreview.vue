<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ user }}</strong> <small>{{leisure}}</small>
            <br>
            <small>{{ grade }}</small>
            <br>
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

</style>