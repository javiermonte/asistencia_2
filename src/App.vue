
<template>
  
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
          <!-- Título del hotel -->
          <div style="font-size: 24px; font-weight: bold; cursor: pointer;" @click="$router.push('/')">
            Hotel Vue
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="center" dense>
        <q-route-tab to="/Home" label="Inicio" />
        <q-route-tab to="/Habitaciones" label="Habitaciones" />
        <q-route-tab to="/Contacto" label="Contacto" />
        <q-route-tab to="/Deportes" label="Deportes" />
        <q-route-tab to="/Servicios" label="Servicios" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>

.welcome-page {
  text-align: center;
  padding: 20px;
}

.hero-img {
  width: 100%;
  position: relative;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.section-title {
  margin: 20px 0;
}

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.service {
  background-color: #fff;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
}

.service-img {
  max-width: 100%;
  border-radius: 10px;
}

.cta-button {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .hero-text {
    font-size: 14px;
    padding: 10px;
  }

  .services {
    flex-direction: column;
  }
}
</style>

