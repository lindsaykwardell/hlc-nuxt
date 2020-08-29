<template>
  <Layout :pages="pages" activePage="/">
    This is the home page!
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const pages = await $content("pages").fetch();

    return {
      pages
    };
  }
};
</script>
