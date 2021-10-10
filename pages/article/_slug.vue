<template>
  <Layout :pages="pages">
    <div v-if="article" class="blog-post flex justify-center items-center flex-col">
      <div
        class="bg-white shadow-md my-5 transition duration-100 w-full lg:w-[1000px]"
      >
        <div class="post-title">
          <img
            class="hero object-cover m-auto w-full max-h-[420px] mb-4"
            :src="article.image"
            alt=""
          />
          <h1 class="title px-4 max-w-[900px] m-auto">{{ article.title }}</h1>
          <div
            class="text-center pt-2 text-gray-600 transition duration-100"
          >
            Published by {{ article.author }} on {{ formatDate(article.date) }}
          </div>
        </div>
        <hr />
        <article class="py-8 px-4 md:px-0 prose m-auto">
          <nuxt-content :document="article" />
        </article>
      </div>
    </div>
    <div v-else class="blog-post flex justify-center items-center flex-col">
      <div
        class="bg-white shadow-md my-5 transition duration-100 w-full lg:w-[1000px]"
      >
        <div class="post-title">
          <h1 class="title p-4 max-w-[900px] m-auto">
            Article not found
          </h1>
        </div>
        <hr />
        <article class="py-8 px-4 md:px-0 prose m-auto">
          <p>
            The article you were looking for was not found. Check the URL and try again.
          </p>
        </article>
      </div>
    </div>
  </Layout>
</template>

<script>
import dayjs from 'dayjs'

export default {
  async asyncData({ $content, params }) {
    const pages = await $content("pages")
      .where({ order: { $gte: 0 } })
      .fetch();

    const article =
      (
        await $content("article")
          .where({
            path: { $contains: params.slug }
          })
          .fetch()
      )[0] || null;

    return {
      pages,
      article
    };
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format("MMM DD YYYY")
    }
  }
};
</script>

<style lang="postcss">
.blog-post {
  .post-title {
    text-align: center;
  }

  @media (max-width: 50em) {
    .hero {
      max-height: 260px;
      margin-top: 0;
      margin-bottom: 2rem;
    }
  }
}
</style>
