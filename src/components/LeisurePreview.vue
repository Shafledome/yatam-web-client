<template>
    <div class="cardmodal">
        <LeisureModal 
                    v-bind:isActive="isActive"
                    v-bind:id="id"
                    v-bind:name="name"
                    v-bind:address="address"
                    v-bind:description="description"
                    v-bind:email="email"
                    v-bind:schedule="schedule"
                    v-bind:url="url"
                    @close="isActive = false"
                    />
        <div class="card">
            <a v-on:click="isActive = true">
                <div class="full-info">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                    <p class="title is-4"> {{ name }} </p>
                                    <p class="subtitle is-6"> {{ address }} </p>
                            </div>
                        </div>

                        <div class="content">
                                <p>{{ description }} </p>
                                <p>{{ email }} </p>
                                <p>{{ schedule }} </p>
                                <a :href="url">{{ url }}</a>
                                <p> {{ type }} </p>
                            <br>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import LeisureModal from './LeisureModal.vue';


export default {
    name: "LeisurePreview",
    data() {
        return {
            isActive: false
        }
    },
    components: {
        LeisureModal
    },
    props: {
        id: Number,
        name: String,
        address: String,
        type: String,
        description: String,
        email: String,
        schedule: String,
        url: String
    },
    methods: {
        openModal: function() {
            this.isActive = !this.isActive;
        }
    }
}


</script>

<style lang="scss">

    .full-info:hover {
        $card-content-background-color: #0a1b15;
        background-color: #0a1b15;
        transition: 200ms all;
    }

    .full-info .media-content p,
    .full-info .content p {
        transition: 200ms all;
    }

    .full-info:hover .media-content p {
        color: #fff;
    }

    .full-info:hover .content p {
        color: #fff;
    }

    @import "~bulma";
    @import "~buefy/src/scss/buefy";
    @import "~bulma/sass/utilities/_all";
</style>