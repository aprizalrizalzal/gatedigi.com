<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <AppFooter></AppFooter>
  </footer>
</template>
