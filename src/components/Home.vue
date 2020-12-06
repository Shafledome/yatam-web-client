<template>
  <div id="app">
    <Navbar v-bind:userKey="id"/>
    <Hero />
    <Tabs />
    <Footer />
  </div>
</template>

<script>
import Tabs from './Tabs.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import Hero from './Hero.vue'

export default {
    name: 'App',
    components: {
        Footer,
        Hero,
        Navbar,
        Tabs
    },

    props: {
      id: String,
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