<template>
  <div class="profile">
    <div class="user-data" >
        <h1 class="title is-1">{{ values.username }}</h1>
    </div>    
    <div class="column">
        <TrophyList v-bind:user="key"></TrophyList> 
        <!-- <TrophyList v-for="user in users"
                      v-bind:key="user.id"
                      v-bind:username="user.username"
        ></TrophyList>
        -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TrophyList from './TrophyList'

export default {
  name: "Profile",
  components: {
    TrophyList
  },
  data() {
    return {
      user: null,
      //userData: null,
      //key: '-MN0ZWcLFHLjO3Tudsr4'
      key: null,
      values: null
    }
  },
  mounted() {
    axios
    .get('http://127.0.0.1:30006/users/email/mariano@gmail.com')
    .then(response => (this.user = response.data, 
                       this.key = Object.keys(this.user)[0],
                       this.values = Object.values(this.user)[0]))

    this.key = Object.keys(this.user)[0]
    /*
    axios
    .get('http://127.0.0.1:30006/users/user_key/-MN0ZWcLFHLjO3Tudsr4')
    .then(response => (this.userData = response.data))
    */
  }

}
</script>
