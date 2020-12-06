<template>
<div class="columns is-centered">
    <div v-if="!noAccount" class="column is-one-fifth">
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
        <p class="p">No account? </p><a @click="activateRegister" class="link">Create a new one here.</a>
        <p v-if="error" class="error">Has introducido mal el usuario o la contraseña.</p>
    </div>

    <div v-else class="column is-one-third">
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
    import {router} from '../main.js'

    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                username: '',
                password: '',
                usernameData: '', 
                passwordData: '',
                userKey: '',
                error: false,
                dict: null,
                noAccount: false
            }
        },
        methods: {
            login() {
                var url = 'http://127.0.0.1:30006/users/username/';
                axios
                .get(url + this.username)
                .then(response => (this.dict = response.data, this.usernameData = Object.values(this.dict)[0].username, this.passwordData = Object.values(this.dict)[0].password));
                this.userKey = Object.keys(this.dict)[0];
                if(this.password == this.passwordData ) {
                    router.push({ name: 'home', params: {key: this.userKey}})
                } else {
                    this.error = true;
                }
            },

            activateRegister() {
                this.noAccount = true;
            },

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
                this.noAccount = false;
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

    .p {
        padding-top: 50px;
    }
    
</style>