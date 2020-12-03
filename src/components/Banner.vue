<template>
    <div class="banner">
        <div class="container">
            <h1 class="logo-font">YATAM</h1>
            <p class="banner-text"> Yet Another Tourism App M&aacute;laga</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style>
    .banner {
        background: #2c3e50;
        box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, .3), inset 0 -8px 8px -8px rgba(0, 0, 0, .3);
        width: auto;
        margin: 0 auto;
    }

    .banner h1 {
        color: #fff;
        padding-top: 2rem;
        margin-bottom: .2rem;
        text-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        font-weight: 700;
        text-align: center;
        font-size: 3.5rem;
    }

    .banner .container {
        max-width: 720px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px;
    }

    .banner .container p {
        font-family: sans-serif;
        color: #fff;
        text-align: center;
        font-size: 1rem;
        font-weight: 300 !important;
        padding-bottom: 2rem;
    }


</style>