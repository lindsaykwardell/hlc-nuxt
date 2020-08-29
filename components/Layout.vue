<template>
  <div>
    <header
      class="flex items-center px-5 py-3 bg-gradient-to-l from-hlc-blue-500 via-hlc-blue-500 border-t-8 border-hlc-magenta-500"
    >
      <div class="flex-grow">
        <img
          src="/hlc-logo.png"
          alt="Healthy Living Community logo"
          class="logo"
        />
      </div>
      <Navbar :pages="_pages" :activePage="activePage" />
    </header>
    <main>
      <slot />
    </main>
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
        ...this.pages
      ];
    }
  }
};
</script>

<style lang="postcss" scoped>
header {
  .logo {
    width: 300px;
  }
}
</style>
