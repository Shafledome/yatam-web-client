<template>
  <div id="app">
    <Hero />
    <!-- <Header /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- delete below. Just for testing -->
    <!-- <LeisuresList /> -->
    <!-- <Map /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LeisuresList from './components/LeisuresList.vue'
// import Map from './components/Map.vue'
// import Footer from './components/Footer.vue'
// import Header from './components/Header.vue'
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LeisuresList,
    // Map,
    // Footer,
    // Header
    Hero
  }
};
</script>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }

  @import "~bulma/sass/utilities/_all";

  $primary: #2196ba;
  $dark: #062933;

  $colors: (
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert)
  );

  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  @import "~bulma";
  @import "~buefy/src/scss/buefy"
  
</style>
