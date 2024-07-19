<!-- <template>
    <div class="services">
      <h1>Servicios Hotel Vue</h1>
      <div class="grid-container">
        <div v-for="service in services" :key="service.name" class="service-card">
          <img :src="service.image" :alt="service.name" class="service-image"/>
          <h2>{{ service.name }}</h2>
          <p><strong>Descripción:</strong> {{ service.description }}</p>
          <p><strong>Valor:</strong> ${{ service.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Services',
    data() {
      return {
        services: [
          {
            name: 'Desayuno',
            image: 'https://www.comedera.com/wp-content/uploads/2022/12/Desayono-americano-shutterstock_2120331371.jpg',
            description: 'Disfruta de un delicioso desayuno para empezar el día con energía.',
            price: 20000,
          },
          {
            name: 'Restaurante',
            image: 'https://media.admagazine.com/photos/651aeed9da5f4d9a3844a94b/4:3/w_2660,h_1995,c_limit/Porten%CC%83o-restaurante-1.jpg',
            description: 'Saborea una variedad de platos gourmet en nuestro restaurante.',
            price: 50000,
          },
          {
            name: 'Bar',
            image: 'https://cnnespanol.cnn.com/wp-content/uploads/2022/10/221004154233-01-world-best-bars-2022-full-169.jpg?quality=100&strip=info',
            description: 'Relájate con una bebida en nuestro acogedor bar.',
            price: 15000,
          },
          {
            name: 'Piscina',
            image: 'https://img.lalr.co/cms/2018/04/23000021/piscinaweb.jpg?size=xl&ratio=r40_21',
            description: 'Disfruta de un refrescante baño en nuestra piscina.',
            price: 0,
          },
          {
            name: 'Gimnasio',
            image: 'https://etenonfitness.com/wp-content/uploads/2023/04/Novotel-Shanghai-Clover-Star-Trac.jpg',
            description: 'Mantente en forma en nuestro gimnasio totalmente equipado.',
            price: 0,
          },
          {
            name: 'Spa',
            image: 'https://traveler.marriott.com/es/wp-content/uploads/sites/2/2021/10/MC_MDEMC_Marriott_Medellin_Spa_1920x1080.jpg',
            description: 'Relájate y rejuvenece en nuestro spa con una variedad de tratamientos.',
            price: 80000,
          },
          {
            name: 'Aparcamiento',
            image: 'https://blog.way.com/wp-content/uploads/2021/04/MicrosoftTeams-image-2.jpg',
            description: 'Aparca tu vehículo con seguridad en nuestro aparcamiento.',
            price: 10000,
          },
          {
            name: 'Lavandería',
            image: 'https://d1f2ieqjc8iqzi.cloudfront.net/s3fs-public/2022-06/iStock-1132394797.jpg?VersionId=edqpQBi_A..nhqPZu4FuEEHvUSuuOPhB',
            description: 'Servicio de lavandería para que tu ropa esté siempre impecable.',
            price: 30000,
          },
          {
            name: 'Guardería',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/68/16/db/valle-corralco-hotel.jpg',
            description: 'Servicio de guardería para que disfrutes de tu estancia con tranquilidad.',
            price: 40000,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .services {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .service-card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .service-image {
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
  </style>
   -->


   <template>
    <div class="services">
      <h1>Servicios Hotel Vue</h1>
      <div class="grid-container">
        <div v-for="service in services" :key="service.name" class="service-card">
          <img :src="service.image" :alt="service.name" class="service-image"/>
          <h2>{{ service.name }}</h2>
          <p><strong>Descripción:</strong> {{ service.description }}</p>
          <p><strong>Valor:</strong> ${{ service.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Services',
    data() {
      return {
        services: [
          {
            name: 'Desayuno',
            image: 'https://www.comedera.com/wp-content/uploads/2022/12/Desayono-americano-shutterstock_2120331371.jpg',
            description: 'Disfruta de un delicioso desayuno para empezar el día con energía.',
            price: 20000,
          },
          {
            name: 'Restaurante',
            image: 'https://media.admagazine.com/photos/651aeed9da5f4d9a3844a94b/4:3/w_2660,h_1995,c_limit/Porten%CC%83o-restaurante-1.jpg',
            description: 'Saborea una variedad de platos gourmet en nuestro restaurante.',
            price: 50000,
          },
          {
            name: 'Bar',
            image: 'https://cnnespanol.cnn.com/wp-content/uploads/2022/10/221004154233-01-world-best-bars-2022-full-169.jpg?quality=100&strip=info',
            description: 'Relájate con una bebida en nuestro acogedor bar.',
            price: 15000,
          },
          {
            name: 'Piscina',
            image: 'https://img.lalr.co/cms/2018/04/23000021/piscinaweb.jpg?size=xl&ratio=r40_21',
            description: 'Disfruta de un refrescante baño en nuestra piscina.',
            price: 0,
          },
          {
            name: 'Gimnasio',
            image: 'https://etenonfitness.com/wp-content/uploads/2023/04/Novotel-Shanghai-Clover-Star-Trac.jpg',
            description: 'Mantente en forma en nuestro gimnasio totalmente equipado.',
            price: 0,
          },
          {
            name: 'Spa',
            image: 'https://traveler.marriott.com/es/wp-content/uploads/sites/2/2021/10/MC_MDEMC_Marriott_Medellin_Spa_1920x1080.jpg',
            description: 'Relájate y rejuvenece en nuestro spa con una variedad de tratamientos.',
            price: 80000,
          },
          {
            name: 'Aparcamiento',
            image: 'https://blog.way.com/wp-content/uploads/2021/04/MicrosoftTeams-image-2.jpg',
            description: 'Aparca tu vehículo con seguridad en nuestro aparcamiento.',
            price: 10000,
          },
          {
            name: 'Lavandería',
            image: 'https://d1f2ieqjc8iqzi.cloudfront.net/s3fs-public/2022-06/iStock-1132394797.jpg?VersionId=edqpQBi_A..nhqPZu4FuEEHvUSuuOPhB',
            description: 'Servicio de lavandería para que tu ropa esté siempre impecable.',
            price: 30000,
          },
          {
            name: 'Guardería',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/68/16/db/valle-corralco-hotel.jpg',
            description: 'Servicio de guardería para que disfrutes de tu estancia con tranquilidad.',
            price: 40000,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .services {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .service-card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .service-image {
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
  
  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
  </style>
  