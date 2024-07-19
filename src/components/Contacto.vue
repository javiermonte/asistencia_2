<template>
    <div class="contact-page">
      <div class="background-image"></div>
      <div class="content">
        <h2>Contacto y Reservas <br> Hotel Vue</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="form-group">
            <label for="phone">Teléfono:</label>
            <input type="tel" id="phone" v-model="phone" required />
          </div>
          <div class="form-group">
            <label for="date">Fecha de la Reserva:</label>
            <input type="date" id="date" v-model="date" required />
          </div>
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="payment">Método de Pago:</label>
            <select id="payment" v-model="payment" required>
              <option value="credit-card">Tarjeta de Crédito</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <div class="hotel-info">
          <h2>Contacto del Hotel</h2>
          <p>Teléfono: +123 456 789</p>
          <p>Email: contacto@hotelvue.com</p>
          <h2>Ubicación del Hotel</h2>
          <p>San Gil, Santander, Colombia</p>
        </div>
      </div>
      <footer class="footer">
      <p>¡Bienvenidos a Hotel Vue! Disfruta de una estancia inolvidable llena de aventuras.</p>
    </footer>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Contact',
    setup() {
      const name = ref('');
      const phone = ref('');
      const date = ref('');
      const email = ref('');
      const payment = ref('');
  
      const submitForm = () => {
        console.log('Nombre:', name.value);
        console.log('Teléfono:', phone.value);
        console.log('Fecha de la Reserva:', date.value);
        console.log('Correo Electrónico:', email.value);
        console.log('Método de Pago:', payment.value);
        resetForm();
      };
  
      const resetForm = () => {
        name.value = '';
        phone.value = '';
        date.value = '';
        email.value = '';
        payment.value = '';
      };
  
      return {
        name,
        phone,
        date,
        email,
        payment,
        submitForm,
        resetForm,
      };
    },
  };
  </script>
  
  <style scoped>
  .contact-page {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/public/img/hotel-vue.jpg') no-repeat center center;
    background-size: cover;
    filter: blur(3px);
    z-index: -1;
  }
  
  .content {
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 8px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007BFF;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .hotel-info {
    margin-top: 40px;
  }
  </style>
  