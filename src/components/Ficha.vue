<template>
  <div class="container">
    <div class="titleFirst">
      <h3>FICHAS</h3>
    </div>

    <hr class="divider" />

    <div class="q-pa-md q-gutter-sm">
      <q-btn  label="Crear" icon="add_circle" color="green" @click="AbrirModal = true" p="false" />

      <div class="table-container">
        <q-table :rows="rows" :columns="columns" row-key="name">
          <template v-slot:body-cell-opciones="props">
            <q-td :props="props">
              <q-btn round color="white" :style="{ border: '2px solid green' }" @click="Abrir(props.row)" p="true">
                <q-icon name="edit" style="color: green" />
              </q-btn>
              <q-btn icon="close" round color="red" @click="Activar(props.row._id)" v-if="props.row.Estado == 1" />
              <q-btn icon="check" round color="green" @click="Desactivar(props.row._id)" v-else />
            </q-td>
          </template>
          
          <template v-slot:body-cell-Estado1="props">
            <q-td :props="props">
              <p v-if="props.row.Estado == 1" class="custom-font" style="color: green">Activo</p>
              <p v-else class="custom-font" style="color: red">Inactivo</p>
            </q-td>
          </template>

          <template v-slot:body-cell-Numero="props">
            <q-td :props="props">
              <span class="custom-font">{{ props.pageIndex + 1 }}</span>
            </q-td>
          </template>
          
          <template v-slot:body-cell-Nombre1="props">
            <q-td :props="props">
              <span class="custom-font">{{ props.row.Nombre }}</span>
            </q-td>
          </template>

          <template v-slot:body-cell-Codigo1="props">
            <q-td :props="props">
              <span class="custom-font">{{ props.row.Codigo }}</span>
            </q-td>
          </template>
          
        </q-table>
      </div>

      <q-dialog v-model="AbrirModal" persistent>
        <q-card style="min-width: 350px; margin-top: 0">
          <q-card-section>
            <div class="iconoAprendiz">
              <img src="https://cdn-icons-png.flaticon.com/512/5825/5825337.png" alt="" />
            </div>
            <div class="text">
              {{ p == true ? "Editar Ficha" : "Agregar Ficha" }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense v-model="nombre" placeholder=" Nombre" autofocus color="green"
              @keyup.enter="prompt = false" />
            <br />

            <q-input dense v-model="codigo" placeholder="Codigo" autofocus color="green"
              @keyup.enter="prompt = false" />
            <br />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancelar" @click="p = false" color="red" v-close-popup />

            <q-btn :loading="useFicha.loading" label="Enviar" color="green" @click="CrearFicha()">
              <template v-slot:loading>
                <q-spinner color="white" size="1em" />
              </template>
            </q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { UseFichaStore } from "../Stores/fichas";

let inf = ref("");
let AbrirModal = ref(false);
let codigo = ref("");
let nombre = ref("");
let p = ref(false);
let id = ref("");

const useFicha = UseFichaStore();

const rows = ref([]);
// ficha
onBeforeMount(() => {
  traer();
});

async function traer() {
  let res = await useFicha.listarFicha();
  rows.value = res.data;
}

function limpiarCampos() {
  nombre.value = "";
  codigo.value = "";
}


async function Abrir(row) {

  AbrirModal.value = true;
  p.value = true;
  codigo.value = row.Codigo;
  nombre.value = row.Nombre;
  id.value = row._id;
}

async function CrearFicha() {
  console.log(p.value);
  
let res;
if (p.value ) {
    res = await useFicha.EditarFicha(id.value, nombre.value, codigo.value);
  } else {
    res = await useFicha.crearFicha(codigo.value, nombre.value);

  }

 
  if (res && res.status == 200) {
    await traer(); 
    AbrirModal.value = false; 
    p.value = false
    limpiarCampos();
  } else {
    AbrirModal.value = true; 
  }
}


async function Activar(id) {
  console.log(id);
  try {
    inf = await axios.put(`http://localhost:5173/api/Ficha/Desactivar/${id}`);
    traer();
  } catch (error) {
    console.log(error);
  }
}
async function Desactivar(id) {
  console.log(id);
  try {
    inf = await axios.put(`http://localhost:5173/api/Ficha/Activar/${id}`);
    traer();
  } catch (error) {
    console.log(error);
  }
}

const columns = ref([
  { name: "Numero", align: "center", label: "N°", field: "Numero" },

  {
    name: "Nombre1",
    required: true,
    label: "Nombre del Programa",
    align: "center",
    field: "Nombre",
    sortable: true,
  },
  {
    name: "Codigo1",
    align: "center",
    label: "Numero de ficha",
    field: "Codigo",
    sortable: true,
  },
  { name: "Estado1", label: "Estado", field: "Estado", sortable: true },
  { name: "opciones", label: "Opciones", align: "center" },
]);
</script>

<style>
* {
  margin: 0%;
  font-family: 'Roboto', Arial, sans-serif
}

.container {
  width: 90%;
  margin: 0 auto;
}

.titleFirst {
  margin: 15px 15px;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', Arial, sans-serif
}

.divider {
  width: 100%;
  border: 2px solid rgb(53, 164, 81);
}

.table-container {
  width: 100%;
  margin-top: 20px;
}

.q-table {
  width: 100%;
}


.custom-font {
  font-family: "Arial", sans-serif; 
  font-size: 16px; 
}

.q-table th {
  background-color: rgb(81, 204, 81); 
  color: #333;
  font-size: 15px; 
  font-family: 'Roboto', Arial, sans-serif; 
  font-weight: bold;
  padding: 10px; 
}

.q-btn {
  margin: 0 5px;
}

.q-dialog__backdrop {
  backdrop-filter: blur(5px);
  /* Ajusta el nivel de desenfoque */
  background-color: rgba(0,
      0,
      0,
      0.5);
}

</style>
