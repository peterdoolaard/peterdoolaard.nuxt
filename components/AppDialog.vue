<template>
  <Teleport to="body">
    <div class="app-dialog-container">
      <div aria-hidden="true" class="app-dialog-background" @click="emits('close')">
        <div class="app-dialog" role="dialog">
          <div class="app-dialog__background-close" @click="emits('close')" />
          <div class="app-dialog__modal">
            <header class="app-dialog__modal__header">
              <h1 class="project-heading">
                {{ props.title }}
              </h1>
              <button
                  type="button"
                  class="app-dialog__modal-btn-close"
                  @click="emits('close')"
              >
                <IconsButtonClose class="app-dialog__modal__btn-close__icon" />
              </button>
            </header>
            <p class="project-stack">{{ stack }}</p>
            <p v-if="url" class="project-url"><a :href="url">{{ url }}</a></p>
            <p v-else class="project-url">Geen publiek project</p>
            <div class="project-content">
              <p v-for="par in description">{{ par }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: number,
  title: string,
  stack: string,
  url: string,
  description: string[],
}>()

const emits = defineEmits([
  'close',
])
</script>

<style lang="scss" scoped>
.app-dialog-container {
  position: relative;
  z-index: 1;
}

.app-dialog-background {
  backdrop-filter: blur(2px);
  background: hsl(0 0% 0% / 0.6);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.app-dialog {
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}

.app-dialog__background-close {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}

.app-dialog__modal {
  background: black;
  border-block-start: 4px solid var(--color-accent);
  border-inline-start: 4px solid var(--color-accent);
  border-inline-end: 12px solid var(--color-accent);
  border-block-end: 12px solid var(--color-accent);
  margin: 4rem 2rem 6rem;
  max-inline-size: 70ch;
  max-block-size: 80vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
  z-index: 1;
}

.app-dialog__modal-btn-close {
  --scale: 1;
  --color: var(--background-light);
  --transition-ms: 250ms;

  appearance: none;
  background: transparent;
  border: none;
  color: white;
  margin: 0;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;

  cursor: pointer;
  transition: all var(--transition-ms) ease-in-out;

  &:hover {
    --scale: 1.2;
    --color: var(--color-accent-dark);
    --transition-ms: 50ms;
  }
}

.app-dialog__modal__btn-close__icon {
  block-size: auto;
  display: block;
  inline-size: 2rem;
  transform: scale(var(--scale));
  transition: var(--transition-ms) ease-out;
}


//TODO
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

  p + p {
    margin-block-start: 0.5rem;
  }
}


</style>
