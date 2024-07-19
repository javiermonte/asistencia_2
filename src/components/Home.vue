<template>
<div class="welcome-page">
        <q-img
          src="../assets/img/hotel-vue.jpg"
          alt="Imagen del hotel"
          class="hero-img"
          style="max-height: 500px"
          basic
        >
          <div class="hero-text">
            <h1>Bienvenido al Hotel vue</h1>
            <p>Disfruta de nuestras instalaciones y servicios de lujo</p>
            <q-btn to="/Contacto" label="Reservar Ahora" color="primary" class="cta-button" />
          </div>
        </q-img>

        <h2 class="section-title">Servicios Destacados</h2>
        <div class="services">
          <div class="service">
            <q-img
              src="../assets/img/pool.jpg"
              alt="Piscina"
              class="service-img"
              @click="$router.push('/Servicios')"
            />
            <h3>Piscinas</h3>
            <p>Disfruta de nuestras piscinas de lujo y relajación.</p>
          </div>
          <div class="service">
            <q-img
              src="/public/img/restaurant.jpg"
              alt="Restaurante"
              class="service-img"
              @click="$router.push('/Servicios')"
            />
            <h3>Restaurant</h3>
            <p>Saborea la mejor gastronomía en nuestros restaurantes.</p>
          </div>
          <div class="service">
            <q-img
              src="../assets/img/spa.jpg"
              alt="Spa"
              class="service-img"
              @click="$router.push('/Servicios')"
            />
            <h3>Spas</h3>
            <p>Relájate y rejuvenece en nuestros spas de clase mundial.</p>
          </div>
        </div>
      </div>
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
  padding: 20%;
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