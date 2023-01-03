<template>
  <div>
    <p v-if="!projects">Waar zijn de projecten? Zonet waren ze hier nog!</p>
    <div v-if="projects" class="projects-container">
      <ProjectCard
          v-for="project of projects"
          :key="project.id"
          :title = "project.title"
          :stack = "project.stack"
          :url = "project.url"
          :description = "project.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import projects from '~/data/projects'

</script>

<style lang="scss" scoped>
.projects-container {
  display: flex;
  flex-flow: wrap;
  gap: 2rem;
}
</style>
