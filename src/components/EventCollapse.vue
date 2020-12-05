<template>
    <section>
        <div class="columns is-centered">
            <div class="column is-half">
                <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3" :open="false">
                    <div
                        slot="trigger"
                        class="card-header"
                        role="button"
                        aria-controls="contentIdForA11y3">
                        <div v-if="showMore == false">
                            <p class="card-header-title">
                                Events
                            </p>  
                        </div>
                        <div v-else-if="showMore == true ">
                            <p class="card-header-title">
                                ShowMoreEvents
                            </p>  
                        </div>
                        
                    </div>
                    <div class="card-content">
                        <div class="content">
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
                            v-bind:recipient="event.DESTINATARIOS_DESCRIPCION"
                            />
                        </div>
                    </div>
                </b-collapse>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import EventPreview from './EventPreview'

export default {
    name: "EventCollapse",
    components: {
        EventPreview
    },
    data() {
        return {
            list: null
        }
    },
    props: {
        showMore: Boolean
    },
    created(){
        this.showMore = false;
    },
    mounted() {
        axios
        .get('http://127.0.0.1:30006/events/all')
        .then(response => (this.list = response.data))
    }
}
</script>

<style>
    .card-header {
        background: #04c970;
        transition: 200ms all;
    }

    .card-header:hover {
        background: #fff;        
    }

    .card-header:hover .card-header-title {
        color: #04c970;
    }

    .card-header-title {
        justify-content: center;
        align-items: center;
        color: #fff;
        transition: 200ms all;
    }
</style>