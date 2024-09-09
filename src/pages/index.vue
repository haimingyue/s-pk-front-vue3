<template>
  <div ref="target">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    <!-- Home -->
    <div class="p-4">Hello World</div>
    {{ x }} {{ y }} {{ isOutside }}
    <h2 class="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
      Scaling CSS at Heroku with Utility Classes
    </h2>
    {{ msg111 }}
    <HelloWorld></HelloWorld>
    <UserComponent></UserComponent>
  </div>
</template>

<script setup lang="ts">
const msg111 = ref<string>('123')

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)

// const msg = reactive({
//   msg: 'Hello World'
// })
</script>

<style scoped></style>
