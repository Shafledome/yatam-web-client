<template>
    <div class="leisures-list">
        <div class="column">
            <!-- needs a function to select leisure type -->
            <LeisurePreview v-for="leisure in artGallery"
                v-bind:key="leisure.id"
                v-bind:name="leisure.name"
                v-bind:address="leisure.address"
                v-bind:description="leisure.description"
                v-bind:email="leisure.email"
                v-bind:schedule="leisure.schedule"
                v-bind:url="leisure.url"
            ></LeisurePreview>
        </div>
        <!-- ToDo: Anyadir tipo en las tarjetas y cabecera con el tipo de ocio -->
    </div>
</template>

<script>
import axios from "axios";
import LeisurePreview from './LeisurePreview'

export default {
    name: "LeisuresList",
    components: {
        LeisurePreview
    },
    data() {
        return {
            artGallery: null,
            cinema: null,
            dogpark: null,
            library: null,
            monument: null,
            museum: null,
            theater: null,
            training: null
        }
    },
    mounted() {
        axios
        .get('http://127.0.0.1:30006/leisures/artgallery')
        .then(response => (this.artGallery = response.data))

        axios
        .get('http://127.0.0.1:30006/leisures/cinema')
        .then(response => (this.cinema = response.data))

        axios
        .get('http://127.0.0.1:30006/leisures/dogpark')
        .then(response => (this.dogpark = response.data))

        axios
        .get('http://127.0.0.1:30006/leisures/library')
        .then(response => (this.library = response.data))

        axios
        .get('http://127.0.0.1:30006/leisures/monument')
        .then(response => (this.monument = response.data))

        axios
        .get('http://127.0.0.1:30006/leisures/museum')
        .then(response => (this.museum = response.data))

        axios
        .get('http://127.0.0.1:30006/leisures/theater')
        .then(response => (this.theater = response.data))

        axios
        .get('http://127.0.0.1:30006/leisures/training')
        .then(response => (this.training = response.data))
    }
}
</script>

<style>
    html {
        height: 100%;
        padding-top: 10px;
        background: #e6ecf1;
    }

    .leisures-list {
        margin: auto;
        max-width: 900px;
    }
</style>