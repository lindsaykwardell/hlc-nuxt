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
    <div v-if="activePage === '/'" class="bg-gradient-to-l from-gray-200 to-gray-200 via-hlc-blue-500">
      <div class="hero">
        <client-only>
          <VImg src="/IMG_3197.jpg" background="green" />
        </client-only>
      </div>
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import { VImg } from "vuetensils";

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
  height: 600px;
  max-width: 1800px;
}

header {
  .logo {
    width: 300px;
  }
}

main {
  @apply p-4;
}
</style>
