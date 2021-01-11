<template>
    <div class="container">
        <h3  class="trophy-titles">Buscar Trofeo</h3>
        <b-field>
                <b-input v-model="search" placeholder="Nombre del Trofeo..." type="search"></b-input>
                <p class="control">
                    <b-button class="button is-primary" active @click="showResults">Buscar</b-button>
                </p>
        </b-field>
        <div class="column">
            <h3  class="trophy-titles">Trophies</h3>
            <TrophyPreview v-for="trophy in trophies"
                            v-bind:key="trophy.id"
                            v-bind:user="trophy.user"
                            v-bind:trophy="trophy.trophy"
                            v-bind:date="trophy.date"
            ></TrophyPreview>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import TrophyPreview from './TrophyPreview'

export default {
    name: 'Trophies',
    components: {
        TrophyPreview
    },
    data() {
        return {
            search: '',
            trophies: null
        }
    },
    methods: {
        showResults() {
            axios
        .get('http://127.0.0.1:30006/trophies/name/' + this.search)
        .then(response => (this.trophies = response.data)) 
        }
    },

    mounted() {
       axios
        .get('http://127.0.0.1:30006/trophy/all')
        .then(response => (this.trophies = response.data))
    }
}

</script>

<style>
    .trophy-titles {
        color: #ffffff;
        padding-bottom: 10px;
    }
</style>