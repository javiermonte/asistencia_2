<template>
    <div>
        <q-layout view="hHh lpR fFf">
            <q-header elevated class="bg-darkgreen text-white" style="background-color: green;" height-hint="98">
                <q-toolbar>
                    <q-toolbar-title>
                        REPFORA
                    </q-toolbar-title>
                    <q-btn to="/Login" icon="exit_to_app" label="Salir" @click="salir" />
                </q-toolbar>

            </q-header>

            <q-page-container>
                <div class="VerificacionEmail" v-if="!codigoCorrecto">
                    <q-card style="min-width: 450px; margin-top:160px ;">
                        <q-card-section>
                            <div class="iconContraseñaOlvido">
                                <img src="https://cdn-icons-png.flaticon.com/512/6357/6357126.png" alt="">
                            </div>
                            <div class="text">
                                <p>Por favor digite el correo electrónico con el que se ha registrado anteriormente,
                                    allí le enviaremos todos los pasos para recuperar su contraseña.</p>
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-input dense v-model="email" placeholder="Email" autofocus color="green"
                                @keyup.enter="solicitarCodigo()" v-if="!prompt" />
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-input dense v-model="email1" placeholder="Email" autofocus color="green"
                                @keyup.enter="verificarCodigo()" v-if="prompt" />
                            <q-input dense v-model="codigo" placeholder="Codigo de Verificación" autofocus color="green"
                                @keyup.enter="verificarCodigo()" v-if="prompt" />
                        </q-card-section>
                        <q-card-actions align="right" class="text-primary">
                            <q-btn unelevated color="green" label="Enviar" :loading="usePassword.loading"
                                @click="codigoEnvido ? verificarCodigo() : solicitarCodigo()">
                                <template v-if="usePassword.loading">
                                    <q-spinner color="white" size="1em" />
                                </template>
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>




                <div class="cambiarContraseña" v-else="codigoCorrecto">
                    <q-card style="min-width: 450px; ">
                        <q-card-section>
                            <div class="text">
                                <h4>Restablecer Contraseña</h4>
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-input dense v-model="contrasenaActual" placeholder="Contraseña Actual" autofocus
                                color="green" /> <br>
                            <q-input dense v-model="contrasenaNueva" placeholder="Contraseña Nueva" autofocus
                                color="green" />
                        </q-card-section>
                        <q-card-actions align="right" class="text-primary">
                            <q-btn unelevated label="Enviar" :loading="usePassword.loading" @click="guardar()"
                                color="green" />
                        </q-card-actions>
                    </q-card>
                </div>
            </q-page-container>
        </q-layout>
    </div>


</template>


<script setup>

import { ref, resolveDirective } from 'vue'
import { UsePasswordStore } from '../Stores/Password';
import { useRouter } from 'vue-router';
import axios from 'axios';


const router = useRouter(); 
const prompt = ref(false)


// const address = ref('')
let email = ref('')
let email1 = ref('')
let codigo = ref('')
let contrasenaActual = ref('')
let contrasenaNueva = ref('')
let codigoEnvido = ref(false)
let codigoCorrecto = ref(false)

const usePassword = UsePasswordStore()



async function solicitarCodigo() {
    let res = await usePassword.CorreoMensaje(email.value)
    if (res) {
        prompt.value = true
        codigoEnvido.value = true
    }


}

async function verificarCodigo() {
    let res = await usePassword.verificarCodigo(email1.value, codigo.value)
    if (res) {
        codigoEnvido.value = false
        codigoCorrecto.value = true

    }
}

async function guardar() {
    let res = await usePassword.nuevaContraseña(email1.value, contrasenaActual.value, contrasenaNueva.value)
    if (res && res.status == 200) {
        router.push('/Login')
    }
}

function salir() {
    router.push("/Login")
}

</script>

<style>
.VerificacionEmail {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;

}

.text p {
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.iconContraseñaOlvido {
    width: 40%;
    margin: 0 auto;
}

.iconContraseñaOlvido img {
    width: 100%;
}

.cambiarContraseña {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
</style>
