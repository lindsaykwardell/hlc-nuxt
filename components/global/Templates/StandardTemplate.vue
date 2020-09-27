<template>
  <div class="template container">
    <slot />
  </div>
</template>

<style lang="postcss">
.template {
  section {
    @apply bg-white shadow p-8 mb-4;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply text-center px-8;

    &.text-left {
      @apply text-left;
    }

    &.text-right {
      @apply text-right;
    }
  }

  table {
    @apply w-full table-fixed text-center;
  }

  a {
    @apply text-hlc-green-500 underline;

    &:hover {
      @apply text-hlc-green-900;
    }
  }

  img {
    @apply m-auto p-3;
  }

  ul {
    @apply pl-5 list-disc;
  }
}
</style>
