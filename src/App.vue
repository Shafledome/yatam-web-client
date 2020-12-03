<template>
  <div id="app">
    <Header />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- delete below. Just for testing -->
    <!-- <LeisuresList /> -->
    <!-- <Map /> -->
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LeisuresList from './components/LeisuresList.vue'
// import Map from './components/Map.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LeisuresList,
    // Map,
    Footer,
    Header
  }
};
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
