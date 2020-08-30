<template>
  <Layout :pages="pages" activePage="/">
    <StandardTemplate>
      <section>
        <h1 class="text-center">
          Welcome to Healthy Living Community
        </h1>
        <h3 class="text-center">
          Together we can grow optimal health
        </h3>
        <p class="container pt-5">
          At Healthy Living Family Medicine, our mission is to help promote
          wellness in our patients and their families. Our belief is that your
          body has a natural ability to create and sustain health. We provide
          patient-centered care that benefits the entire person. We want to find
          the root cause of symptoms, not only to alleviate them.
        </p>
      </section>
    </StandardTemplate>
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

<style lang="postcss" scoped>
section {
  @apply mt-5;
}
</style>
