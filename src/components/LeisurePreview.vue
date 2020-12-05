<template>
    <div class="card">
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
                        <a href="url">{{ url }}</a>
                        <p> {{ type }} </p>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeisurePreview",
    props: {
        id: Number,
        name: String,
        address: String,
        type: String,
        description: String,
        email: String,
        schedule: String,
        url: String
    }
};
</script>

<style lang="scss">

    .full-info:hover {
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
</style>