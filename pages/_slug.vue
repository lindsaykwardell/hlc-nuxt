<template>
  <Layout :pages="pages" :activePage="page.slug">
    <component :is="page.template || 'StandardTemplate'">
      <nuxt-content :document="page" />
    </component>
    <component v-for="content in addlContent" :key="content.slug" :is="content.template || 'StandardTemplate'">
      <nuxt-content :document="content" />
    </component>
  </Layout>
</template>

<script>
import StandardTemplate from '@/components/Template/StandardTemplate'
export default {
  async asyncData({ $content, params }) {

    const pages = await $content("pages").fetch();
    const page = await $content(`pages/${params.slug}`).fetch();

    return {
      pages,
      page,
      addlContent: []
    };
  },
  components: {
    StandardTemplate
  }
};
</script>
