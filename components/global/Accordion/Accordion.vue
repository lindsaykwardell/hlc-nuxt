<template>
  <VToggle>
    <template v-slot:label>
      <div class="flex">
        <div v-if="icon" class="w-16">
          <font-awesome-icon :icon="icon" size="lg" class="mr-4 text-black" />
        </div>
        <div class="flex-grow">{{ title }}</div>
      </div>
    </template>
    <article>
      <nuxt-content :document="question" />
      <aside class="pt-3">
        <slot></slot>
      </aside>
    </article>
  </VToggle>
</template>

<script>
import VToggle from "./VToggle";

export default {
  props: {
    question: {
      type: Object,
      default: () => ({
        title: "",
        icon: undefined
      })
    }
  },
  computed: {
    icon() {
      return this.question.icon
    },
    title() {
      return this.question.title
    }
  },
  components: {
    VToggle
  }
};
</script>

<style lang="postcss">
.vts-toggle {
  &:last-child {
    & .vts-toggle__label,
    & article {
      @apply border-b-2;
    }

    & article {
      @apply border-t-0;
    }
  }

  &:not(:last-child) {
    & .vts-toggle__label,
    & article {
      @apply border-b-0;
    }
  }

  & .vts-toggle__label {
    @apply h-16 text-xl border-2 w-full text-left pl-4 font-bold;
    background: #f8f9fa;
    color: #225917;

    &:hover {
      text-decoration: underline;
    }
  }

  & article {
    @apply p-4 border-2;

    & li {
      @apply pl-2 ml-4;
      list-style-type: circle;
    }
  }
}
</style>
