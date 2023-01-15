<template>
  <main class="main-content">
    <article class="article">
        <figure class="article-image">
          <NuxtImg
              src="/images/peter_doolaard.jpg"
              alt="Peter Doolaard, een man met bril en wit haar, korte grijze baard en blauwe trui."
              loading="lazy"
              sizes="sm:100vw md:25vw"
          />
          <figcaption class="article-image__caption">
            <a class="photo-credit" href="https://lisannevdbr.com/">Lisannevdbr
            Fotografie</a>
          </figcaption>
        </figure>
        <div class="article-text">
          <p>
            <span>:is(.name) {</span> Peter Doolaard <span>}</span>
          </p>
          <p>
            <span>:focus {</span> Vertaalt webdesigns naar toegankelijke webapplicaties <span>}</span>
          </p>
          <p>
            <span>:current {</span> Beschikbaar <span>}</span>
          </p>
          <p>
            <span>:has(.skills) {</span> HTML, CSS, SCSS, JavaScript, Git, GitHub <span>}</span>
          </p>
          <p>
            <span>:optional {</span> Vue.js, Nuxt, Angular, React <span>}</span>
          </p>
          <p>
            <span>:where(.location:not(:out-of-range)) {</span> Remote of op locatie <span>}</span>
          </p>
          <p>
            <span>:first-child {</span> Auteur van Handboek HTML 5 en CSS <span>}</span>
          </p>
          <p>
            <span>:nth-child(2) {</span> Blogt over webdevelopment <span>}</span>
          </p>
          <p>
            <span>::before { </span>
            <NuxtLink to="projecten">Diverse projecten</NuxtLink> <span>}</span>
          </p>
        </div>
    </article>
  </main>
</template>

<script setup lang="ts">


</script>

<style src="./index.vue.scss" lang="scss" scoped></style>
