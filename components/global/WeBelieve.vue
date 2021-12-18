<template>
  <div class="flex flex-col space-between py-4">
    <div
      class="flex gap-6 items-center"
      :class="direction === 'left' ? 'flex-row' : 'flex-row-reverse'"
    >
      <div class="w-2/5">
        <img
          :src="img"
          class="w-full bg-hlc-brown-100 shadow-lg rounded-lg h-[350px] object-cover"
        />
      </div>

      <section class="w-3/5">
        <h4 class="bold italic">{{ title }}</h4>
        <slot />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "left",
      validator: value => ["left", "right"].includes(value)
    }
  }
};
</script>
