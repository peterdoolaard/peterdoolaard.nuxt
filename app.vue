<template>
  <div ref="pageOuter" class="page-outer hidden">
    <div class="page-inner">
      <SiteHeader />
      <div class="page-main">
        <NuxtPage />
      </div>
      <SiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/variable.css"
import { ref, provide } from 'vue'

let pageOuter:any = ref()
provide('key', pageOuter)

</script>

<style src="~/assets/css/main.scss" lang="scss"></style>
