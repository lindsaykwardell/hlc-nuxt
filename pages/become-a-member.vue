<template>
  <Layout :pages="pages" activePage="/become-a-member" hideCallToAction>
    <StandardTemplate>
      <section>
        <h1>Become a Member</h1>
      </section>
      <section>
        <form
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          class="flex flex-col justify-center items-center"
        >
          <label class="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 my-3">
            Name
            <input name="name" required class=" p-2 shadow bg-gray-400" />
          </label>
          <label class="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 my-3">
            Email Address
            <input name="email" required class="p-2 shadow bg-gray-400" />
          </label>
          <input name="bot-field" type="hidden" />
          <input
            type="submit"
            class="bg-hlc-magenta-500 text-white rounded-lg transition duration-200 hover:bg-hlc-magenta-600 mt-5 px-4 py-2 cursor-pointer"
            :disabled="submitted"
            value="Request Membership Form"
          />
        </form>
        <ClientOnly>
          <VAlert v-if="hasSuccess">Your request has been submitted!</VAlert>
        </ClientOnly>
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
  },
  data: () => ({
    formStatus: STATUS_IDLE
  }),
  computed: {
    submitted() {
      return (
        this.formStatus !== STATUS_IDLE && this.formStatus !== STATUS_ERROR
      );
    },
    hasError() {
      return this.formStatus === STATUS_ERROR;
    },
    hasSuccess() {
      return this.formStatus === STATUS_SUBMITTED;
    },
    showSpinner() {
      return this.formStatus === STATUS_WAITING;
    }
  },
  methods: {
    async submitMemberForm(data) {
      const formData = new FormData();

      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });

      this.formStatus = STATUS_WAITING;

      try {
        await this.$axios.post("/", formData);

        this.formStatus = STATUS_SUBMITTED;
      } catch (err) {
        this.formStatus = STATUS_ERROR;
      }
    }
  },
  components: {
    VAlert
  }
};
</script>
