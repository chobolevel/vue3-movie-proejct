<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from './stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { count, doubleCount } = storeToRefs(store)
</script>

<template>
  <header>
    HEADER SECTION
  </header>
  <RouterView />
</template>

<style scoped>
</style>
