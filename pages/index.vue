<template>
  <Layout :pages="pages" activePage="/">
    <div class="hero overflow-hidden m-auto relative my-8 shadow-lg">
      <opti-image
        :key="heroImg"
        :src="`/${content.hero[heroImg]}`"
        alt="Healthy Living Community hero image"
        class="w-full object-cover"
      />
    </div>
    <StandardTemplate>
      <nuxt-content :document="content" />
      <div class="flex flex-col md:flex-row">
        <aside class="w-full md:w-1/4 mb-4 md:mb-0 bg-white shadow">
          <div class="mb-4">
            <h3>Upcoming Events</h3>
            <img :src="events[0].image" alt="Event image" />
            <hr class="w-5/6 m-auto" />
            <h5 class="text-left px-2">Title: {{ events[0].title }}</h5>
            <h5 class="text-left px-2">
              When: {{ formatDate(events[0].date) }}
            </h5>
            <div class="p-4">
              <nuxt-content :document="events[0]" />
            </div>
          </div>
        </aside>
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
      return dayjs(date).format("MM/DD/YYYY h:mm a");
    }
  },
  async asyncData({ $content, params }) {
    const pages = await $content("pages")
      .where({ order: { $gte: 0 } })
      .fetch();
    const content = await $content("home/home").fetch();
    const events = await $content("home/events")
      .limit(1)
      .fetch();
    const notices = await $content("home/notices")
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();

    return {
      pages,
      content,
      events,
      notices
    };
  },
  data: () => ({
    heroImg: 0
  }),
  mounted() {
    this.heroImg = Math.round(Math.random() * (this.content.hero.length - 1));
  }
};
</script>
