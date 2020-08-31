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
      border-t-8 
      border-hlc-magenta-500"
    >
      <div class="md:flex-grow">
        <img
          src="/hlc-logo.png"
          alt="Healthy Living Community logo"
          class="logo hidden sm:block"
        />
        <img
          src="/hlc-logo-stacked.png"
          alt="Healthy Living Community Logo"
          class="logo stacked sm:hidden"
        />
      </div>
      <Navbar :pages="_pages" :activePage="activePage" />
    </header>
    <div v-if="activePage === '/'" class="hero">
      <VImg src="/IMG_3197.jpg" background="green" height="600" />
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import VImg from "vuetensils/src/components/VImg/VImg.vue";

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
  },
  components: {
    VImg
  }
};
</script>

<style lang="postcss" scoped>
.hero {
  @apply overflow-hidden m-auto;
  max-height: 600px;
  max-width: 1700px;
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
