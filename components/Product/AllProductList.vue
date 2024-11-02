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
      <v-col cols="6" v-for="(item, i) in items" :key="i+1" class="d-flex align-stretch px-2">
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
      <v-col cols="12" md="3" lg="3" xxl="2" sm="6" v-for="(item, i) in items" :key="i+1"
             class="d-flex flex-wrap align-stretch flex-fill"
      >
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
    title: 'Apple Watch Series 7(Latest)',
    image: '/SlideCard/slide-1.png', // Path to image in public folder
    description: 'This is the description for Apple Watch',
    buttonText: 'Buy Now',
    buttonUrl: '/product/1',
    showButton: true
  },
  {
    title: 'Nike Shoes',
    image: '/SlideCard/slide-2.png',
    description: 'This is the description for Nike Shoes',
    buttonText: 'Learn More',
    buttonUrl: '/product/1',
    showButton: true
  },
  {
    title: 'Shirts Collection',
    image: '/SlideCard/slide-3.png',
    description: 'This is the description for Shirts Collection',
    buttonText: 'Explore',
    buttonUrl: '/product/1',
    showButton: true
  },
  {
    title: 'Bags Collection',
    image: '/SlideCard/slide-4.png',
    description: 'This is the description for Bags Collection',
    buttonText: 'Discover',
    buttonUrl: '/product/1',
    showButton: true
  },
  {
    title: 'Shirts Collection',
    image: '/SlideCard/slide-3.png',
    description: 'This is the description for Shirts Collection',
    buttonText: 'Explore',
    buttonUrl: '/product/1',
    showButton: true
  },
  {
    title: 'Bags Collection',
    image: '/SlideCard/slide-4.png',
    description: 'This is the description for Bags Collection',
    buttonText: 'Discover',
    buttonUrl: '/product/1',
    showButton: true
  },
  {
    title: 'Apple Watch',
    image: '/SlideCard/slide-1.png', // Path to image in public folder
    description: 'This is the description for Apple Watch',
    buttonText: 'Buy Now',
    buttonUrl: '/product/1',
    showButton: true
  },
  {
    title: 'Nike Shoes',
    image: '/SlideCard/slide-2.png',
    description: 'This is the description for Nike Shoes',
    buttonText: 'Learn More',
    buttonUrl: '/product/1',
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
