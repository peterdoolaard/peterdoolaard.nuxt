<template>
  <article class="project-card">
    <div class="project-inner">
      <h2 class="project-heading">
        <button class="button __link" type="button" @click="openModal = true">
          {{ props.title }}
        </button>
      </h2>
      <p class="project-stack">{{ props.stack }}</p>
      <p v-if="props.url" class="project-url"><a :href="props.url">{{ props.url }}</a></p>
      <p v-else class="project-url">Geen publiek project</p>
      <p class="project-content">
        <span v-for="par in props.description">{{ par }}</span>
      </p>
    </div>
  </article>
  <AppDialog
      v-if="openModal"
      :id="props.id"
      :title="props.title"
      :stack="props.stack"
      :url="props.url"
      :description="props.description"
      @close="openModal = false"
  />
</template>

<script setup lang="ts">
const props = defineProps(['id', 'title', 'stack', 'url', 'description'])
const openModal = ref(false)

</script>

<style src="./ProjectCard.vue.scss" lang="scss" scoped />

