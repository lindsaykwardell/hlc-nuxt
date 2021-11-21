<template>
  <a
    class="donate-button"
    href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=drkerry%40healthylivingfamilymedicine.com&currency_code=USD&source=url"
    target="_blank"
  >
    Donate <span class="text-hlc-green-700 mx-2">|</span>
    <font-awesome-icon class="donate-icon" :icon="['fa', 'heart']" />
  </a>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.donate-button {
  @apply py-3 px-4 bg-hlc-green-400 text-white cursor-pointer rounded text-lg duration-300 shadow-md no-underline;

  & .donate-icon {
    @apply text-hlc-green-700 duration-500;
  }

  &:hover {
    @apply bg-hlc-green-600 text-white shadow-lg;

    & .donate-icon {
      @apply text-white;
    }
  }
}
</style>
