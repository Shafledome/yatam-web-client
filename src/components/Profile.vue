<template>
  <div class="profile">
    <div class="user-data" style="text-align:center; background: #ffffff;">
        <h1 class="title is-1" style="color:#0a1b15;  padding: 70px 0;">{{ values.username }}</h1>
    </div>
    <div class="columns" style="background:#0a1b15;">
        <div class="column is-one-fifth"></div>
        <div class="column is-one-fifth">
            <!-- <p class="title is-4" style="color:#04c970;">Trophies</p> -->
            <TrophyList v-bind:user="key"></TrophyList> 
        </div>
        <div class="column">
            <!-- <h3 class="title is-4" style="color:#04c970">Reviews</h3> -->
            <RatingsList v-bind:data="key"
                        v-bind:user=true></RatingsList>
        </div>
        <div class="column is-one-fifth"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TrophyList from './TrophyList'
import RatingsList from './RatingsList'

export default {
  name: "Profile",
  components: {
    TrophyList,
    RatingsList
  },
  props: {
      email: String
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
    .get('http://127.0.0.1:30006/users/email/' + this.email)
    .then(response => (this.user = response.data, 
                       this.key = Object.keys(this.user)[0],
                       this.values = Object.values(this.user)[0]))


    /*
    axios
    .get('http://127.0.0.1:30006/users/user_key/-MN0ZWcLFHLjO3Tudsr4')
    .then(response => (this.userData = response.data))
    */
  }

}
</script>
