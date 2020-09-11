<template>
  <div class="sm:w-1/2 lg:w-1/3">
    <div class="card-body shadow-md p-3 m-4">
      <div class="relative overflow-hidden m-3">
        <img
          src="/blur-river-250x130.jpg"
          :alt="title"
          class="w-full m-auto rounded"
        />
        <div class="card-title w-full h-full p-6">
          <h4>{{ title }}</h4>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="postcss" scoped>
.card-body {
  min-height: 500px;
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
}

h4 {
  @apply text-white;
  margin: auto;
  font-size: 24px;
}
</style>
