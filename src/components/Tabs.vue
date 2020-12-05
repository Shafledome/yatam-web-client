<template>
    <section>
        <b-tabs class="table" v-model="activeTab">
            <b-tab-item label="Leisures">
                <LeisuresList />
            </b-tab-item>

            <b-tab-item label="Map">
                <Map />
            </b-tab-item>
            <b-tab-item label="Events 2020">
                <EventsList />
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
    import LeisuresList from './LeisuresList.vue'
    import Map from './Map.vue'
    import EventsList from './EventsList.vue'

    export default {
        data() {
            return {
                activeTab: 0,
                showBooks: false
            }
        },
        components: {
            LeisuresList,
            Map,
            EventsList
        }
    }
</script>