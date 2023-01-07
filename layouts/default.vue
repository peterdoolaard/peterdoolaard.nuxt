<template>
  <div ref="pageOuter" class="page-outer hidden">
    <div class="page-inner">
      <SiteHeader />
      <div class="page-main">
        <slot />
      </div>
      <SiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

let pageOuter: any = ref()
provide('key', pageOuter)

useHead({
  script: [
      {
    children:
        'var _paq = window._paq = window._paq || [];_paq.push([\'trackPageView\']);_paq.push([\'enableLinkTracking\']);(function() {var u="https://handboek-html-css.nl/matomo/";_paq.push([\'setTrackerUrl\', u+\'matomo.php\']);_paq.push([\'setSiteId\', \'2\']);var d=document, g=d.createElement(\'script\'), s=d.getElementsByTagName(\'script\')[0];g.async=true; g.src=u+\'matomo.js\'; s.parentNode.insertBefore(g,s);})();'
      }
    ]
})
</script>
