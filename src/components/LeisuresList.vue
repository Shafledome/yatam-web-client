<template>
    <div class="leisures">
        <LeisureCollapse v-bind:typeLeisure="'artgallery'" />
        <LeisureCollapse v-bind:typeLeisure="'cinema'" />
        <LeisureCollapse v-bind:typeLeisure="'dogpark'" />
        <LeisureCollapse v-bind:typeLeisure="'library'" />
        <LeisureCollapse v-bind:typeLeisure="'monument'" />
        <LeisureCollapse v-bind:typeLeisure="'museum'" />
        <LeisureCollapse v-bind:typeLeisure="'theater'" />
        <LeisureCollapse v-bind:typeLeisure="'training'" />
    </div>
</template>

<script>
import LeisureCollapse from './LeisureCollapse.vue'

export default {
    components: {
        LeisureCollapse
    }
}
</script>