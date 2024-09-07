<template>
  <div class="about">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    About
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
