<template>
<div class="columns is-centered">
    <div class="column is-one-fifth">
      <h1 class="title">Login</h1>
      <form>
        <b-field label="Username">
          <b-input v-model="username"> </b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model="password" type="password" password-reveal></b-input>
        </b-field>

         <b-button class="button" active @click="login">Login</b-button>
      </form>
        <p v-if="error" class="error">Has introducido mal el usuario o la contraseña.</p>
    </div>
    
</div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                usernameData: '', 
                passwordData: '',
                userKey: '',
                error: false,
                dict: null
            }
        },
        methods: {
            login() {
                var url = 'http://127.0.0.1:30006/users/username/';
                axios
                .get(url + this.username)
                .then(response => (this.dict = response.data, this.usernameData = Object.values(this.dict)[0].username, this.passwordData = Object.values(this.dict)[0].password));

                if(this.password != this.passwordData ) {
                this.error = true;
                //To-Do: what happens when you log in?
                } else {
                    this.error = false;
                }
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