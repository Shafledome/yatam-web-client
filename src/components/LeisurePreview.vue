<template>
    <div class="leisure-preview">
        <div class="leisure">
            <div class="box">
                <article class="info">
                    <div class="info-left">
                        <div class="name" v-if="name !== null">
                            <strong><p>{{ name }} </p></strong>
                        </div>
                        <div class="address" v-if="address !== null">
                            <p>{{ address }} </p>
                        </div>
                        <div class="description" v-if="description !== null">
                            <p>{{ description }} </p>
                        </div>
                        <div class="email" v-if="email !== null">
                            <p>{{ email }} </p>
                        </div>
                        <div class="schedule" v-if="schedule !== null">
                            <p>{{ schedule }} </p>
                        </div>
                        <div class="url" v-if="url !== null">
                            <a href="url"><p>{{ url }}</p></a>
                        </div>
                    </div>
                    <div class="info-right">
                        <small><p>Read more...</p></small>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeisurePreview",
    props: {
        name: String,
        address: String,
        description: String,
        email: String,
        schedule: String,
        url: String
    }
    /* components: {

    }
    props: {
        leisure: {type: Object, required: true}
    },
    computed: {
        leisureLink() {
            return {
                name: "leisure",
                params: {
                    slug: this.leisure.slug
                }
            };
        }
    } */
};
</script>

<style>
    .leisure-preview {
        display: inline-block;
        font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
        font-size: 12px;
        line-height:16px;
        border-color: #eee #ddd #bbb;
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
        margin: 10px 5px;
        padding: 0 16px 16px 16px;
        background-color: #fff;
        width: 90%;
        text-align: left;
        height: 100%;
    }

    .leisure-preview p {
        font-size: 16px;
        margin: 5px;
        font-weight: normal;
        line-height: 20px;
    }

    .leisure-preview .url a {
        line-height: 20px;
        margin-left: 5px;
        text-decoration: none;
    }

    .leisure-preview .url a p {
        margin-top: 10px;
        font-size: 14px;
        line-height: 20px;
        font-weight: normal;
        color: #1b95ff;
    }

    .leisure-preview strong p{
        color: #2c3e50;
        margin-top: 10px;
        margin-left: 5px;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
    }

    .leisure-preview small p{
        font-size: 12px;
        font-style: italic;
        line-height: 10px;
        float: right;
    }
</style>