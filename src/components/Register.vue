<template>
<div class="columns is-centered">
    <div class="column is-one-third">
      <h1 class="title">Register</h1>
      <form>
        <b-field label="Email">
          <b-input v-model="email"> </b-input>
        </b-field>

        <b-field label="Username">
          <b-input v-model="username"> </b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model="password" type="password" password-reveal></b-input>
        </b-field>
        
         <b-button class="button" active @click="register">Register</b-button>
      </form>
    </div>
</div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Register',
        data() {
            
            return {
                email: '',
                username: '',
                password: '',
            }
        },
        methods: {
            register() {
                var url = 'http://127.0.0.1:30006/users/create/user';
                axios.post(url,
                {email: this.email, password: this.password, username: this.username})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style>
    .columns {
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .button {
        color: #0a1b15 !important;
		transition: 200ms all;
        min-height: 30px;
    }

    .button:hover {
        color: #04c970 !important;
        background-color:#0a1b15;
    }

</style>