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
        </template>
        <template slot="end">
            <b-navbar-item href="#MyProfile">
                <b-button class ="button" type="is-dark" outlined>
                    <span class="icon is-small" style="margin-right: 5px;">
                        <i class="fas fa-sm fa-user"></i>
                    </span>
                    MyProfile
                </b-button>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(faUser)
library.add(faGithub)

    export default {
        name: "NavBar"
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