<template>
  <div>
    <v-system-bar v-if="isMediumAndUp" window color="secondary">
      <v-container class="d-flex justify-start">
        <div class="d-flex justify-start align-center">
          <v-icon class="me-2" icon="mdi-phone"></v-icon>
          <span>+8801815625375</span>
          <span class="px-5">|</span>
          <v-icon class="me-2" icon="mdi-email-outline"></v-icon>
          <span>mdyusufbinnur@gmail.com</span>
        </div>
      </v-container>
    </v-system-bar>

    <v-app-bar elevation="0" scroll-threshold="0" color="white" style="width: 100%">
      <v-container :class="'d-flex align-center'" style="width: 100%">
        <div>
          <v-btn variant="text" size="x-large" :ripple="false" class="bg-white" @click.prevent="() => navigateTo('/')">
            CSR
          </v-btn>
        </div>
        <v-spacer />
        <div>
          <v-app-bar-nav-icon @click.stop="toggleDialog" v-if="!isMediumAndUp" >
            <template v-slot:default>
              <MenuSVG />
            </template>
          </v-app-bar-nav-icon>
        </div>
      </v-container>
    </v-app-bar>

    <v-dialog v-model="dialog" :fullscreen="true" :scrim="false" transition="dialog-bottom-transition">
      <v-card color="bg_darker">
        <v-toolbar dark color="bg_darker">
          <v-spacer />
          <v-toolbar-items>
            <v-btn icon dark @click="toggleDialog">
              <v-icon color="primary">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card v-for="(item, i) in items" :key="i" flat color="transparent" style="width: 100%" class="px-15 py-2">
          <v-card-item class="px-0">
            <template v-slot:title>
              <div class="text-h6 text-primary text-uppercase">{{ item.title }}</div>
              <v-spacer />
            </template>
            <template v-slot:append>
              <v-icon color="primary" size="30">
                <ArrowUpRightSVG />
              </v-icon>
            </template>
          </v-card-item>
          <v-divider v-if="i < items.length - 1" :thickness="1" color="primary" style="opacity: inherit" class="px-8" />
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { VAppBar, VAppBarNavIcon, VBtn, VCard, VDialog, VDivider, VIcon, VImg, VListItem, VSpacer, VSystemBar, VToolbar, VToolbarItems, VContainer } from 'vuetify/components';
import ShortLogoSVG from '../../assets/icons/ShortLogoSVG.vue';
import SearchSVG from '../../assets/icons/SearchSVG.vue';
import MenuSVG from '../../assets/icons/MenuSVG.vue';
import ArrowUpRightSVG from '../../assets/icons/ArrowUpRightSVG.vue';
import LogoSVG from '../../assets/icons/LogoSVG.vue';
import { navigateTo } from '#imports';

const dialog = ref(false);
const items = [
  { title: 'List', value: 'list' },
];

const { mdAndUp } = useDisplay();
const isMediumAndUp = mdAndUp;

const toggleDialog = () => {
  dialog.value = !dialog.value;
};

const navigateHome = () => {
  navigateTo('/');
};
</script>

<style scoped>
.bg_darker {
  background: #eeece8;
}
</style>
