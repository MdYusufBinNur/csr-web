<template>
  <v-container class="">
    <v-row dense>
      <v-col cols="12">
        <v-card-title class="font-weight-bold">
          Flash Deals
        </v-card-title>
      </v-col>
    </v-row>
    <v-row v-if="!mdAndUp">
      <v-col cols="6" v-for="(item, i) in items" :key="i+1">
        <SingleProduct
            :title="item.title"
            :image="item.image"
            :description="item.description"
            :button-text="item.buttonText"
            :button-url="item.buttonUrl"
            :show-button="item.showButton"
        />
      </v-col>

    </v-row>
    <v-row v-if="mdAndUp">
      <v-col cols="12" md="3" lg="3" xxl="2" sm="6" v-for="(item, i) in items" :key="i+1">
        <SingleProduct
            :title="item.title"
            :image="item.image"
            :description="item.description"
            :button-text="item.buttonText"
            :button-url="item.buttonUrl"
            :show-button="item.showButton"
        />
      </v-col>

    </v-row>

    <!--    <v-sheet color="transparent" class="d-flex flex-sm-1-0 flex-md-wrap ga-3 flex-wrap flex-sm-fill">-->
    <!--      <v-sheet-->
    <!--          v-for="(item,n) in items"-->
    <!--          :key="n"-->
    <!--          class="mb-2"-->
    <!--          style="border-radius: 15px"-->
    <!--          :style="smAndDown ? ' max-width: 190px' : ''"-->
    <!--      >-->
    <!--        <SingleProduct-->
    <!--            :title="item.title"-->
    <!--            :image="item.image"-->
    <!--            :description="item.description"-->
    <!--            :button-text="item.buttonText"-->
    <!--            :button-url="item.buttonUrl"-->
    <!--            :show-button="item.showButton"-->
    <!--        />-->
    <!--      </v-sheet>-->
    <!--    </v-sheet>-->
  </v-container>
</template>

<script setup>
import {defineProps, ref, watch} from 'vue'
import SingleProduct from './SingleProduct.vue'

import {useDisplay} from 'vuetify'
const {mdAndUp} = useDisplay();


// Define items with all necessary props
const items = ref([
  {
    title: 'Product 1',
    image: '/SlideCard/slide-1.png', // Path to image in public folder
    description: 'This is the description for Product 1',
    buttonText: 'Buy Now',
    buttonUrl: 'https://example.com/product1',
    showButton: true
  },
  {
    title: 'Product 2',
    image: '/SlideCard/slide-2.png',
    description: 'This is the description for Product 2',
    buttonText: 'Learn More',
    buttonUrl: 'https://example.com/product2',
    showButton: true
  },
  {
    title: 'Product 3',
    image: '/SlideCard/slide-3.png',
    description: 'This is the description for Product 3',
    buttonText: 'Explore',
    buttonUrl: 'https://example.com/product3',
    showButton: true
  },
  {
    title: 'Product 4',
    image: '/SlideCard/slide-4.png',
    description: 'This is the description for Product 4',
    buttonText: 'Discover',
    buttonUrl: 'https://example.com/product4',
    showButton: true
  },
  {
    title: 'Product 3',
    image: '/SlideCard/slide-3.png',
    description: 'This is the description for Product 3',
    buttonText: 'Explore',
    buttonUrl: 'https://example.com/product3',
    showButton: true
  },
  {
    title: 'Product 4',
    image: '/SlideCard/slide-4.png',
    description: 'This is the description for Product 4',
    buttonText: 'Discover',
    buttonUrl: 'https://example.com/product4',
    showButton: true
  },
  {
    title: 'Product 1',
    image: '/SlideCard/slide-1.png', // Path to image in public folder
    description: 'This is the description for Product 1',
    buttonText: 'Buy Now',
    buttonUrl: 'https://example.com/product1',
    showButton: true
  },
  {
    title: 'Product 2',
    image: '/SlideCard/slide-2.png',
    description: 'This is the description for Product 2',
    buttonText: 'Learn More',
    buttonUrl: 'https://example.com/product2',
    showButton: true
  }
])

// const props = defineProps({
//   title: {
//     type: String,
//     required: true
//   },
//   data: {
//     type: Array,
//     required: true
//   }
// })
</script>

<style scoped>
.v-slide-group {
  padding: 16px 0;
  max-width: 1200px;
  margin: auto;
}
</style>
