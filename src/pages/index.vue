<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    Home
    <div class="p-4">Hello World</div>

    <h2 class="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
      Scaling CSS at Heroku with Utility Classes
    </h2>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
</script>

<style scoped></style>
