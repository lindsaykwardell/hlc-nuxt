<template>
  <Layout :pages="pages" activePage="/">
    <div class="hero overflow-hidden m-auto relative mt-8 shadow-lg">
      <button
        class="action-button bg-hlc-magenta-500 text-white p-3 rounded-lg text-left"
      >
        {{ content.action.main }}<br />
        <span class="text-xs italic" role="label">{{
          content.action.subtitle
        }}</span>
      </button>
      <img :src="content.hero" alt="Healthy Living Community hero image" />
    </div>
    <StandardTemplate>
      <section>
        <nuxt-content :document="content" />
      </section>
      <div class="flex">
        <section class="w-1/4 mr-3">
          <h3>Upcoming Events</h3>
          <img :src="events[0].image" />
          <hr />
          <h5 class="text-left">Title: {{ events[0].title }}</h5>
          <h5 class="text-left">When: {{ formatDate(events[0].date) }}</h5>
          <nuxt-content :document="events[0]" />
        </section>
        <div class="w-3/4 ml-3">
          <section v-for="notice in notices" :key="notice.slug">
            <nuxt-content :document="notice" />
          </section>
        </div>
      </div>
    </StandardTemplate>
  </Layout>
</template>

<script>
import dayjs from "dayjs";

export default {
  methods: {
    formatDate(date) {
      return dayjs(date).format("MM/DD/YYYY");
    }
  },
  async asyncData({ $content, params }) {
    const pages = await $content("pages").fetch();
    const content = await $content("home/home").fetch();
    const events = await $content("home/events").fetch();
    const notices = await $content("home/notices").fetch();

    return {
      pages,
      content,
      events,
      notices
    };
  }
};
</script>

<style lang="postcss" scoped>
section {
  @apply mt-5;
}
</style>
