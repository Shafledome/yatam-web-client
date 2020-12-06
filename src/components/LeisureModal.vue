<template>
    <section>
        <b-modal v-model="this.$parent.isActive" :width="640" scroll="keep">
            <div class="card">
                <header class="modal-card-head">
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                </header>
                <div class="card-image">
                    <!-- <figure class="image is-4by3">
                        <img src="/static/img/placeholder-1280x960.png" alt="Image">
                    </figure> -->
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <!-- <figure class="image is-48x48">
                                <img src="/static/img/placeholder-1280x960.png" alt="Image">
                            </figure> -->
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{ name }}</p>
                            <p class="subtitle is-6">{{ address }}</p>
                        </div>
                    </div>

                    <div class="content">
                        <p> {{ description }} </p>
                        <br>
                        <p> {{ email }} </p>
                        <p> {{ schedule }} </p>
                        <a :href="url">{{ url }} </a>
                        <br>
                        <small> {{ type }} </small>
                        <RatingsList v-bind:data="null"
                                v-bind:user="false"
                                v-bind:idLeisure="id" />
                    </div>
                </div>
            </div>
        </b-modal>
    </section>
</template>

<script>
import RatingsList from './RatingsList.vue'

    export default {
        props: {
            isActive: Boolean,
            id: Number,
            name: String,
            address: String,
            type: String,
            description: String,
            email: String,
            schedule: String,
            url: String
        },
        components: {
            RatingsList
        }
    }
</script>