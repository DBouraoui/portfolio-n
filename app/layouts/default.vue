<template>
  <NavbarComponent />
  <div class="container pt-18">
    <slot />
  </div>
  <Footer />
</template>
<script setup lang="ts">
import NavbarComponent from '~/components/NavbarComponent.vue'
import Footer from '~/components/Footer.vue'
</script>
