<template>
  <Layout :pages="pages" activePage="/become-a-member">
    <StandardTemplate>
      <section>
        <h1>Become a Member</h1>
      </section>
      <section>
        <FormulateForm
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          class="flex flex-col justify-center items-center"
          @submit="submitMemberForm"
        >
          <FormulateInput
            name="name"
            label="Name"
            validation="required"
            class="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 my-3"
            input-class="w-full p-2 shadow"
          />
          <FormulateInput
            name="email"
            label="Email Address"
            validation="required|email"
            class="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 my-3"
            input-class="w-full p-2 shadow"
          />
          <FormulateInput name="bot-field" type="hidden" />
          <FormulateInput
            type="submit"
            label="Request Membership Form"
            class="bg-hlc-magenta-500 text-white rounded-lg transition duration-200 hover:bg-hlc-magenta-600 mt-5"
            input-class="px-4 py-2"
            :disabled="submitted"
          >
            <div class="flex">
              <svg
                v-if="showSpinner"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Request Membership Form
            </div>
          </FormulateInput>
        </FormulateForm>
        <VAlert v-if="hasSuccess">Your request has been submitted!</VAlert>
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
    const pages = await $content("pages").fetch();

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
