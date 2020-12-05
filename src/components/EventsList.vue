<template>
    <div class="event-list">
        <div class="column">
            <EventPreview v-for="event in events"
            v-bind:key="event.ID_ACTIVIDAD"
            v-bind:name="event.NOMBRE"
            v-bind:event="event.EVENTO"
            v-bind:description="event.DESCRIPCION"
            v-bind:email="event.E_MAIL"
            v-bind:initDate="event.F_INICIO"
            v-bind:endDate="event.F_FIN"
            v-bind:url="event.DIRECCION_WEB"
            v-bind:type="event.CATEGORIA"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import EventPreview from './EventPreview.vue'

export default {
    name: "EventList",
    components: {
        EventPreview
    },
    data() {
        return {
            events: null
        }
    },
    mounted() {
        axios
        .get('http://127.0.0.1:30006/events/all')
        .then(response => (this.events = response.data))
    },
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