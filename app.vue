<template>
  <div class="page-outer">
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
</script>

<style src="~/assets/css/main.scss" lang="scss"></style>
