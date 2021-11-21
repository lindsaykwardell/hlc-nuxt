<template>
  <div class="sm:w-1/2 lg:w-1/3 card-body shadow-md p-3 bg-white">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.card-body {
  position: relative;
  min-height: 500px;
}
</style>
