<template>
    <section>
        <b-tabs class="table" v-model="activeTab">
            <b-tab-item label="Leisures">
                <LeisureCollapse v-bind:typeLeisure="'artgallery'" />
                <LeisureCollapse v-bind:typeLeisure="'cinema'" />
                <LeisureCollapse v-bind:typeLeisure="'dogpark'" />
                <LeisureCollapse v-bind:typeLeisure="'library'" />
                <LeisureCollapse v-bind:typeLeisure="'monument'" />
                <LeisureCollapse v-bind:typeLeisure="'museum'" />
                <LeisureCollapse v-bind:typeLeisure="'theater'" />
                <LeisureCollapse v-bind:typeLeisure="'training'" />
            </b-tab-item>

            <b-tab-item label="Music">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
    import LeisureCollapse from './LeisureCollapse.vue'
    export default {
        data() {
            return {
                activeTab: 0,
                showBooks: false
            }
        },
        components: {
            LeisureCollapse
        }
    }
</script>