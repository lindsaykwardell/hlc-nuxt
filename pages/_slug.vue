<template>
  <Layout :pages="pages" :activePage="page.slug">
    <component :is="page.template || 'StandardTemplate'" :content="addlContent">
      <nuxt-content :document="page" />
    </component>
  </Layout>
</template>

<script>
import StandardTemplate from "@/components/Template/StandardTemplate";
import CardsTemplate from "@/components/Template/CardsTemplate";

export default {
  async asyncData({ $content, params }) {
    const pages = await $content("pages").fetch();
    const page = await $content(`pages/${params.slug}`).fetch();
    const addlContent = page.additionalContent
      ? await $content(page.additionalContent).fetch()
      : [];

    return {
      pages,
      page,
      addlContent
    };
  },
  components: {
    StandardTemplate,
    CardsTemplate,
  }
};
</script>
