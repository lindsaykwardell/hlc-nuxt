<template>
  <Layout :pages="pages">
    <StandardTemplate>
      <section>
        <h1>Upcoming Activities</h1>
        <div v-for="event in events" :key="event.id" class="hlc-event">
          <img :src="event.image" alt="" class="hlc-event__image" />
          <h2 class="text-left px-2 text-3xl">{{ event.title }}</h2>
          <template v-if="new Date(event.date).getFullYear() !== 2100">
            <h2 class="text-left text-lg">
              When:
              {{
                event.displayDate ? event.displayDate : formatDate(event.date)
              }} <br />
              Location: {{ event.location }}
            </h2>
          </template>
          <div class="p-4">
            <nuxt-content :document="event" />
          </div>
        </div>
        <div class="clear-both text-center border-t pt-5">
          We look forward to seeing you at our next event!
        </div>
      </section>
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
    const events = await $content("home/events")
      .where({ date: { $gt: new Date() } })
      .sortBy("date")
      .fetch();

    return {
      pages,
      events
    };
  }
};
</script>

<style lang="postcss" scoped>
.hlc-event {
  @apply py-6;
  clear: both;

  &:not(:first-child) {
    border-top: 1px solid #eaeaea;
  }

  &__image {
    width: 250px;

    .hlc-event:nth-of-type(even) & {
      float: left;
    }

    .hlc-event:nth-of-type(odd) & {
      float: right;
    }
  }
}
</style>
