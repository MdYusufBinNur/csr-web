<template>
  <v-card
      class="d-flex align-center justify-center flex-column mx-auto b-r-15 my-8 v-card--hover"
      variant="flat"
      color="white"
      style="border-radius: 15px"
  >

    <v-card-actions>
      <v-btn density="default" :icon="cardIcon" size="80" class="bg-surface"></v-btn>
    </v-card-actions>
    <v-card-item>
      <v-card-title>
        {{ cardTitle }}
      </v-card-title>
    </v-card-item>

    <v-card-text class="px-7">
     {{ cardDetails }}
    </v-card-text>
  </v-card>
</template>

<script setup>
import {defineProps, ref} from "vue";

const props = defineProps({
  cardTitle: {
    type: String,
    required: false
  },
  cardIcon: {
    type: String,
    required: false
  },
  cardDetails: {
    type: String,
    required: false
  }
})
</script>

<style scoped>

</style>