<template>
  <v-container>
    <!-- Summary State Card -->
   <v-row>
     <v-col cols="12" xs="12" md="3">
       <v-card class="mb-4 pa-5 bg-white" variant="flat" style="border-radius: 16px; background-color: #f5f5f5;">
         <v-card-title >Jersey Count</v-card-title>
         <v-card-subtitle class="text-h5">{{ responseCount }}</v-card-subtitle>
       </v-card>
     </v-col>
     <v-col cols="12" xs="12" md="3"></v-col>
   </v-row>

    <v-card class="bg-white" style="border-radius: 16px; min-height: 40vh;">
      <v-card-actions>
        <v-card-title>Google Form Responses</v-card-title>
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
        <v-skeleton-loader v-for="n in 10" :key="n" color="white" type="table-row-divider"></v-skeleton-loader>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const data = ref(null);
const search = ref('');
const responseCount = ref(0); // Count of responses
const headers = ref([
  { text: 'Timestamp', value: 'timestamp' },
  { text: 'নাম (ইংরেজিতে লিখুন)', value: 'name' },
  { text: 'মোবাইল', value: 'mobile' },
  { text: 'সাইজ সিলেক্ট করুন', value: 'size' },
  { text: 'কয়টি জার্সি প্রি বুক করতে চান?', value: 'quantity' },
]);
onMounted(async () => {
  try {
    const responseData = await $fetch('/api/getGoogleSheetData');
    if (responseData && responseData.length) {
      data.value = responseData;

      // Set response count
      responseCount.value = responseData.length;

      // Generate headers based on the response's keys
      headers.value = Object.keys(responseData[0]).map((key, index) => ({
        text: key.replace(/_/g, ' ').toUpperCase(),
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
