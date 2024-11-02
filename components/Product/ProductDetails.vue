<template>
  <v-container class="product-details-container my-4">
    <v-row class="d-flex justify-center align-start">
      <!-- Product Image Slider Section -->
      <v-col cols="12" sm="12" md="8">
        <v-card
            :flat="true"
            class="mx-auto bg-white text-black"
            style="margin-top: 0; border-radius: 15px"
        >
          <v-carousel
              :show-arrows="true"
              :hide-delimiter-background="true"
              delimiter-icon="mdi-circle"
              cover
              cycle
              style="border-radius: 15px"
          >
            <v-carousel-item
                v-for="(item, i) in product.images"
                :key="i"
                :cycle="true"
                style="border-radius: 15px"
            >
              <v-img
                  :src="item"
                  alt="Product Image"
                  class="product-slider-image"
                  style="border-radius: 15px; object-fit: cover;"
                  height="350"
              />
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" sm="12" class="d-flex justify-center align-center">
        <div class="product-details-text">
          <!-- Product Title with Animation -->
          <h1 class="product-title fade-in">{{ product.title }}</h1>

          <!-- Brand -->
          <div class="product-brand fade-in">
            <span class="font-weight-bold">Brand:</span> {{ product.brand }}
          </div>

          <!-- Price -->
          <div class="product-price mt-2 fade-in">
            <span class="text-h5">Price: ${{ product.price }}</span>
          </div>

          <!-- Color Options -->
          <div class="mt-4 ">
            <span class="font-weight-bold align-center justify-center">Available Colors:</span>
            <div>
              <v-btn-toggle v-model="selectedColor" class="mt-2 justify-center align-center">
                <v-chip size="small"
                        v-for="color in product.colors"
                        :key="color"
                        :style="{ backgroundColor: color }"
                        class="px-3 ma-1"
                >
                </v-chip>
              </v-btn-toggle>
            </div>
          </div>
          <div class="mt-4">
            <span class="font-weight-bold">Available Sizes:</span>
            <v-btn-toggle v-model="selectedSize" class="mt-2">
              <v-chip
                  v-for="size in product.sizes"
                  :key="size"
                  class="px-3 ma-1"
              >
                {{ size }}
              </v-chip>
            </v-btn-toggle>
          </div>
          <!-- Add to Cart Button -->
          <div class="d-flex ga-4">
            <v-btn
                color="primary"
                class="mt-4"
                @click="addToCart"
                :loading="loading"
            >
              Add to Cart
            </v-btn>
            <v-btn
                color="success"
                class="mt-4 px-2"
                @click="sendWhatsAppMessage"
            >
              Send via WhatsApp
            </v-btn>
          </div>

        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <div class="product-info">
          <div class="product-description mt-4 fade-in">
            <h3 class="text-h6">Details:</h3>

            <div>
              Item specifics
              Condition
              New: A brand-new, unused, unopened, undamaged item in its original packaging (where packaging is ... Read moreabout the condition
              Screen Size
              41
              MPN
              MRXG3LW/a, MRXG3SA/A
              Brand
              Apple
              Series
              Apple Watch Series 9
              Case Color
              Red
              Type
              Smartwatch
              Band Color
              Red
              Band Material
              Aluminum
              Manufacturer Warranty
              1 Year
              Network
              Unlocked
              Model
              Apple Watch Series 9
              Case Size
              41 mm
              Operating System
              Apple Watch OS
              Features
              GPS
              Compatible Operating System
              iOS - Apple
              Case Material
              Aluminum
              Country/Region of Manufacture
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">WhatsApp Not Installed</v-card-title>
        <v-card-text>
          <div>Please install WhatsApp to continue.</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const dialog = ref(false)
const selectedColor = ref('') // Track selected color
const selectedSize = ref('')  // Track selected size (if needed)

// Sample product details
const product = ref({
  title: 'Apple Watch Series 7',
  brand: 'Apple',
  price: 399,
  description:
      'The latest Apple Watch Series 7 offers advanced health features, fitness tracking, and more with a larger display and durable design.',
  colors: ['#000000', '#FFFFFF', '#FF5733', '#1D8348'],
  sizes: ['Small', 'Medium', 'Large'],
  images: [
    '/SlideCard/slide-1.png',
    '/SlideCard/slide-2.png',
    '/SlideCard/slide-3.png',
  ],
})

// Add to cart action (Implement actual functionality)
const addToCart = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    alert('Product added to cart')
  }, 1000)
}

// Function to send product details via WhatsApp
const sendWhatsAppMessage = () => {
  const phoneNumber = '+88001998193057' // Add your WhatsApp number here
  const message = `Hello, I am interested in the following product:

  Product: ${product.value.title}
  Brand: ${product.value.brand}
  Price: $${product.value.price}
  Selected Color: ${selectedColor.value}
  Selected Size: ${selectedSize.value}

  Can you please provide more information?`

  // Encode the message for URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Redirect to WhatsApp with the pre-filled message
  // window.open(whatsappUrl, '_blank')

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // WhatsApp URL
    window.location.href = `https://wa.me/+88001998193057?text=${encodeURIComponent(message)}`;
  } else {
    // Show a message if WhatsApp is not installed
    dialog.value = true
  }
}
const  closeDialog = () => {
  dialog.value = false;
}
</script>

<style scoped>
.product-details-container {
  max-width: 1200px;
  margin: auto;
}

.product-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.product-brand {
  font-size: 0.9rem;
  color: #555;
}

.product-price {
  font-size: 1.5rem;
  color: #000;
}

.product-color {
  font-size: 0.9rem;
  color: #555;
}

.color-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 5px;
}

.product-info h1 {
  margin-bottom: 0.5rem;
}

.product-description p {
  line-height: 1.6;
}

/* Animation for fade-in effect */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}
</style>
