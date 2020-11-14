<template>
  <VResize>
    <template #default="{ width }">
      <header
        class="flex 
      flex-col 
      lg:flex-row 
      lg:items-center 
      px-5 
      py-3
      mb-6
      shadow-lg 
      border-t-8
      bg-gray-300
      border-hlc-magenta-500"
      >
        <div class="lg:flex-grow">
          <div class="flex mb-4 lg:mb-0 items-center">
            <div class="flex-grow">
              <nuxt-link to="/">
                <img
                  src="hlc-logo-stacked-color.svg"
                  alt="Healthy Living Community Logo"
                  class="logo stacked lg:ml-12"
                />
              </nuxt-link>
            </div>
            <div v-if="isMd(width)" class="flex-shrink">
              <button @click="showMenu = !showMenu">
                <font-awesome-icon icon="bars" size="2x" />
              </button>
            </div>
          </div>
        </div>
        <Navbar
          v-if="!isMd(width) || showMenu"
          :pages="pages"
          :activePage="activePage"
        />
      </header>
    </template>
  </VResize>
</template>

<script>
import VResize from "vuetensils/src/components/VResize/VResize.vue";

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
  data: () => ({
    showMenu: false,
    prevMd: false
  }),
  methods: {
    isMd(width) {
      const res = width <= this.$constant.md;

      if (!this.prevMd && res) {
        this.showMenu = false;
      }

      this.prevMd = res;

      return res;
    }
  },
  components: {
    VResize
  }
};
</script>

<style lang="postcss" scoped>
header {
  .logo {
    width: 300px;

    &.stacked {
      width: 200px;
    }
  }
}
</style>
