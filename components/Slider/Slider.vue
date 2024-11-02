<template>
  <v-card
      :flat="true"
      class="mx-auto bg-white text-black"
      style="margin-top: 0; border-radius: 15px"
  >
    <v-carousel
        :show-arrows="false"
        :hide-delimiter-background="true"
        delimiter-icon="mdi-circle"
        cover
        cycle
        style="border-radius: 15px"
    >

      <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :cycle="true"
          style="border-radius: 15px"
      >
        <div class="d-flex align-center justify-center" :class="isMediumAndUp ? 'flex-row' : 'flex-column-reverse'">
          <!-- Text and Button Section (Left on mdAndUp) -->
          <div
              class="text-section"
              :class="isMediumAndUp ? 'w-50 pr-4' : 'w-100'"
              style="display: flex; flex-direction: column; justify-content: center;"
          >
            <p
                class="font-weight-bold fade-in-up"
                :class="isMediumAndUp ? 'text-h4' : 'text-body-1 px-2'"
            >
              {{ item.title }}
            </p>
            <p
                class="fade-in-up text-body"
                :class="isMediumAndUp ? '' : 'px-2'"
            >
              {{ item.description }}
            </p>
            <v-btn class="mt-4 px-15"  :class="isMediumAndUp ? '' : 'ml-2'"  color="primary" :width="isMediumAndUp ? '25%' : '50%'">
              Learn More
            </v-btn>
          </div>

          <!-- Image Section (Right on mdAndUp) -->
          <div
              class="image-section"
              :class="isMediumAndUp ? 'w-30' : 'w-50'"
              style="position: relative"
          >
            <img
                :src="item.src"
                alt="Product Image"
                style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px; align-content: center"
            />
            <!-- Gradient overlay for mobile -->
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

// Carousel items with images from the public folder and product-related text
const items = ref([
  {
    src: '/SlideCard/slide-1.png',
    title: '50% off your first shopping!',
    description: 'For mobile, the layout remains as before with a single column, while on larger screens, it switches to two columns (text on the left, image on the right).',
  },
  {
    src: '/SlideCard/slide-2.png',
    title: '50% off your first shopping!',
    description: 'For mobile, the layout remains as before with a single column, while on larger screens, it switches to two columns (text on the left, image on the right).',
  },
  {
    src: '/SlideCard/slide-3.png',
    title: '50% off your first shopping!',
    description: 'For mobile, the layout remains as before with a single column, while on larger screens, it switches to two columns (text on the left, image on the right).',
  },
  {
    src: '/SlideCard/slide-4.png',
    title: '50% off your first shopping!',
    description: 'For mobile, the layout remains as before with a single column, while on larger screens, it switches to two columns (text on the left, image on the right).',
  },
]);

// Use useDisplay to detect breakpoints
const { mdAndUp } = useDisplay();

// Computed property to check if it's medium and up
const isMediumAndUp = mdAndUp;
</script>

<style scoped>
/*.text-section {*/
/*  padding: 16px;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
/*}*/

/*.image-section {*/
/*  position: relative;*/
/*  border-radius: 15px;*/
/*}*/
/**/
</style>
