<template>
    <div class="leisures-list">
        <div class="column">
            <LeisurePreview v-for="leisure in list"
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
            list: null
        }
    },
    mounted() {
        axios
        .get('http://127.0.0.1:30006/leisures/all')
        .then(response => (this.list = response.data))
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