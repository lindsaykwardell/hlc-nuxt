<template>
  <div class="relative">
    <Header :pages="_pages" :activePage="activePage" />
    <main>
      <slot />
    </main>
    <aside
      v-if="!hideCallToAction"
      class="flex flex-col lg:flex-row justify-center items-center p-5 container bg-hlc-magenta-500 shadow-inner"
    >
      <img
        src="/hlc-logo-mark-white.png"
        alt="Healthy Living Community Logo"
        class="logo stacked flex-shrink"
        style="width: 200px"
      />
      <div class="flex-grow">
        <p class="text-white text-xl p-4 text-justify">
          "{{quote}}"
        </p>
        <div class="text-center mt-4 md:text-right">
          <CallToAction
            class="text-xl bg-hlc-magenta-600 hover:bg-hlc-magenta-700"
          >
            Become a Member Today!
          </CallToAction>
        </div>
      </div>
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
    },
    hideCallToAction: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    quotes() {
      return [
        "I am so appreciative of the community Dr. Kerry is building and that my family is able to continue to be part of a place that treats and values whole people.",
        "When I bring my child in to get shots, she wants to stick around and play in the waiting room! I'm truly grateful for this space.",
        "If you are like me and have struggled to find proper support and medical care from common medical professionals your whole life, I think you will be very happy to find Dr. Kerry is exactly the fit you needed all along.",
        "Healthy Living Community changed my life and I’m inspired to invite my friends and family to join this amazing community.",
        "Whenever I think of Healthy Living Community, I think of people that care about me and my family. I love being a part of this community!"
      ];
    },
    quote() {
      return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    },
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
