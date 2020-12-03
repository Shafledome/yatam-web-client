<template>
    <footer>
        <div class="container">
            <a href="https://github.com/Shafledome/yatam-web-client" class="logo">
                YATAM 
            </a>
            <span class="attribution">
                 &mdash; Yet Another Tourism App M&aacute;laga
                Code &amp; design licensed under GNU v3.0.
            </span>
        </div>
    </footer>   
</template>

<script>
    export default {
        name: "Footer"   
    };
</script>

<style>

    footer {
        background: #e1e1e1;
        margin-top: 3rem;
        padding: 1rem 0;
        position: absolute;
        bottom: 0;
        width: 99%;
    }

    .container a {
        color: #1b95ff;
        text-decoration: none;
        font-weight: bold;
    }
</style>