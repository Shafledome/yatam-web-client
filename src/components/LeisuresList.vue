<template>
    <div class="leisures">
        <LeisureCollapse v-bind:typeLeisure="'artgallery'" v-bind:userKey="userKey"/>
        <LeisureCollapse v-bind:typeLeisure="'cinema'" v-bind:userKey="userKey"/>
        <LeisureCollapse v-bind:typeLeisure="'dogpark'" v-bind:userKey="userKey"/>
        <LeisureCollapse v-bind:typeLeisure="'library'" v-bind:userKey="userKey"/>
        <LeisureCollapse v-bind:typeLeisure="'monument'" v-bind:userKey="userKey"/>
        <LeisureCollapse v-bind:typeLeisure="'museum'" v-bind:userKey="userKey"/>
        <LeisureCollapse v-bind:typeLeisure="'theater'" v-bind:userKey="userKey"/>
        <LeisureCollapse v-bind:typeLeisure="'training'" v-bind:userKey="userKey"/>
    </div>
</template>

<script>
import LeisureCollapse from './LeisureCollapse.vue'

export default {
    components: {
        LeisureCollapse
    },
    props: {
      userKey: String,
    }
}
</script>