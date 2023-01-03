<template>
  <main>
    <div class="mask-circle">
      <NuxtImg src="/images/portret-vrijstaand.webp"
          alt="Peter Doolaard, een man met bril en wit haar, korte grijze baard en blauwe trui"/>
    </div>
    <p class="fw-3 fs-7xl">Hi!</p>
    <p>Mijn naam is
      <span class="fs-3xl fw-1">Peter Doolaard.</span>
    </p>
    <p>Ik bouw
      <span class="fw-4 fs-xl">
      <NuxtLink to="/projecten">
        user interfaces
      </NuxtLink>
        </span>
      voor het web en
      <span class="fw-2 fs-2xl">
      <NuxtLink to="/boeken">
        schrijf
      </NuxtLink>
        </span>
      over
      <span class="fw-1 fs-xl">webdevelopment</span>.
    </p>
     <p>Ik ben
      <span class="fw-5 fs-l">erg handig</span>
      met
       <span class="fw-3 fs-3xl">
       <NuxtLink to="/hall-of-fame">
         CSS/SCSS.
       </NuxtLink>
         </span>
    </p>
    <p>Mijn kennis van
      <span class="fw-3 fs-2xl">
      <NuxtLink to="/hall-of-fame">
        HTML
      </NuxtLink>
        </span>
      is
      <span class="fw-6 fs-l">uitstekend.</span>
    </p>
    <p>Ik heb
      <span class="fw-2 fs-2xl">
      <NuxtLink to="https://github.com/peterdoolaard?tab=repositories&type=public">
        praktische kennis
      </NuxtLink>
        </span>
      van
      <span class="fs-l">Angular</span>
      en
      <span class="fs-xl">Vue.</span>
      Deze site <span class="fs-l pointing">👆🏻</span> heb ik gebouwd met
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
