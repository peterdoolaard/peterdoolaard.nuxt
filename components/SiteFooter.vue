<template>
  <footer class="site-footer">
    <div class="footer-contact">
      <p>Made with ❤️ &amp; 🥳 </p>
      <address>
        <IconsMail />
        <a href="mailto:hi@peterdoolaard.nl">Peter Doolaard</a>
        <IconsPhone />
        <a href="tel:+31623223640">06 23223640</a>
      </address>
    </div>
    <div class="footer-more">
      <p>KVK 55196071</p>
      <p>
        <IconsCake />
        Celebrating {{ year }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year: number = new Date().getFullYear()
</script>

<style lang="scss" scoped>

.site-footer {
  font-size: smaller;
  margin: 0 -1rem -1rem;
  padding-block: 2rem 1rem;
  position: relative;

  > * + * {
    margin-block-start: 1em;
  }

  @media (min-width: $breakpoint-tablet) {
    column-gap: 1em;
    display: flex;

    > * + * {
      margin-block-start: 0;
    }
  }
}

.footer-contact,
.footer-more {
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
  gap: 0.5em;
}

svg {
  block-size: 1em;
  inline-size: auto;
}


</style>
