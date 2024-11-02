<template>
  <v-app>
    <Header />
    <v-main class="bg-surface" :style="layoutTopStyle">
      <nuxt-page />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useDisplay } from 'vuetify';
import Header from '../components/Common/Header.vue';

const dialog = ref(false);
const notifications = ref(false);
const sound = ref(true);
const widgets = ref(false);
const drawer = ref(false);
const group = ref(null);
const opacity = ref(1);

const { smAndDown } = useDisplay(); // Get display breakpoint information from Vuetify

// Compute layout top padding based on screen size
const layoutTopStyle = computed(() => (smAndDown.value ? '--v-layout-top: 36px' : '--v-layout-top: 96px'));

// Watch for changes in group and close the drawer
watch(group, () => {
  drawer.value = false;
});
</script>

<style scoped>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
