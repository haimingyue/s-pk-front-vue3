<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    <!-- Home -->
    <div class="p-4">Hello World</div>

    <h2 class="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
      Scaling CSS at Heroku with Utility Classes
    </h2>
    {{ msg111 }}
  </div>
</template>

<script setup lang="ts">
const msg111 = ref<string>('123')

// const msg = reactive({
//   msg: 'Hello World'
// })
</script>

<style scoped></style>
