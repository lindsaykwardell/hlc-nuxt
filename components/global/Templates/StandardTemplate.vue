<template>
  <div class="template container">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.template {
  section {
    @apply shadow p-8 mb-4;

    &:not([class*="bg-"]) {
      @apply bg-white;
    }

    &:not(.full) > * {
      margin-left: auto;
      margin-right: auto;
      max-width: 900px;
    }
  }

  section,
  aside {
    p:not(.text-left):not(.text-right):not(.text-center) {
      @apply text-justify;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply text-center;

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

  a:not(.action-button):not(.donate-button) {
    @apply text-hlc-green-500 underline;

    &:hover {
      @apply text-hlc-green-900;
    }
  }

  img:not(.no-default) {
    @apply m-auto p-3;
  }

  ul {
    @apply pl-5 list-disc;
  }
}
</style>
