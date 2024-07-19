<!-- <template>
    <div class="extreme-sports">
      <h1>Deportes Extremos <br> Hotel Vue</h1>
      <div class="grid-container">
        <div v-for="sport in sports" :key="sport.name" class="sport-card">
          <img :src="sport.image" :alt="sport.name" class="sport-image"/>
          <h2>{{ sport.name }}</h2>
          <p><strong>Descripción:</strong> {{ sport.description }}</p>
          <p><strong>Elemento:</strong> {{ sport.element }}</p>
          <p><strong>Valor por persona:</strong> ${{ sport.price }}</p>
        </div>
      </div>
      <footer class="footer">
        <p>¡Bienvenidos a Hotel Vue! Disfruta de una estancia inolvidable llena de aventuras.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExtremeSports',
    data() {
      return {
        sports: [
          {
            name: 'Parapente',
            image: 'https://www.zenparapente.es/wp-content/uploads/2023/02/Panoramica-desde-los-2000-metros-volando-en-parapente-biplaza.jpg',
            description: 'Vuela por los cielos de San Gil y disfruta de una vista impresionante.',
            element: 'Aire',
            price: 200000,
          },
          {
            name: 'Rafting',
            image: 'https://media.traveler.es/photos/622a11b662d4f113d6eb070c/16:9/w_2560%2Cc_limit/raf.jpg',
            description: 'Desciende por el río Fonce y siente la adrenalina de las aguas rápidas.',
            element: 'Agua',
            price: 150000,
          },
          {
            name: 'Bungee Jumping',
            image: 'https://i0.wp.com/pxsports.com/wp-content/uploads/2021/06/15-bungee.png?fit=1200%2C740',
            description: 'Salta desde una altura increíble y experimenta la emoción de la caída libre.',
            element: 'Aire',
            price: 250000,
          },
          {
            name: 'Escalada',
            image: 'https://www.viajaecuador.com.ec/wp-content/uploads/2020/12/escalada-en-roca.jpg',
            description: 'Sube por las impresionantes paredes de roca de San Gil.',
            element: 'Tierra',
            price: 180000,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .extreme-sports {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .sport-card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .sport-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  h2 {
    margin-top: 0;
  }
  
  p {
    margin: 5px 0;
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
   -->


   <template>
    <div class="extreme-sports">
      <h1>Deportes Extremos <br> Hotel Vue</h1>
      <div class="grid-container">
        <div v-for="sport in sports" :key="sport.name" class="sport-card">
          <img :src="sport.image" :alt="sport.name" class="sport-image"/>
          <h2>{{ sport.name }}</h2>
          <p><strong>Descripción:</strong> {{ sport.description }}</p>
          <p><strong>Elemento:</strong> {{ sport.element }}</p>
          <p><strong>Valor por persona:</strong> ${{ sport.price }}</p>
        </div>
      </div>
      <footer class="footer">
        <p>¡Bienvenidos a Hotel Vue! Disfruta de una estancia inolvidable llena de aventuras.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExtremeSports',
    data() {
      return {
        sports: [
          {
            name: 'Parapente',
            image: 'https://www.zenparapente.es/wp-content/uploads/2023/02/Panoramica-desde-los-2000-metros-volando-en-parapente-biplaza.jpg',
            description: 'Vuela por los cielos de San Gil y disfruta de una vista impresionante.',
            element: 'Aire',
            price: 200000,
          },
          {
            name: 'Rafting',
            image: 'https://media.traveler.es/photos/622a11b662d4f113d6eb070c/16:9/w_2560%2Cc_limit/raf.jpg',
            description: 'Desciende por el río Fonce y siente la adrenalina de las aguas rápidas.',
            element: 'Agua',
            price: 150000,
          },
          {
            name: 'Bungee Jumping',
            image: 'https://i0.wp.com/pxsports.com/wp-content/uploads/2021/06/15-bungee.png?fit=1200%2C740',
            description: 'Salta desde una altura increíble y experimenta la emoción de la caída libre.',
            element: 'Aire',
            price: 250000,
          },
          {
            name: 'Escalada',
            image: 'https://www.viajaecuador.com.ec/wp-content/uploads/2020/12/escalada-en-roca.jpg',
            description: 'Sube por las impresionantes paredes de roca de San Gil.',
            element: 'Tierra',
            price: 180000,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .extreme-sports {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .sport-card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .sport-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  h2 {
    margin-top: 0;
  }
  
  p {
    margin: 5px 0;
  }
  
  .footer {
    margin-top: 40px;
    padding: 20px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 8px;
  }
  
  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  
    .sport-card {
      padding: 15px;
    }
  
    .sport-image {
      height: 150px;
    }
  }
  </style>
  