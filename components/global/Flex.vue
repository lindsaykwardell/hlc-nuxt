<template>
  <div class="flex-child-1 flex flex-col md:flex-row">
    <slot />
  </div>
</template>

<style lang="postcss">
.flex-child-1 {
  & * {
    @apply flex-1;
  }
}
</style>