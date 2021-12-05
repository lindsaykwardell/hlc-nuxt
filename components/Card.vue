<template>
  <div class="card-body shadow-md p-3 bg-white">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.card-body {
  position: relative;
  /* min-height: 500px; */
}
</style>
