<template>
    <section>
        <!-- <div class="block">
            <b-switch v-model="showBooks"> Show Books item </b-switch>
        </div> -->
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

            <b-tab-item :visible="showBooks" label="Books">
                What light is light, if Silvia be not seen? <br>
                What joy is joy, if Silvia be not by— <br>
                Unless it be to think that she is by <br>
                And feed upon the shadow of perfection? <br>
                Except I be by Silvia in the night, <br>
                There is no music in the nightingale.
            </b-tab-item>

            <b-tab-item label="Videos" disabled>
                Nunc nec velit nec libero vestibulum eleifend.
                Curabitur pulvinar congue luctus.
                Nullam hendrerit iaculis augue vitae ornare.
                Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.
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
<style>
    .table {
        background: #0a1b15;
    }

    label {
        color: #fff;
    }
</style>