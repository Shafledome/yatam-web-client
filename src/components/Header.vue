<template>
    <div class="full-banner">
        <nav class="navbar">
            <div class="container">
                <strong><a href="" class="logo">YATAM</a></strong>
                <router-link class="nav-link" active-class="active" exact :to="{ name: 'login' }">
                    <i class="profile-logo"></i><a href=""> My profile </a>
                </router-link>
            </div>
        </nav>
        <Banner />
    </div>
</template>

<script>
    import Banner from './Banner.vue'

    export default {
        name: "Header",
        components: {
            Banner
        }
    }
</script>

<style>
    .full-banner {
        margin: 0% auto;
        width: 100vw;
        position: relative;
        left: 50%;
        margin-left: -50vw;
    }

    .navbar {
        border-radius: .25rem;
        background: #fff;
        padding: .5rem 1rem;
        display: block;
    }

    .navbar .container .logo {
        padding-top: 5px;
        font-size: 24px;
        float: left;
    }

    .navbar .container .nav-link {
        float: right;
        padding-right: 10px;
        padding-top: 5px;
    }

    .navbar .container .nav-link a {
        color: #888;
        font-size: 16px;
        background: transparent;        
    }

    .navbar .container .nav-link a:hover {
        color: #666;
    }
</style>