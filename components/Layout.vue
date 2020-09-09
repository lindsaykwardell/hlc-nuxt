<template>
  <div>
    <header
      class="flex 
      flex-col 
      md:flex-row 
      items-center 
      px-5 
      py-3 
      md:bg-gradient-to-l 
      md:via-hlc-green-500
      md:from-hlc-green-500
      border-t-8
      border-hlc-magenta-500"
    >
      <div class="md:flex-grow">
        <!-- <img
          src="https://res.cloudinary.com/no-adjustments-needed-llc/image/upload/w_300,c_scale/v1598890782/hlc-logo_c4ggqg.png"
          alt="Healthy Living Community logo"
          class="logo hidden sm:block"
        /> -->
        <img
          src="https://res.cloudinary.com/no-adjustments-needed-llc/image/upload/w_200,c_scale/v1598891003/hlc-logo-stacked_of2z0g.png"
          alt="Healthy Living Community Logo"
          class="logo stacked md:ml-12"
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

header {
  .logo {
    width: 300px;

    &.stacked {
      width: 200px;
    }
  }
}

main {
  @apply p-4;
}
</style>
