

<template>
  <div id="login">
    <transition name="fade">
      <div class="InicioSecion">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="iconoAprendiz">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="" />
              <h6>Bienvenido Instructor</h6>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input 
              dense 
              v-model="email" 
              placeholder="Email" 
              autofocus 
              color="green" 
            />
            <br />
            <q-input 
              dense 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              placeholder="Password" 
              color="green"
            >
              <template v-slot:append>
                <q-icon 
                  @click="showPassword = !showPassword" 
                  :name="showPassword ? 'visibility' : 'visibility_off'" 
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </q-card-section>

          <q-card-actions align="center" class="text-primary">
            <q-btn :loading="useUsuario.loading" color="green" @click="secionIniciada()">
              Inicio de sesión
              <template v-slot:loading>
                <q-spinner color="white" size="1em" />
              </template>
            </q-btn>

            <div id="registro">
              <q-btn class="registrar" v-for="filter in backdropFilterList" :key="filter.label" color="green"
                :label="filter.label" no-caps @click="AbrirModal = true" />

              <transition name="slide-fade">
                <q-dialog v-model="AbrirModal" :backdrop-filter="backdropFilter">
                  <q-card class="dialogRegistrar">
                    <q-card-section>
                      <div class="iconoAprendiz">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBtGlvyvWl0J94UPgodmoEb0JexvhQut6Wg&s" alt="" />
                      </div>
                    </q-card-section>

                    <q-card-section>
                      <q-input dense v-model="nombre1" placeholder="Nombre" autofocus color="green" />
                      <br />
                      <q-input dense v-model="email1" placeholder="Email" autofocus color="green" />
                      <br />
                      <q-input 
                        dense 
                        v-model="password1" 
                        :type="showPassword1 ? 'text' : 'password'" 
                        placeholder="Password" 
                        color="green"
                      >
                        <template v-slot:append>
                          <q-icon 
                            @click="showPassword1 = !showPassword1" 
                            :name="showPassword1 ? 'visibility' : 'visibility_off'" 
                            class="cursor-pointer"
                          />
                        </template>
                      </q-input>
                    </q-card-section>

                    <q-card-actions align="right">
                      <q-btn :loading="useUsuario.loading" color="green" @click="registrar()">
                        Registrar
                        <template v-slot:loading>
                          <q-spinner color="white" size="1em" />
                        </template>
                      </q-btn>
                      <q-btn flat label="Close" color="red" v-close-popup />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </transition>
            </div>

            <router-link to="/Password">
              <a href="/Password" class="contraseñaRecuperar">Olvidé mi contraseña</a>
            </router-link>
            <router-link to="/Asistencia" class="registro">
              <button class="btn">Registrar asistencia de aprendiz</button>
            </router-link>
          </q-card-actions>
        </q-card>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { UseUsuarioStore } from "../Stores/usuario";
import { useRouter } from "vue-router";

let inicioSecion = ref(false);
let respuesta = ref("");
let Usuario = ref(false);
let router = useRouter();

// Usuario
let email = ref("");
let password = ref("");
let inicio = ref(true);

// Registro
let nombre1 = ref("");
let email1 = ref("");
let password1 = ref("");

const useUsuario = UseUsuarioStore();

const list = ["REGISTRAR"];
const dialog = ref(false);
const backdropFilter = ref(null);

const backdropFilterList = list.map((filter) => ({
  label: filter,
  onClick: () => {
    backdropFilter.value = filter;
    dialog.value = true;
  },
}));

const AbrirModal = ref(false);
const showPassword = ref(false);
const showPassword1 = ref(false); // Para el campo de la contraseña en el registro

function limpiarCampos() {
  (nombre1.value = ""), (email1.value = "");
  password1.value = "";
}

// Registro de usuario
async function registrar() {
  let registroUsuario = await useUsuario.registrar(
    nombre1.value,
    email1.value,
    password1.value
  );

  if (registroUsuario && registroUsuario.status == 200) {
    AbrirModal.value = false;
    limpiarCampos();
    return;
  } else {
    AbrirModal.value = true; 
  }
}

async function secionIniciada() {
  let res = await useUsuario.Login(email.value, password.value);
  if (res && res.status === 200) {
    Usuario.value = true;
    router.push("/Home");
  }
}
</script>

<style>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url("https://www.elestudiante.com.co/wp-content/uploads/2020/02/sena-aprendizaje-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  /* top: -120px; */
}

.InicioSecion {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.iconoAprendiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.iconoAprendiz h6 {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: #008000;
}

.registrar {
  width: 100%;
}

.contraseñaRecuperar {
  color: #008000;
}

.registro {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.registro:hover {
  background-color: #45a050;
}

button.btn {
  background-color: #45a050;
}
</style>