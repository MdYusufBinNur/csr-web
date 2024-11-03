<template>
  <v-container>
    <!-- Summary State Card -->
    <v-row :class="isMdAndUp ? '' : 'mt-15'">
      <v-col cols="6" xs="6" sm="6" md="3">
        <v-card class="mb-4 pa-5 bg-white" variant="flat" style="border-radius: 16px; background-color: #f5f5f5;">
          <v-card-title>User</v-card-title>
          <v-card-subtitle class="text-h5">{{ responseCount }}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="6" xs="6" sm="6" md="3">
        <v-card class="mb-4 pa-5 bg-white" variant="flat" style="border-radius: 16px; background-color: #f5f5f5;">
          <v-card-title>Jersey</v-card-title>
          <v-card-subtitle class="text-h5">{{ jerseyCount }}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" md="3"></v-col>
    </v-row>

    <v-card class="bg-white" style="border-radius: 16px; min-height: 40vh;">
      <v-card-actions>
        <v-card-title>Users</v-card-title>
        <v-spacer />
        <v-text-field
            density="comfortable"
            variant="outlined"
            hide-details
            placeholder="Search here"
            :append-inner-icon="'mdi-magnify'"
            v-model="search"
        />
      </v-card-actions>

      <!-- Conditional rendering of cards or data table -->
    <div v-if="filteredData.length">
      <v-row v-if="!isMdAndUp && data && filteredData.length" class="pa-4">
        <v-col v-for="item in filteredData" :key="item.id" cols="6" sm="6" xs="6">
          <v-card class="mb-4" variant="flat" style="border-radius: 16px;">
            <v-card-title class="text-caption">{{ item.name }}</v-card-title>
            <v-card-subtitle class="text-caption">Sl: {{ item.id }}</v-card-subtitle>
            <v-card-subtitle class="text-caption">Mobile: {{ item.mobile }}</v-card-subtitle>
            <v-card-subtitle class="text-caption">Size: {{ item.size }}</v-card-subtitle>
            <v-card-subtitle class="text-caption">Quantity: {{ item.quantity }}</v-card-subtitle>
            <v-card-actions class="px-4">
              <v-chip variant="flat"
                      density="comfortable"
                      size="small"
                      :color="item.status === 'Paid' ? 'success' : 'black'">
                {{ item.status === 'Paid' ? 'Paid' : 'Unpaid' }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-data-table
          v-else-if="data"
          :headers="headers"
          :items="filteredData"
          :items-per-page="100"
          class="bg-white"
          :search="search"
      >
        <template v-slot:[`item.timestamp`]="{ item }">
          <span>{{ item.timestamp }}</span>
        </template>
        <template v-slot:[`item.name`]="{ item }">
          <span>{{ item.name }}</span>
        </template>
        <template v-slot:[`item.mobile`]="{ item }">
          <span>{{ item.mobile }}</span>
        </template>
        <template v-slot:[`item.size`]="{ item }">
          <span>{{ item.size }}</span>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-chip variant="flat" density="comfortable" size="small" :color="item.status === 'Paid' ? 'success' : 'black'">
            {{ item.status === 'Paid' ? 'Paid' : 'Unpaid' }}
          </v-chip>
        </template>
      </v-data-table>
    </div>

      <div v-else class="py-10">
        <v-skeleton-loader v-for="n in 10" :key="n" color="white" type="table-row-divider"></v-skeleton-loader>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {useDisplay} from "vuetify";

const data = ref(null);
const search = ref('');
const responseCount = ref(0); // Count of responses
const jerseyCount = ref(0); // Count of responses
const headers = ref([
  { title: 'Sl', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Payment', key: 'status' },
  { title: 'Mobile', key: 'mobile' },
  { title: 'Size', key: 'size' },
  { title: 'Quantity', key: 'quantity' },
]);

const { mdAndUp } = useDisplay()

const isMdAndUp = computed(() => mdAndUp.value)
onMounted(async () => {
  try {
    const responseData = await $fetch('/api/fetchSheetData');
    if (responseData && responseData.length) {
      data.value = responseData;
      responseCount.value = responseData.length;
      jerseyCount.value = responseData.reduce((total, item) => total + (item.quantity || 0), 0);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

// Computed property to filter data based on search
const filteredData = computed(() => {
  if (!search.value) return data.value || [];
  return (data.value || []).filter(item =>
      Object.values(item).some(val =>
          String(val).toLowerCase().includes(search.value.toLowerCase())
      )
  );
});
</script>

<style scoped>
/* Optional styling adjustments */
</style>
