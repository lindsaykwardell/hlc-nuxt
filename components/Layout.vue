<template>
  <div>
    <header
      class="flex 
      flex-col 
      lg:flex-row 
      items-center 
      px-5 
      py-3 
      lg:bg-gradient-to-l 
      lg:via-hlc-green-500
      lg:from-hlc-green-500
      border-t-8
      border-hlc-magenta-500"
    >
      <div class="lg:flex-grow">
        <img
          src="https://res.cloudinary.com/no-adjustments-needed-llc/image/upload/w_200,c_scale/v1598891003/hlc-logo-stacked_of2z0g.png"
          alt="Healthy Living Community Logo"
          class="logo stacked lg:ml-12"
        />
      </div>
      <Navbar :pages="_pages" :activePage="activePage" />
    </header>
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
    <footer
      class="flex flex-col justify-center items-center mt-6 bg-hlc-dark-green-500 border-t-8 border-hlc-blue-500 text-hlc-green-200"
    >
      <div class="flex flex-col md:flex-row justify-around w-full py-4">
        <div class="md:w-1/4 lg:w-1/5 p-3">
          <h5 class="text-current">Access the Patient Portal</h5>
          <p class="pb-8">
            Convenient 24/7 access to your healthcare information and
            communication with Dr. Kerry and her team.
          </p>
          <a
            href="https://phr.charmtracker.com/login.sas?FACILITY_ID=9fac109f10b85efdeadfd56aed2ab60a43b1154fc374a4756c8f7ea08edb2f3fd95fcbc3b76e32a2"
            class="px-4 py-3 bg-hlc-green-500 hover:bg-hlc-green-400 transition duration-200 hover:shadow-md rounded-lg text-white"
          >
            Patient Portal
          </a>
        </div>
        <div class="md:w-1/4 lg:w-1/5 p-3">
          <h5 class="text-current">Purchase Supplements</h5>
          <p class="pb-8">
            Visit Dr. Kerry's Supplements page to find approved options.
          </p>
          <a
            href="https://wellevate.me/kerry-schaefer-1"
            class="px-4 py-3 bg-hlc-brown-700 hover:bg-hlc-brown-600 transition duration-200 hover:shadow-md rounded-lg text-white"
          >
            Supplements
          </a>
        </div>
        <div class="md:w-1/4 lg:w-1/5 p-3">
          <h5 class="text-current">Social Media</h5>
          <p class="pb-8">
            Come join our online community!
          </p>
          <div class="flex justify-center">
            <a
              href="https://www.facebook.com/HealthyLivingCommunityNP"
              target="_blank"
              class="mx-3"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="text-2xl mx-1 text-hlc-green-300 hover:text-hlc-green-400 transition duration-200"
              />
            </a>
            <a
              href="https://www.instagram.com/hlcommunity/"
              target="_blank"
              class="mx-3"
            >
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="text-2xl mx-1 text-hlc-green-300 hover:text-hlc-green-400 transition duration-200"
              />
            </a>
          </div>
        </div>
        <div class="md:w-1/4 lg:w-1/5 p-3">
          <h5 class="text-current">Additional Links</h5>
          <div class="flex flex-col">
            <a href="#" class="hover:underline">Meet the Board</a>
            <a href="#" class="hover:underline">Board Minutes</a>
            <a href="#" class="hover:underline">HLC Newsletter</a>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center mt-6 w-full text-hlc-green-300 bg-hlc-dark-green-600 py-4 p-2"
      >
        <div class="pb-4">Copyright © Healthy Living Community, a 501c(3) non-profit</div>
        <DonateButton />
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
