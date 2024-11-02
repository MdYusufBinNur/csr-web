<template>
<v-container>
  <v-row>
    <v-col cols="12" md="3" sm="12" lg="3">
      <Category />
    </v-col>
    <v-col cols="12" md="9" sm="12" lg="9">
      <Slider />
    </v-col>
  </v-row>
</v-container>
</template>

<script setup>
import Slider from "../Slider/Slider.vue";
import Category from "../Category/Category.vue";
</script>

<style scoped>

</style>