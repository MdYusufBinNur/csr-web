<template>
  <v-container>
    <v-card class="bg-white" style="border-radius:  16px; min-height: 40vh" >
      <v-card-actions>
        <v-card-title>Google Form Responses</v-card-title>
        <v-spacer />
        <v-text-field density="comfortable" variant="outlined" hide-details placeholder="Search here" :append-inner-icon="'mdi-magnify'" v-model="search" />
      </v-card-actions>
      <v-data-table
          v-if="data"
          :headers="headers"
          :items="data"
          :items-per-page="100"
          class="bg-white"
          :search="search"
      >
        <template v-slot:[`item.field${index}`]="{ item }" v-for="(header, index) in headers" :key="index">
          {{ item[`field${index}`] }}
        </template>
      </v-data-table>

      <div v-else class="py-10">

        <v-skeleton-loader v-for="n in 10" :key="n" color="white" type="table-row-divider">

        </v-skeleton-loader>
      </div>


    </v-card>

  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const data = ref(null);
const search = ref('');
const headers = ref([]); // Initialize headers for the data table

onMounted(async () => {
  try {
    const responseData = await $fetch('/api/getGoogleSheetData');
    if (responseData && responseData.length) {
      data.value = responseData;

      // Generate headers based on the response's keys
      headers.value = Object.keys(responseData[0]).map((key, index) => ({
        text: key.replace(/_/g, ' ').toUpperCase(), // Adjust key names for display
        value: `field${index}`,
      }));

      // Map each item field to match the headers
      data.value = responseData.map(item =>
          Object.keys(item).reduce((acc, key, index) => {
            acc[`field${index}`] = item[key];
            return acc;
          }, {})
      );
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style scoped>
/* Optional styling adjustments */
</style>
