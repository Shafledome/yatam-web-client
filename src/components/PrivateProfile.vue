<template>
    <section>
        <h1>My Profile</h1>
        <div v-if="!edit">
            <b-field label="Email">
                <b-input v-model="mail" disabled></b-input>
            </b-field>

            <b-field label="Username">
                <b-input v-model="username" disabled></b-input>
            </b-field>

            <button @click="changeToEdit">Editar</button>
        </div>
        <div v-else>
            <b-field label="Email">
                <b-input v-model="mail" disabled></b-input>
            </b-field>

            <b-field label="Username">
                <b-input v-model="username"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input v-model="password"></b-input>
            </b-field>

            <button @click="saveChanges">Guardar cambios</button>
        </div>

    </section>
</template>

<script>
import axios from "axios";

export default {
    name: 'private',
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
        .get('http://127.0.0.1:30006/users/user_key/-MMrFIxsvyD4yYS-q1wH')
        .then(response => (this.username = response.data.username, 
                        this.mail = response.data.email, 
                        this.password = response.data.password))
    }

}
</script>
