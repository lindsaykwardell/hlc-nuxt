<template>
  <Layout :pages="pages" :activePage="page.slug">
    <component :is="page.template || 'StandardTemplate'" :content="addlContent || page">
      <nuxt-content :document="page" />
    </component>
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const pages = await $content("pages")
      .where({ order: { $gte: 0 } })
      .fetch();
    const page = await $content(`pages/${params.slug}`).fetch();
    const addlContent = page.additionalContent
      ? await $content(page.additionalContent).fetch()
      : undefined;

    return {
      pages,
      page,
      addlContent
    };
  },
};
</script>
