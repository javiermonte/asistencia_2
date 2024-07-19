<template>
    <q-page padding>
      <h1>Habitaciones Hotel Vue</h1>
      <q-page-container>
        <q-page padding>
          <!-- Galería de Habitaciones -->
          <div class="q-gutter-md">
            <q-card v-for="room in rooms" :key="room.id" class="q-mb-md">
              <q-img :src="room.image" :alt="room.name" />
              <q-card-section>
                <q-card-title>{{ room.name }}</q-card-title>
                <p>{{ room.description }}</p>
                <p><strong>Precio:</strong> ${{ room.price }} por noche</p>
              </q-card-section>
            </q-card>
          </div>
  
          <!-- Formulario de Reserva -->
          <q-card class="q-mt-md">
            <q-card-section>
              <q-card-title>Reserva tu Habitación</q-card-title>
              <q-form @submit="submitForm" class="q-gutter-md">
                <q-input v-model="form.name" label="Nombre" required />
                <q-input v-model="form.email" label="Correo Electrónico" type="email" required />
                <q-select v-model="form.roomType" :options="roomOptions" label="Tipo de Habitación" required />
                <q-input v-model="form.checkin" label="Fecha de Check-in" type="date" required />
                <q-input v-model="form.checkout" label="Fecha de Check-out" type="date" required />
                <q-btn type="submit" label="Reservar" color="primary" />
              </q-form>
            </q-card-section>
            <footer class="footer">
      <p>¡Bienvenidos a Hotel Vue! Disfruta de una estancia inolvidable llena de aventuras.</p>
    </footer>
          </q-card>
        </q-page>
      </q-page-container>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rooms: [
        {
          id: 1,
          name: 'Habitación Estándar',
          description: 'Características: Cama doble, Wi-Fi gratuito, Televisión por cable, Aire acondicionado.',
          price: 100,
          image: 'https://images.mirai.com/HOST/500255/room-24672.jpg',
        },
        {
          id: 2,
          name: 'Suite',
          description: 'Características: Cama king-size, Sala de estar, Wi-Fi gratuito, Televisión por cable, Aire acondicionado.',
          price: 200,
          image: 'https://lesroches.edu/wp-content/uploads/2023/03/siuites-1.png',
        },
        {
          id: 3,
          name: 'Habitación Deluxe',
          description: 'Características: Cama queen-size, Vista al mar, Wi-Fi gratuito, Minibar, Aire acondicionado.',
          price: 150,
          image: 'https://media.revistagq.com/photos/5dd2729142317f0008ff2af2/master/w_1600%2Cc_limit/slider_geneva-suite-living-room-view-2015.jpg',
        },
        {
          id: 4,
          name: 'Suite Presidencial',
          description: 'Características: Cama king-size, Jacuzzi, Vista panorámica, Wi-Fi gratuito, Televisión por cable, Aire acondicionado.',
          price: 400,
          image: 'https://www.tuoagency.com/uploads/deco-suite.jpg?1559041541584',
        },
        {
          id: 5,
          name: 'Habitación Familiar',
          description: 'Características: 2 Camas dobles, Wi-Fi gratuito, Televisión por cable, Aire acondicionado, Espacio adicional.',
          price: 180,
          image: 'https://www.swissotel.com/assets/0/92/2119/2178/2217/2219/6442451722/83eb355a-2f1c-49d8-ad51-1ccce3b52b33.jpg',
        },
        {
          id: 6,
          name: 'Habitación Económica',
          description: 'Características: Cama individual, Wi-Fi gratuito, Televisión por cable, Aire acondicionado.',
          price: 80,
          image: 'https://i.pinimg.com/originals/5f/76/67/5f76678bb71ea8e786b2d918e06a478b.jpg',
        },
      ],
      form: {
        name: '',
        email: '',
        roomType: '',
        checkin: '',
        checkout: '',
      },
    };
  },
    computed: {
      roomOptions() {
        return this.rooms.map(room => ({ label: room.name, value: room.name }));
      },
    },
    methods: {
      submitForm() {
        console.log('Formulario enviado:', this.form);
        // Aquí puedes manejar la lógica para enviar el formulario de reserva
      },
    },
  };
  </script>
  
  <style scoped>
  .q-page {
    max-width: 800px;
    margin: 0 auto;
  }
  .q-card img {
    height: 200px;
    object-fit: cover;
  }

  .footer {
  margin-top: 40px;
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 8px;
}
  </style>
  