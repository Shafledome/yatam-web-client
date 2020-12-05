<template>
  <div id="app">
    <Navbar />
    <Hero />
    <!-- <Header /> -->
    <!-- delete below. Just for testing -->
    <LeisuresList />
    <!-- <Map /> -->
    <!-- <RatingsList /> -->
    <LeisureModal />
    <Footer />
  </div>
</template>

<script>
import LeisuresList from './components/LeisuresList.vue'
// import Map from './components/Map.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'
import LeisureModal from './components/LeisureModal.vue'

export default {
  name: 'App',
  components: {
    // Map,
    Footer,
    Hero,
    Navbar,
    //RatingsList
    LeisuresList,
    LeisureModal
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
  $tabs-link-color: #fff;
  $tabs-link-hover-color: #888;
  $card-header-color: #fff;
  $card-header-background-color: #04c970;
  $card-background-color: #fff;
  $table-background-color: #0a1b15;

  $colors: (
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert)
  );

  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
  
</style>
