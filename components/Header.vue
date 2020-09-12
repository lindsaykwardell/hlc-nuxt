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
      bg-hlc-green-500
      lg:bg-transparent
      lg:bg-gradient-to-l 
      lg:via-hlc-green-500
      lg:from-hlc-green-500
      border-t-8
      border-hlc-magenta-500"
      >
        <div class="lg:flex-grow">
          <div class="flex mb-4 lg:mb-0 items-center">
            <div class="flex-grow">
              <img
                :src="logoSrc(width)"
                alt="Healthy Living Community Logo"
                class="logo stacked lg:ml-12"
              />
            </div>
            <div v-if="isMd(width)" class="flex-shrink">
              <button @click="showMenu = !showMenu">
                <font-awesome-icon icon="bars" size="2x" class="text-white" />
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
    logoSrc(width) {
      return this.isMd(width)
        ? "hlc-logo-horiz-white.png"
        : "https://res.cloudinary.com/no-adjustments-needed-llc/image/upload/w_200,c_scale/v1598891003/hlc-logo-stacked_of2z0g.png";
    },
    isMd(width) {
      const res = width <= this.$constant.md;

      if (!this.prevMd && res) {
        this.showMenu = false;
      }

      this.prevMd = res

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
