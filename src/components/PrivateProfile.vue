<template>
    <section>
        <div class="columns" style="background:#0a1b15;">
            <div div class="column is-one-fifth" />
            <div class="column" v-if="!edit">
                <h1 class="title is-4" style="color:#04c970;">My Profile</h1><br>
                <h2 class="title is-5" style="color:#fff;">Email</h2>
                <b-field>
                    <b-input v-model="mail" disabled></b-input>
                </b-field><br>

                <h2 class="title is-5" style="color:#fff;">Username</h2>
                <b-field>
                    <b-input v-model="username" disabled></b-input>
                </b-field><br>

                <b-button @click="changeToEdit" style="float:right">Editar</b-button><br><br>
            </div>
            <div class ="column" v-else>
                <h1 class="title is-4" style="color:#04c970;">My Profile</h1><br>
                <h2 class="title is-5" style="color:#fff;">Email</h2>
                <b-field>
                    <b-input v-model="mail" disabled></b-input>
                </b-field><br>

                <h2 class="title is-5" style="color:#fff;">Username</h2>
                <b-field>
                    <b-input v-model="username"></b-input>
                </b-field><br>

                <h2 class="title is-5" style="color:#fff;">Password</h2>
                <b-field>
                    <b-input v-model="password"></b-input>
                </b-field><br>

                <b-button @click="saveChanges" style="float:right">Guardar cambios</b-button><br><br>
            </div>
            <div div class="column is-one-fifth"/>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: 'private',
    props: {
        key: String
    },
    data() {
        return {
            username: null,
            mail: null,
            password: null,
            edit: false
        }
    },
    methods: {
        saveChanges(){
            axios
            .put('http://127.0.0.1:30006/users/update/user/username',
            {user: '-MMrFIxsvyD4yYS-q1wH', username: this.username});

            axios
            .put('http://127.0.0.1:30006/users/update/user/password',
            {user: '-MMrFIxsvyD4yYS-q1wH', password: this.password}).then((result) => {
                console.log(result);
            })
            this.edit = !this.edit
        },
        changeToEdit(){
            this.edit = !this.edit
        }
    },
    mounted() {
        axios
        .get('http://127.0.0.1:30006/users/user_key/' + this.key)
        .then(response => (this.username = response.data.username, 
                        this.mail = response.data.email, 
                        this.password = response.data.password))
    }

}
</script>
