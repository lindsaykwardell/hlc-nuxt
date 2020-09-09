<template>
  <div class="template container">
    <slot />
  </div>
</template>

<style lang="postcss">
.template {
  section {
    @apply bg-white shadow p-3 mb-4;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply text-center;
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
}
</style>
