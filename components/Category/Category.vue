<template>
  <v-card rounded flat variant="elevated" class="bg-white" style="border-radius: 15px; height: 100%" v-if="isMediumAndUp">
    <v-list-item class="px-2">
      <v-list-item-title class="pa-4 font-weight-bold text-capitalize">
        Categories
      </v-list-item-title>
      <template v-slot:append>
        <v-btn variant="text" color="primary">
          All
        </v-btn>
      </template>
    </v-list-item>
    <v-list-item v-for="(item, i) in filteredItems" :key="i" class="pa-4" tile @click="navigate(item.to)">
      <v-list-item-title class="px-2">
        {{ item.name }}
      </v-list-item-title>
    </v-list-item>
  </v-card>

  <!-- Stylish Dialog with Countdown Animation -->
  <v-dialog v-model="dialog" max-width="400" transition="dialog-bottom-transition" persistent>
    <v-card class="text-center py-10 px-6" color="black" dark style="border-radius: 16px">
      <v-card-title class="text-h4 font-weight-bold">
        Feature Coming Soon
      </v-card-title>
      <v-card-subtitle class="text-h6 mt-3 mb-6">
        Launching on New Year's Day!
      </v-card-subtitle>
      <v-divider></v-divider>

      <div class="countdown-timer my-6">
        <span class="countdown">{{ days }}</span> days :
        <span class="countdown">{{ hours }}</span> hours :
        <span class="countdown">{{ minutes }}</span> minutes :
        <span class="countdown">{{ seconds }}</span> seconds
      </div>

      <v-btn color="primary" dark class="mt-4" @click="dialog = false">
        OK
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useDisplay } from "vuetify";
import { navigateTo } from "nuxt/app";

// Sample categories for navigation
const items = [
  { id: 1, name: 'Jersey Booking List', to: 'list' },
  { id: 2, name: 'Pre Booking Jersey', to: 'booking' },
  { id: 3, name: 'Photos', to: 'photos' },
  { id: 4, name: 'Plan', to: 'plan' },
  { id: 5, name: 'Tour Guide', to: 'guide' },
  { id: 6, name: 'Documents', to: 'documents' },
];

// Vuetify responsive breakpoints
const { mdAndUp, smAndDown } = useDisplay();
const isMediumAndUp = mdAndUp;
const isSmAndDown = smAndDown;

// Dialog state and navigation function
const dialog = ref(false);
const filteredItems = computed(() => items.slice(0, 7));

// Countdown logic
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

// Calculate time remaining until January 1, 2025
const calculateCountdown = () => {
  const targetDate = new Date('January 1, 2025 00:00:00').getTime();
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeLeft % (1000 * 60)) / 1000);
};

// Update countdown every second
onMounted(() => {
  calculateCountdown();
  setInterval(calculateCountdown, 1000);
});

const navigate = (data) => {
  if (data === 'list') {
    navigateTo('/' + data);
  } else {
    dialog.value = true;
  }
};
</script>

<style scoped>
.bg_darker {
  background: #eeece8;
}
.countdown {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffeb3b;
}
</style>
