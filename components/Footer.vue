<template>
  <footer
    class="flex flex-col justify-center items-center mt-6 bg-hlc-dark-green-500 border-t-8 border-hlc-yellow-500 text-hlc-green-100"
  >
    <div v-if="!hideLinks" class="flex flex-wrap flex-col md:flex-row justify-around w-full py-4 mb-6">
      <div class="md:w-1/2 lg:w-1/5 p-3 text-center md:text-left">
        <h5 class="text-current">Access the Patient Portal</h5>
        <p class="pb-8">
          Convenient 24/7 access to your healthcare information and
          communication with our providers.
        </p>
        <a
          href="https://phr.charmtracker.com/login.sas?FACILITY_ID=9fac109f10b85efdeadfd56aed2ab60a43b1154fc374a4756c8f7ea08edb2f3fd95fcbc3b76e32a2"
          class="px-4 py-3 bg-hlc-green-500 hover:bg-hlc-green-400 transition duration-200 hover:shadow-md rounded text-white"
        >
          Patient Portal
        </a>
      </div>
      <div class="md:w-1/2 lg:w-1/5 p-3 text-center md:text-left">
        <h5 class="text-current">Purchase Supplements</h5>
        <p class="pb-8">
          Visit our Fullscript page to find approved supplements with your
          member discount.
        </p>
        <a href="https://us.fullscript.com/welcome/kschaefer" target="_top"
          ><img
            src="https://assets.fullscript.com/buttons/4.jpg"
            alt="Purchase products through our Fullscript virtual dispensary."
            border="0"
            class="m-auto"
        /></a>
      </div>
      <div class="md:w-1/2 lg:w-1/5 p-3 text-center md:text-left">
        <h5 class="text-current">Social Media</h5>
        <p class="pb-8">
          Come join our online community!
        </p>
        <div class="flex justify-center">
          <a
            href="https://www.facebook.com/HealthyLivingCommunityNP"
            target="_blank"
            class="mx-3"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="text-2xl mx-1 text-hlc-green-300 hover:text-hlc-green-200 transition duration-200"
            />
          </a>
          <a
            href="https://www.instagram.com/hlcommunity/"
            target="_blank"
            class="mx-3"
          >
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="text-2xl mx-1 text-hlc-green-300 hover:text-hlc-green-200 transition duration-200"
            />
          </a>
        </div>
        <hr class="mt-3" />
        <McSubscribe />
      </div>
      <div class="md:w-1/2 lg:w-1/5 p-3 text-center md:text-left">
        <h5 class="text-current">Additional Links</h5>
        <div class="flex flex-col">
          <nuxt-link to="/board" class="hover:underline">
            Meet the Board
          </nuxt-link>
          <nuxt-link
            to="/membership#how-to-join-our-community"
            class="hover:underline"
          >
            Become a Member
          </nuxt-link>
          <a
            href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=b3ee0ce1-56ce-455e-83af-6374bfeffd89&env=na4&acct=0e6fd90f-71e8-49ae-a981-177bebc0810f&v=2"
            class="hover:underline"
          >
            Payment Update Form
          </a>
          <!-- <nuxt-link to="/board-minutes" class="hover:underline"
            >Board Minutes</nuxt-link
          >
          <a href="#" class="hover:underline">HLC Newsletter</a> -->
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center items-center w-full text-hlc-green-300 bg-hlc-dark-green-600 py-4 p-2"
    >
      <div class="pb-4 flex flex-col md:flex-row text-center">
        <span class="md:mr-2">Copyright © Healthy Living Community,</span>
        <span>a 501c(3) non-profit</span>
      </div>
      <DonateButton />
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    hideLinks: {
      type: Boolean,
      default: false
    }
  }
};
</script>
