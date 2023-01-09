<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>

<script setup lang="ts">
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/variable.css"
import { ref, provide } from 'vue'

let pageOuter: any = ref()
provide('key', pageOuter)

</script>
