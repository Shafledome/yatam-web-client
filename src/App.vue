<template>
  <div id="app">
    <Navbar />
    <Hero />
    <!-- <Header /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- delete below. Just for testing -->
    <!-- <LeisuresList /> -->
    <!-- <Map /> -->
    <leisuresList />
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LeisuresList from './components/LeisuresList.vue'
// import Map from './components/Map.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
// import LeisurePreview from './components/LeisurePreview.vue';
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Map,
    Footer,
    Hero,
    Navbar,
    LeisuresList
  }
};
</script>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }

  @import "~bulma/sass/utilities/_all";

  $primary: #04c970;
  $dark: #0a1b15;

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
