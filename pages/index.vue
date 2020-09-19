<template>
  <Layout :pages="pages" activePage="/">
    <div class="hero overflow-hidden m-auto relative mt-8 shadow-lg">
      <CallToAction class="bg-hlc-green-500 text-white">
        <span>{{ content.action.main }}</span
        ><br />
        <span class="text-xs italic" role="label">{{
          content.action.subtitle
        }}</span>
      </CallToAction>
      <img :src="content.hero" alt="Healthy Living Community hero image" />
    </div>
    <StandardTemplate>
      <section>
        <nuxt-content :document="content" />
      </section>
      <div class="flex flex-col md:flex-row">
        <section class="w-full md:w-1/4 md:mr-3">
          <h3>Upcoming Events</h3>
          <img :src="events[0].image" alt="Event image" />
          <hr />
          <h5 class="text-left">Title: {{ events[0].title }}</h5>
          <h5 class="text-left">When: {{ formatDate(events[0].date) }}</h5>
          <nuxt-content :document="events[0]" />
        </section>
        <div class="w-full md:w-3/4 md:ml-3">
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
    const pages = await $content("pages")
      .where({ order: { $gte: 0 } })
      .fetch();
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
