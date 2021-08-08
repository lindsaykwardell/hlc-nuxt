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
      <div class="flex flex-col lg:flex-row">
        <aside class="w-full lg:w-1/4 mb-4 lg:mb-0 bg-white shadow">
          <div v-if="event" class="mb-4">
            <h3>Upcoming Events</h3>
            <img :src="event.image" alt="Event image" />
            <hr class="w-5/6 m-auto" />
            <h5 class="text-left px-2">{{ event.title }}</h5>
            <h5 class="text-left px-2" v-if="new Date(event.date).getFullYear() !== 2100" >
              When: {{ event.displayDate ? event.displayDate : formatDate(event.date) }}
            </h5>
            <div class="p-4">
              <nuxt-content :document="event" />
            </div>
          </div>
        </aside>
        <div class="w-full lg:w-3/4 lg:ml-3">
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
      return dayjs(date).format("M/D/YY h:mm a");
    }
  },
  async asyncData({ $content, params }) {
    const pages = await $content("pages")
      .where({ order: { $gte: 0 } })
      .fetch();
    const content = await $content("home/home").fetch();
    const event = (await $content("home/events")
      .where({ date: { $gt: new Date() } })
      .sortBy("date")
      .limit(1)
      .fetch())[0];
    const notices = await $content("home/notices")
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();

    return {
      pages,
      content,
      event,
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
