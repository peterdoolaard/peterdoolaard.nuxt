<template>
  <main>
    <div class="mask-circle">
      <NuxtImg src="/images/portret-400x600.webp" />
    </div>
    <p class="fw-3 fs-7xl">Hi!</p>
    <p>Mijn naam is
      <span class="fs-3xl fw-1">Peter Doolaard.</span>
    </p>
    <p>Ik bouw
      <NuxtLink to="/projecten">
        <span class="fw-4 fs-xl">user interfaces</span>
      </NuxtLink>
      voor het web en
      <NuxtLink to="/boeken">
        <span class="fw-2 fs-2xl">schrijf</span>
      </NuxtLink>
      over
      <span class="fw-1 fs-xl">webdevelopment</span>.
    </p>
     <p>Ik ben
      <span class="fw-5 fs-l">erg handig</span>
      met
       <NuxtLink to="/hall-of-fame">
         <span class="fw-3 fs-3xl">CSS/SCSS.</span>
       </NuxtLink>
    </p>
    <p>Mijn kennis van
      <NuxtLink to="/hall-of-fame">
        <span class="fw-3 fs-2xl">HTML</span>
      </NuxtLink>
      is
      <span class="fw-6 fs-l">uitstekend.</span>
    </p>
    <p>Ik heb
      <NuxtLink to="https://github.com/peterdoolaard?tab=repositories&type=public">
        <span class="fw-2 fs-2xl">praktische kennis</span>
      </NuxtLink>
      van
      <span class="fs-l">Angular</span>
      en
      <span class="fs-xl">Vue.</span>
      Deze site <span class="fs-l pointing" /> is gebouwd met
      <span class="fw-3 fs-xl">Nuxt.</span>
    </p>
    <p>Elke dag
      <span class="fw-3 fs-3xl">leer</span>
      ik
      <span class="fw-1 fs-3xl">meer,</span>
      ook over
      <span class="fw-3 fs-xl">React, </span>
      <span class="fw-2 fs-l">HEML, </span>
      <span class="fw-3 fs-xl">MJML </span>
      en
      <span class="fw-1 fs-l">Foundation for Emails.</span>
    </p>
  </main>
</template>

<script setup lang="ts">

</script>

<style src="./index.vue.scss" lang="scss" scoped></style>
