<template>
  <div class="w-full md:w-1/2 p-3">
    <h3>{{ title }}</h3>
    <p>
      {{ description }}
    </p>
    <ul class="hours">
      <li v-for="(day, index) in days" :key="title + index">
        <div>{{ day.name }}</div>
        <div>{{ day.value }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    days: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="postcss" scoped>
ul.hours {
  @apply pl-0;
}

ul.hours li {
  @apply flex p-3;
  border-top: solid thin black;

  & div:first-child {
    @apply flex-shrink font-bold;
  }

  & div:last-child {
    @apply flex-grow text-right;
  }
}
</style>
