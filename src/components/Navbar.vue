<template>
    <b-navbar fixed-top="" class="navbar" v-bind:shadow="true">
        <template slot="start">
            <b-navbar-item href="https://github.com/Shafledome/yatam-web-client">
                <b-button class ="button" type="is-dark" outlined>
                    <span class="icon is-small" style="margin-right: 5px;">
                        <i class="fab fa-github"></i>
                    </span>
                    Client
                </b-button>
            </b-navbar-item>
            <b-navbar-item href="https://github.com/Shafledome/yatam-web-server">
                <b-button class ="button" type="is-dark" outlined>
                    <span class="icon is-small" style="margin-right: 5px;">
                        <i class="fab fa-github"></i>
                    </span>
                    Server
                </b-button>
            </b-navbar-item>
            <b-navbar-item>
                <b-button v-on:click="showHome()" class ="button" type="is-dark" outlined>
                    <span class="icon is-small" style="margin-right: 5px;">
                        <i class="fas fa-home"></i>
                    </span>
                    Home
                </b-button>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item>
              <CurrentWeather />
            </b-navbar-item>
            <b-navbar-item>
                <div v-if="priv">
                    <b-button v-on:click="showPrivate()" class ="button" type="is-dark" outlined disabled>
                        <span class="icon is-small" style="margin-right: 5px;">
                            <i class="fas fa-sm fa-user"></i>
                        </span>
                        My Profile
                    </b-button>
                </div>
                <div v-else>
                    <b-button v-on:click="showPrivate()" class ="button" type="is-dark" outlined>
                        <span class="icon is-small" style="margin-right: 5px;">
                            <i class="fas fa-sm fa-user"></i>
                        </span>
                        My Profile
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import CurrentWeather from "./CurrentWeather"
import {router} from '../main.js'

dom.watch()

library.add(faUser)
library.add(faGithub)
library.add(faHome)

export default {
    name: "NavBar",
    components: {CurrentWeather},
    props: {
        userKey: String,
        priv: Boolean
    },
    methods: {
        showPrivate(){
            router.push({ name: 'private', params: { key: this.userKey }})
        },
        showHome(){
            router.push({ name: 'home', params: { key: this.userKey }})
        }
    }
}
</script>

<style>
    .button {
        color: #0a1b15 !important;
		transition: 200ms all;
        float: right;
    }
    .button:hover {
        color: #04c970 !important;
    }
</style>