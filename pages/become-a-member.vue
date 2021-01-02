<template>
  <Layout :pages="pages" activePage="/become-a-member" hideCallToAction>
    <StandardTemplate>
      <section>
        <h1>Become a Member</h1>
      </section>
      <section>
        <p>
          Becoming a member is easy! Please fill out the DocuSign form below to
          get started:
        </p>
        <p class="py-6">
          <a
            href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=f2ffa18c-1dbb-4131-8e14-57a5dbbd4db9&env=na4&acct=0e6fd90f-71e8-49ae-a981-177bebc0810f&v=2"
          >
            Healthy Living Community Membership Form
          </a>
        </p>
        <p>
          After submitting the form, you will be contacted to schedule your
          first appointment. We look forward tso having you join our community!
        </p>
        <hr />
        <p class="text-sm italic">
          All current HLC members should have received an email containing a
          DocuSign to renew membership for 2021. After this year, we are
          changing our membership process and eliminating the annual renewal
          requirement. This means that you will be automatically renewed for
          2022 and beyond without having to re-do the membership forms! (You can
          always make changes to your membership payments, or family members
          connected with your membership, by contacting us with the change
          request).
        </p>
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
