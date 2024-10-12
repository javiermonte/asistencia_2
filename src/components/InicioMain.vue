<template>
    <div class="Container">
      <q-card 
        class="my-card" 
        flat 
        bordered 
        @mouseover="hoverCard(0, true)" 
        @mouseleave="hoverCard(0, false)"
        :style="{ backgroundColor: hoverIndex === 0 ?  '#edffed' : '#ffffff' }"
      >
        <q-img 
          src="https://static7.depositphotos.com/1001102/675/i/450/depositphotos_6751933-stock-photo-ring-binder-and-pen.jpg" 
          alt="Imagen" 
          style="height: 180px;" 
        />
        <q-card-section class="text-center">
          <div class="text-h6">BITACORA</div>
          <div class="text-subtitle2"></div> 
        </q-card-section>
        <q-card-actions align="center">
          <q-btn 
            label="Ver" 
            color="green" 
            to = './Bitacora'
          />
        </q-card-actions>
      </q-card>

      <q-card 
        class="my-card" 
        flat 
        bordered 
        @mouseover="hoverCard(1, true)" 
        @mouseleave="hoverCard(1, false)"
        :style="{ backgroundColor: hoverIndex === 1 ? '#edffed' : '#ffffff'}"
      >
        <q-img 
          src="https://st2.depositphotos.com/1017986/8012/i/450/depositphotos_80122056-stock-photo-group-of-school-kids-raising.jpg" 
          alt="Imagen" 
          style="height: 180px;" 
        />
        <q-card-section class="text-center">
          <div class="text-h6">FICHA</div>
          <div class="text-subtitle2"></div> 
        </q-card-section>
        <q-card-actions align="center">
          <q-btn 
            label="Ver" 
            color="green" 
            to = './Ficha'
          />
        </q-card-actions>
      </q-card>

      <q-card 
        class="my-card" 
        flat 
        bordered 
        @mouseover="hoverCard(2, true)" 
        @mouseleave="hoverCard(2, false)"
        :style="{ backgroundColor: hoverIndex === 2 ? '#edffed' : '#ffffff'}"
      >
        <q-img 
          src="https://png.pngtree.com/thumb_back/fw800/background/20230406/pngtree-college-students-from-diverse-backgrounds-study-together-at-home-photo-image_51040782.jpg" 
          alt="Imagen" 
          style="height: 180px;" 
        />
        <q-card-section class="text-center">
          <div class="text-h6">APRENDIZ</div>
          <div class="text-subtitle2"></div> 
        </q-card-section>
        <q-card-actions align="center">
          <q-btn 
            label="Ver" 
            color="green" 
            to = './Aprendiz'
          />
        </q-card-actions>
      </q-card>

      <q-card 
        class="my-card" 
        flat 
        bordered 
        @mouseover="hoverCard(3, true)" 
        @mouseleave="hoverCard(3, false)"
        :style="{ backgroundColor: hoverIndex === 3 ?  '#edffed' : '#ffffff' }"
      >
        <q-img 
          src="https://st2.depositphotos.com/1017986/8573/i/450/depositphotos_85730928-stock-photo-close-up-of-hands-with.jpg" 
          alt="Imagen" 
          style="height: 180px;" 
        />
        <q-card-section class="text-center">
          <div class="text-h6">USUARIO</div>
          <div class="text-subtitle2"></div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn 
            label="Ver" 
            color="green" 
            to = './Usuario'
          />
        </q-card-actions>
      </q-card>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        hoverIndex: null 
      };
    },
    methods: {
      hoverCard(index, isHovering) {
        this.hoverIndex = isHovering ? index : null; 
      },
      redireccionar() {
      }
    }
  };
  </script>

  <style>
.Container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 20px;
  justify-items: center;
  margin-top: 40px;
  padding: 0 20px;
}

.text-center {
  text-align: center;
}

@media (min-width: 1200px) {
  .Container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .Container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .Container {
    grid-template-columns: 1fr;
  }
}
  </style> 
