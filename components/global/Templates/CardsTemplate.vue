<template>
  <div class="template container">
    <slot />
    <section class="flex flex-wrap full">
      <ServiceCard v-for="elem in content" :key="elem.slug" v-bind="elem">
        <nuxt-content :document="elem" />
      </ServiceCard>
    </section>
  </div>
</template>

<script>
import StandardTemplate from "@/components/global/Templates/StandardTemplate";

export default {
  extends: StandardTemplate,
  props: {
    content: {
      type: Array,
      default: () => []
    }
  }
};
</script>
