<template>
  <Layout :pages="pages" activePage="/become-a-member" hideCallToAction>
    <StandardTemplate>
      <section>
        <h1>Become a Member</h1>
      </section>
      <section>
        <p>
          Becoming a member is easy! Just call the clinic number (971-231-4536)
          or email
          <a href="mailto:pearl@healthylivingfamilymedicine.com"
            >pearl@healthylivingfamilymedicine.com</a
          >.
        </p>
        <p>
          After connecting with us, you will be asked to complete a Membership
          Form which must be submitted prior to scheduling an appointment for
          you/a family member. Membership must be renewed at the end of each
          year by completing a new Membership Form.
        </p>
        <p>The membership form is also available below.</p>
        <a href="HLC-Membership-Renewal-Agreement-2020.pdf">Download the Healthy Living Community Membership Form (2020)</a><br />
        <a href="hlc-renewal-form.pdf">Download the Healthy Living Community Membership Renewal Form (2020)</a>
      </section>
    </StandardTemplate>
  </Layout>
</template>

<script>
import VAlert from "vuetensils/src/components/VAlert/VAlert.vue";

const STATUS_IDLE = Symbol();
const STATUS_WAITING = Symbol();
const STATUS_SUBMITTED = Symbol();
const STATUS_ERROR = Symbol();

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
