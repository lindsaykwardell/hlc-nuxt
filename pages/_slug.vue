<template>
  <Layout :pages="pages" :activePage="page.slug">
    <nuxt-content :document="page" />
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const pages = await $content('pages').fetch()
    const page = await $content(`pages/${params.slug}`).fetch();

    return {
      pages,
      page
    };
  }
};
</script>
