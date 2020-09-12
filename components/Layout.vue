<template>
  <div class="relative">
    <Header :pages="_pages" :activePage="activePage" />
    <main>
      <slot />
    </main>
    <aside
      class="flex flex-col justify-center items-center p-5 container bg-hlc-magenta-500 shadow-md"
    >
      <img
        src="hlc-logo-mark-white.png"
        alt="Healthy Living Community Logo"
        class="logo stacked"
        style="width: 200px"
      />
      <CallToAction class="text-xl bg-hlc-magenta-600 hover:bg-hlc-magenta-700">
        Become a Member Today!
      </CallToAction>
    </aside>
    <Footer />
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      default: () => []
    },
    activePage: {
      type: String,
      default: "/"
    }
  },
  computed: {
    _pages() {
      return [
        {
          slug: "/",
          title: "Home"
        },
        ...this.pages.map(page => page).sort((a, b) => a.order - b.order)
      ];
    }
  }
};
</script>

<style lang="postcss" scoped>
.hero {
  max-height: 450px;
  max-width: 1200px;

  & .action-button {
    @apply absolute;
    z-index: 30;
    bottom: 30px;
    right: 50px;
  }
}

main {
  @apply p-4;
}
</style>
