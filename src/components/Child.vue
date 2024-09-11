<template>
  <div>
    <button @click="handleClick">click</button>
    {{ fooRef.join(',') }}
  </div>
</template>

<script setup lang="ts">
// export default {}
const handleClick = () => {
  console.log('click')
  //   emits('update', 'click12')
}
// const emits = defineEmits<
//   SE<{
//     // tuple
//     'update:modelValue': [val: string]
//     // function
//     update: (val: string) => void
//   }>
// >()
const { foo } = $defineProps<{
  foo: string[]
}>()

const fooRef = $$(foo)
</script>

<style lang="scss" scoped></style>
