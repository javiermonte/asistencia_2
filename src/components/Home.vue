<template>
    <div id="home">
        <q-layout view="hHh lpR fFf">
            <q-header elevated class="bg-darkgreen text-white" style="background-color: green;" height-hint="98">
                <q-toolbar>
                    <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
                    <q-toolbar-title>
                        REPFORA
                    </q-toolbar-title>
                    <q-btn to="/Login" icon="exit_to_app" label="Salir" @click="salir" />
                </q-toolbar>
            </q-header>

            <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="custom-drawer">
                <div class="cuadroDespliegue">
                    <div class="logoSena">
                        <router-link to="/Home" class="logoSena">
                        <img src="https://senasofiaplus.xyz/wp-content/uploads/2023/10/logo-del-sena-01.png" alt="" />
                        <h6>{{ nombreAdministrador }}</h6>
                    </router-link>
                    </div>
                    <div class="Botones">
                        <q-btn id="boton" to="/Home/InicioMain" rounded color="green" label="Inicio" />
                        <q-btn id="boton" to="/Home/Bitacora" rounded color="green" label="Bitacora" />
                        <q-btn id="boton" to="/Home/Ficha" rounded color="green" label="Ficha" />
                        <q-btn id="boton" to="/Home/Aprendiz" rounded color="green" label="Aprendiz" />
                        <q-btn id="boton" to="/Home/Usuario" rounded color="green" label="Usuario" />
                    </div>
                </div>
            </q-drawer>

            <q-page-container>
                <router-view />
            </q-page-container>
        </q-layout>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { UseUsuarioStore } from '../Stores/usuario';
import { useRoute } from 'vue-router';

let router = useRoute();
const leftDrawerOpen = ref(false);
const nombreAdministrador = ref("");

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
}

function salir() {
    router.push("/Login");
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.InicioSecion {
    display: flex;
    justify-content: center;
    width: 100%;
}

.cuadroDespliegue {
    display: grid;
    justify-items: center;
}

.Botones {
    display: grid;
    justify-items: center;
    width: 100%;
}

/* Reducir el ancho de los botones */
#boton {
    width: 70%; /* Cambia a 70% para reducir el tamaño */
    margin: 5px 0; /* Espaciado vertical más reducido */
}

/* Estilo personalizado del Drawer */
.custom-drawer {
    background-color: #2d3e50; /* Fondo del drawer */
    color: white; /* Color del texto */
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3); /* Sombra del drawer */
}

/* Botones del Drawer */
.custom-drawer .q-btn {
    background-color: #4CAF50; /* Color de los botones */
    color: white;
    margin: 2px 0; /* Espacio reducido entre botones */
}

.custom-drawer .q-btn:hover {
    background-color: #388E3C; /* Color al pasar el mouse */
}

/* Estilos personalizados de las Cards */
.q-card {
    width: 350px;
    margin-top: 100px; /* Espacio superior reducido */
    background-color: #f5f5f5; /* Fondo claro */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
    border-radius: 12px; /* Bordes redondeados */
}

/* Sin transiciones en las tarjetas */
.q-card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Efecto de sombra más fuerte al pasar el mouse */
    background-color: #e0e0e0; /* Cambia el color de fondo al pasar el mouse */
}

/* Logo y textos */
.logoSena {
    display: grid;
    justify-items: center;
}

.logoSena img {
    width: 50%;
    margin-bottom: 5px; /* Espacio inferior reducido */
    margin-top: 15px; /* Espacio superior reducido */
}

.logoSena h6 {
    font-weight: 900;
}
</style>