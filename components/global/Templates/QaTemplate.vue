<template>
  <div class="template container">
    <slot />
    <section v-for="category in categories" :key="category" class="full">
      <h2 :id="category.replace(' ', '-').toLowerCase()">{{ category }}</h2>
      <Accordion
        v-for="question in content.filter(q => q.category === category)"
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
  },
  computed: {
    categories() {
      return [
        "General Policies",
        ...this.content.map(question => question.category)
      ].filter((cat, index, arr) => arr.findIndex(c => c === cat) === index);
    }
  }
};
</script>
