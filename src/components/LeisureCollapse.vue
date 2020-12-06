<template>
    <section>
        <div class="columns is-centered" style="padding-top: 0%;
        padding-bottom: 0%;">
            <div class="column is-half">
                <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3" :open="false">
                    <div
                        slot="trigger"
                        class="card-header"
                        role="button"
                        aria-controls="contentIdForA11y3">
                        <div v-if="typeLeisure == 'artgallery'">
                            <p class="card-header-title">
                                Art Galeries
                            </p>  
                        </div>
                        <div v-else-if="typeLeisure == 'cinema'">
                            <p class="card-header-title">
                                Cinemas
                            </p>  
                        </div>
                        <div v-else-if="typeLeisure == 'dogpark'">
                            <p class="card-header-title">
                                Dog Parks
                            </p>  
                        </div>
                        <div v-else-if="typeLeisure == 'library'">
                            <p class="card-header-title">
                                Libraries
                            </p>  
                        </div>
                        <div v-else-if="typeLeisure == 'monument'">
                            <p class="card-header-title">
                                Monuments
                            </p>  
                        </div>
                        <div v-else-if="typeLeisure == 'museum'">
                            <p class="card-header-title">
                                Museums
                            </p>  
                        </div>
                        <div v-else-if="typeLeisure == 'theater'">
                            <p class="card-header-title">
                                Theaters
                            </p>  
                        </div>
                        <div v-else-if="typeLeisure == 'training'">
                            <p class="card-header-title">
                                Training Parks
                            </p>  
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <LeisurePreview v-for="leisure in list"
                                v-bind:key="leisure.id"
                                v-bind:id="leisure.id"
                                v-bind:name="leisure.name"
                                v-bind:address="leisure.address"
                                v-bind:description="leisure.description"
                                v-bind:email="leisure.email"
                                v-bind:schedule="leisure.schedule"
                                v-bind:url="leisure.url"
                            ></LeisurePreview>
                        </div>
                    </div>
                </b-collapse>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import LeisurePreview from './LeisurePreview'

export default {
    name: "LeisureCollapse",
    components: {
        LeisurePreview
    },
    props: {
        typeLeisure: String
    },
    data() {
        return {
            list: null
        }
    },
    mounted() {
        var url = 'http://127.0.0.1:30007/leisures/';
        url = url + this.typeLeisure;
        axios
        .get(url)
        .then(response => (this.list = response.data))
    }
}
</script>

<style>
    .card-header {
        transition: 200ms all;
    }

    .card-header:hover {
        background: #fff;        
    }

    .card-header:hover .card-header-title {
        color: #04c970;
    }

    .card-header-title {
        transition: 200ms all;
    }
</style>