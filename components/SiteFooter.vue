<template>
  <footer class="site-footer">
    <div class="footer-contact">
      <p class="flex-container" lang="en-GB">Made with
        <span class="screen-reader-text">love and joy</span>
        <span aria-hidden="true">❤️ &amp; 🥳 </span>
      </p>
      <address>
        <a class="flex-container" href="mailto:hi@peterdoolaard.nl">
          <IconsMail aria-hidden="true" />
          <span class="screen-reader-text">Mail </span>hi@peterdoolaard.nl
        </a>
        <a class="flex-container" href="tel:+31623223640">
          <IconsPhone aria-hidden="true" />
          <span class="screen-reader-text">Bel </span>06 23223640
        </a>
      </address>
    </div>
    <div class="footer-social">
        <a class="flex-container" href="https://github.com/peterdoolaard?tab=repositories">
          <IconsGithub class="github" aria-hidden="true" />
          github.com/peterdoolaard
        </a>
        <a class="flex-container" href="https://www.linkedin.com/in/peterdoolaard/">
          <IconsLinkedin aria-hidden="true" />
          linkedin.com/in/peterdoolaard
        </a>
        <a class="flex-container" href="https://mastodon.social/@peterdoolaard">
          <IconsMastodon aria-hidden="true" />
          @peterdoolaard@mastodon.social
        </a>
    </div>
      <p class="flex-container">KVK 55196071</p>
  </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.site-footer {
  align-items: flex-start;
  color: white;
  display: flex;
  flex-flow: wrap;
  font-size: smaller;
  gap: 1em;
  margin: 0 -1rem -1rem;
  padding: 2rem 1rem 1rem;
  position: relative;
}

.footer-contact,
.footer-social {
  align-items: center;
  display: flex;
  flex-flow: wrap;
  gap: 1em;
}

address {
  align-items: center;
  display: flex;
  flex-flow: nowrap;
  font-style: normal;
  gap: 0.75em;
}

svg {
  block-size: 1em;
  inline-size: auto;

  &.github {
    fill: currentColor;
  }
}

.flex-container {
  align-items: center;
  display: flex;
  gap: 0.5em;
  white-space: nowrap;
}


</style>
