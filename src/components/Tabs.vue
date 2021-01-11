<template>
    <div class="elements">
        <section>
            <b-tabs position="is-left" class="block" v-model="selection">
                <b-tab-item label="Leisures" :value='"1"'>
                    <component :is="dynamicComponent" v-if="selection == '1'" v-bind:userKey="userKey"/>
                </b-tab-item>
                <b-tab-item label="Map" :value='"2"'>
                    <component :is="dynamicComponent" v-if="selection == '2'"/>
                </b-tab-item>
                <b-tab-item label="Events 2020" :value='"3"'>
                    <component :is="dynamicComponent" v-if="selection == '3'"/>
                </b-tab-item>
                <b-tab-item label="Trophies" :value='"4"'>
                    <component :is="dynamicComponent" v-if="selection == '4'"/>
                </b-tab-item>                       
            </b-tabs>            
        </section>
    </div>
</template>

<script>
    import LeisuresList from'./LeisuresList.vue'
    import Map from "./Map.vue";
    import EventsList from './EventsList.vue'
    import Trophies from './Trophies.vue'

    export default {
        data() {
            return {
                leisures: LeisuresList,
                map: Map,
                events: EventsList,
                trophies: Trophies,
                selection: "1"
            }
        },
        components: {
            LeisuresList,
            Map,
            EventsList,
            Trophies
        },
        computed: {
            dynamicComponent() {
                if (this.selection == "1") {
                    return this.leisures;
                } else if (this.selection == "2") {
                    return this.map;
                } else if (this.selection == "3") {
                    return this.events;
                } else {
                    return this.trophies
                }
            }
        },
      props: {
        userKey: String,
      }
    }
</script>

<style>
    .elements {
        background-color: #0a1b15;
    }
</style>