<template>
  <Layout :pages="pages" activePage="/">
    <div class="hero">
      <client-only>
        <VImg src="/IMG_3197.jpg" background="green" />
      </client-only>
    </div>
    <section>
      <h2 class="font-playfair text-center text-5xl text-hlc-blue-500">
        Welcome to Healthy Living Community
      </h2>
      <h3 class="font-mulish text-center text-3xl text-hlc-dark-green-500">
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
  </Layout>
</template>

<script>
import { VImg } from "vuetensils";

export default {
  async asyncData({ $content, params }) {
    const pages = await $content("pages").fetch();

    return {
      pages
    };
  },
  components: {
    VImg
  }
};
</script>

<style lang="postcss" scoped>
.hero {
  @apply overflow-hidden;
  height: 600px;

  & img {
    @apply object-cover;
  }
}

section {
  @apply mt-5;
}
</style>
