<template>
  <div class="sm:w-1/2 lg:w-1/3">
    <div ref="cardBody" class="card-body shadow-md p-3 m-4">
      <div class="relative overflow-hidden">
        <img
          :src="image || '/blur-river-250x130.jpg'"
          :alt="title"
          class="w-full m-auto rounded h-[185px] object-cover"
        />
        <div class="card-title w-full h-full p-6">
          <h4>{{ title }}</h4>
        </div>
      </div>
      <div class="card-content" :class="{ 'all-content': displayAllContent }">
        <div ref="cardContent">
          <slot />
        </div>
      </div>
      <div
        v-if="doesTextOverflow"
        class="fade-bottom"
        :class="{ 'all-content': displayAllContent }"
      >
        <button
          class="w-full lg:w-auto font-mulish rounded-lg transition duration-100 hover:underline hover:text-hlc-green-600 pointer-events-auto"
          @click="toggleContent"
        >
          {{ displayAllContent ? "Read Less" : "Read More" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "image"],
  data() {
    return {
      doesTextOverflow: false,
      displayAllContent: false
    };
  },
  methods: {
    toggleContent() {
      this.displayAllContent = !this.displayAllContent;
    }
  },
  mounted() {
    this.doesTextOverflow = this.$refs.cardContent?.offsetHeight > 250;
  }
};
</script>

<style lang="postcss" scoped>
.card-body {
  position: relative;
  min-height: 500px;

  .card-content {
    height: 250px;
    overflow: hidden;

    &.all-content {
      height: 100%;
      overflow: visible;
      padding-bottom: 2rem;
    }
  }

  .fade-bottom {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 200px;
    z-index: 99;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 1) 75%
    );
    padding-bottom: 1rem;
    pointer-events: none;

    &.all-content {
      height: 100%;
      background: none;
    }
  }
}

.card-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  background: rgba(0, 0, 0, 0.452);

  h4 {
    /* @apply p-3;
    background-color: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(3px); */
  }
}

h4 {
  @apply text-white;
  margin: auto;
  font-size: 24px;
}
</style>
