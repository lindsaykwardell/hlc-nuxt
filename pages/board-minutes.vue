<template>
  <Layout :pages="pages" activePage="/board-minutes">
    <StandardTemplate>
      <section>
        <h1>Board Minutes</h1>
      </section>
    </StandardTemplate>
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
        const pages = await $content("pages")
      .where({ order: { $gte: 0 } })
      .fetch();

    return {
      pages
    };
  }
};
</script>
