<template>
  <div>
    <header class="flex items-center mx-5 my-3">
      <div class="flex-grow">
        <img
          src="/hlc-logo.png"
          alt="Healthy Living Community logo"
          class="logo"
        />
      </div>
      <nav>
        <nuxt-link
          class="text-xl p-4 bg-gray-200 mx-2"
          :class="{ 'bg-hlc-magenta': activePage === page.slug }"
          v-for="page in _pages"
          :key="page.slug"
          :to="page.slug"
          >{{ page.title }}</nuxt-link
        >
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  props: ["pages", "activePage"],
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
