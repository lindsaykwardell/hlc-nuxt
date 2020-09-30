<template>
  <div class="template container">
    <slot />
    <section class="full">
      <Accordion
        v-for="question in content"
        :key="question.title"
        :question="question"
      />
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
