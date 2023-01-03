<template>
  <article class="project">
    <div class="project-inner">
      <h2 class="project-heading">
        <NuxtLink to="/">{{ title }}</NuxtLink>
      </h2>
      <p class="project-stack">{{ stack }}</p>
      <p v-if="url" class="project-url"><a :href="url">{{ url }}</a></p>
      <p v-else class="project-url">Geen publiek project</p>
      <div class="project-content">
        <p v-for="par in description">{{ par }}</p></div>
      </div>
  </article>
</template>

<script setup lang="ts">
defineProps(['title', 'stack', 'url', 'description'])

</script>

<style lang="scss" scoped>
.project {
  //background: var(--color-accent-dark);
  border-block-start: 4px solid var(--color-accent-dark);
  border-inline-start: 4px solid var(--color-accent-dark);
  border-inline-end: 12px solid var(--color-accent-dark);
  border-block-end: 12px solid var(--color-accent-dark);
  inline-size: 18rem;
}

.project-inner {
  display: grid;
  grid-template-rows: auto auto 1fr;
  margin: 0.75rem;
}

.project-heading {
  color: var(--background-light);
  font-size: 1.5rem;
  font-variation-settings: 'wght' 300;
  line-height: 1;
  margin-block-end: 0.75rem;

  @media (min-width: $breakpoint-mobile-large) {
    font-size: 2rem;
    font-variation-settings: 'wght' 200;
  }

  a {
    text-decoration: none;

    &:hover {
      color: var(--background-light);
    }
  }
}

.project-stack {
  font-size: 0.9rem;
  font-variation-settings: 'wght' 500;
  margin-block-end: 0.5rem;
}

.project-url {
  margin-block-end: 0.5rem;
  word-break: break-all;

  :any-link {
    text-decoration-color: var(--background-light);
    transition: all 250ms ease-in-out;

    &:hover {
      text-decoration-color: var(--color-accent-dark);
    }
  }
}

.project-content {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  white-space: pre-wrap;

  p + p {
    margin-block-start: 0.5rem;
  }
}
</style>
