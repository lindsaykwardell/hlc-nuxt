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
    <footer
      class="flex flex-col justify-center items-center px-5 py-3 bg-hlc-dark-green-500 border-t-8 border-hlc-blue-500 text-hlc-green-200"
    >
      <CallToAction class="w-64 text-xl">
        Become a Member Today!
      </CallToAction>
      <div class="flex flex-col md:flex-row justify-around w-full py-4">
        <div class="w-1/5">
          <h5 class="text-current">Access the Patient Portal</h5>
          <p>
            Convenient 24/7 access to your healthcare information and
            communication with Dr. Kerry and her team.
          </p>
          <a
            href="https://phr.charmtracker.com/login.sas?FACILITY_ID=9fac109f10b85efdeadfd56aed2ab60a43b1154fc374a4756c8f7ea08edb2f3fd95fcbc3b76e32a2"
            class="px-4 py-3 bg-hlc-green-500 hover:bg-hlc-green-600 transition duration-200 hover:shadow-md rounded-lg text-white"
          >
            Patient Portal
          </a>
        </div>
        <div class="w-1/5">
          Copyright © Healthy Living Community
        </div>
        <div class="w-1/5">
          Copyright © Healthy Living Community
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row justify-evenly w-full text-hlc-green-300 py-4"
      >
        <div>Copyright © Healthy Living Community</div>
        <div>
          Created by <a href="https://lindsaykwardell.com">Lindsay Wardell</a>
        </div>
      </div>
    </footer>
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
