<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="(item, i) in items"  :key="i" class="d-flex align-stretch text-center">
        <Card
            :card-title="item.title"
            :card-details="item.details"
            :card-icon="item.icon"
            :class="'py-10'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {ref} from 'vue'
import Card from "../Card/Card.vue";

const items = ref(
    [
      {
        title: 'Home Delivery',
        details: 'We offer competitive prices on our 100 million plus product any range',
        icon: 'mdi-rocket-launch-outline'
      },
      {
        title: 'Safe Payment',
        details: 'We offer competitive prices on our 100 million plus product any range.',
        icon: 'mdi-cash-multiple'
      },
      {
        title: 'Shop With Confidence',
        details: 'We offer competitive prices on our 100 million plus product any range.',
        icon: 'mdi-shield-home'
      },
      {
        title: '24/7 Support',
        details: 'We offer competitive prices on our 100 million plus product any range.',
        icon: 'mdi-headphones'
      },
    ]
)
</script>

<style scoped>

</style>