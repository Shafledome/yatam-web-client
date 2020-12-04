<template>
    <section class="hero is-fullheight is-fullwidth is-dark" id="hero" >
        <div class="hero-head">
            <div class="container has-text-centered">
                <h1 class="title is-size-4-mobile">
                    YATAM
                </h1>
                <h2 class="subtitle">
                    Yet Another Tourism App M&aacute;laga
                </h2>
            </div>
        </div>
        <vue-particles class="particles"
            :clickEffect="false"
            :hoverEffect="false"
            :lineLinked="true"
            :lineOpacity="0.2"
            :linesDistance="150"
            :linesWidth="1"
            :moveSpeed="1"
            :particleOpacity="0.4"
            :particleSize="3"
            :particlesNumber="80"
            color="#04c970"
            linesColor="#04c970"
            shapeType="polygon"
            hover-effect="grab"
            hover-mode="true"
            style="position: absolute; width: 100%; height: 100%; z-index: 0"
        ></vue-particles>
    </section>
</template>

<script>

export default {
    name: 'Hero'
}
</script>

<style>

    .hero-head {
        margin-top: 20px;
    }

    .particles  {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: 0 !important;
    }
</style>