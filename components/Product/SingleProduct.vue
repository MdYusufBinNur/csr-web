<template>
  <v-card
      class="d-flex flex-column justify-space-between"
      color="white"
      elevation="0"
      style="border-radius: 15px;"
      width="100%"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
      ></v-progress-linear>
    </template>

    <div class="d-flex align-center justify-center">
      <div
          class="image-section d-flex justify-center align-content-center align-self-center"
          :class="isMediumAndUp ? 'w-10' : 'w-100'"
          style="position: relative"
      >
        <v-img
            :src="image"
            width="100"
            alt="Product Image"
            style="object-fit: cover; border-radius: 15px; align-content: center; "
            :style="isMediumAndUp ? 'height: 180px' : 'height: 150px'"
        />
      </div>
    </div>

    <v-card-item :class="'py-0 flex-grow-1'">  <!-- Ensure content can stretch with flex-grow -->
      <v-card-text :class="isMediumAndUp ? 'text-h5 pa-0' : 'text-body-1 pa-0'">
        {{ title }}
      </v-card-text>
    </v-card-item>

    <v-card-text :class="'pb-0 flex-grow-1'">  <!-- Allow stretching of content -->
      <div :class="isMediumAndUp ? 'text-body-1 pa-0' : 'text-body-2 pa-0'" v-if="showPrice">
        Price • {{ price }}
      </div>
    </v-card-text>

    <!-- Ensure button stays at bottom with margin-top:auto -->
    <v-card-actions class="card-footer mt-auto" v-if="showButton">
      <v-btn
          color="primary"
          variant="text"
          @click.prevent="goToProductDetails"
      >
        {{ buttonText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {defineProps} from 'vue'
import {useDisplay} from 'vuetify'
import {useRouter} from "nuxt/app";
const router = useRouter()

const {mdAndUp} = useDisplay()
// Computed property to check if it's medium and up
const isMediumAndUp = mdAndUp

// Define props for dynamic content
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: 'Learn More',
  },
  buttonUrl: {
    type: String,
    default: '#',
  },
  showButton: {
    type: Boolean,
    default: false,
  },
  showPrice: {
    type: Boolean,
    default: true,
  },
  price: {
    type: String,
    default: '300',
  },
})


// Define method to navigate using router.push
const goToProductDetails = () => {
  if (props.buttonUrl) {
    router.push({ path: props.buttonUrl }) // Use path for router navigation
  }
}
</script>

<style scoped>
.card-footer {
  margin-top: auto; /* Push the button to the bottom */
}
</style>
