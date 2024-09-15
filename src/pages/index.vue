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
    <div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
      <div class="i-vscode-icons:file-type-light-pnpm" />
      <div class="i-vscode-icons:file-type-light-pnpm?mask text-red-300" />
    </div>
    <icon-mdi-account style="color: red"></icon-mdi-account>
    <div class="i-ion:airplane"></div>
    <i class="i-fa:user"></i>
    <i class="i-fa:user"></i><i class="i-fa:user"></i><i class="i-fa:user"></i
    ><i class="i-fa:user"></i><i class="i-fa:user"></i>
    <!-- A basic anchor icon from Phosphor icons -->
    <div class="i-ph-anchor-simple-thin" />
    <!-- An orange alarm from Material Design Icons -->
    <div class="i-mdi-alarm text-orange-400" />
    <!-- A large Vue logo -->
    <div class="i-logos-vue text-3xl" />
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <!-- Twemoji of laugh, turns to tear on hovering -->
    <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    <ReloadPrompt></ReloadPrompt>
    hello
  </div>
</template>

<script setup lang="tsx">
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  updateSW()
})

const updateSW = registerSW({
  immediate: true,
  onRegisteredSW(url, registration) {
    console.log('Service Worker is registered', url, registration)
    setInterval(() => {
      registration && registration && registration.update()
    }, 5000)
  },
  // onNeedRefresh() {
  //   console.log('need refresh')
  // },
  onOfflineReady() {}
})
const msg111 = ref<string>('123')

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)

// defineRender(() => <div class="p-4">Hello World</div>)

// const msg = reactive({
//   msg: 'Hello World'
// })
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
