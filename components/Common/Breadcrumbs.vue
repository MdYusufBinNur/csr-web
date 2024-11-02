<template>
  <v-breadcrumbs
    :items="breadcrumbs"
    class="txt text--primary px-0"
  >
    <template v-slot:divider>
      <v-icon small>
        mdi-menu-right
      </v-icon>
    </template>
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item>
        <span>
          {{ item.text }}
        </span>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    breadcrumbs: {
      type: Array,
      required: false
    }
  },
}
</script>

<style scoped>

</style>
