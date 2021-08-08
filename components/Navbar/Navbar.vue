<template>
  <nav class="flex flex-col lg:items-end w-full sm:w-auto">
    <div class="flex flex-col md:flex-row justify-end w-full lg:w-auto" role="nav-links">
      <nuxt-link
        class="w-full lg:w-auto text-xl px-4 py-2 mx-2 font-mulish rounded-lg transition duration-100"
        :class="{
          'underline text-hlc-green-700': activePage === page.slug,
          'hover:underline hover:text-hlc-green-600': activePage !== page.slug
        }"
        v-for="page in pages"
        :key="page.slug"
        :to="page.slug === '/' ? page.slug : '/' + page.slug"
        >{{ page.title }}</nuxt-link
      >
    </div>
    <div class="flex flex-col sm:flex-row items-center pt-2 justify-center" role="contact">
      <SubLink
        role="address"
        icon="home"
        href="https://www.google.com/maps/place/Healthy+Living+Family+Medicine/@45.5010788,-122.6419802,13z/data=!4m5!3m4!1s0x0:0xd50c150241c3d305!8m2!3d45.496872!4d-122.6399088"
      >
        3605 SE 26th Ave<br />
        Portland, OR 97202
      </SubLink>
      <SubLink
        role="patient-portal"
        :icon="['fa', 'external-link-alt']"
        href="https://phr.charmtracker.com/login.sas?FACILITY_ID=9fac109f10b85efdeadfd56aed2ab60a43b1154fc374a4756c8f7ea08edb2f3fd95fcbc3b76e32a2"
        class="hidden md:flex"
      >
        Go to Patient Portal <br />
        (opens in new window)
      </SubLink>
      <SubLink role="social-media-links" separateHover class="hidden md:flex">
        <template #default="{hoverClass}">
          <a
            href="https://www.facebook.com/HealthyLivingCommunityNP"
            target="_blank"
            alt="HLC Facebook Page"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="text-2xl mx-1"
              :class="hoverClass"
            />
          </a>
          <a
            href="mailto:drkerry@hlcomm.org"
            alt="Email Contact"
          >
            <font-awesome-icon
              :icon="['fa', 'envelope']"
              class="text-2xl mx-1"
              :class="hoverClass"
            />
          </a>
        </template>
      </SubLink>
      <Phone />
    </div>
  </nav>
</template>

<script>
import SubLink from './SubLink.vue'
import Phone from './Phone.vue'

export default {
  props: {
    pages: {
      type: Array,
      default: () => []
    },
    activePage: {
      type: String,
      default: "/"
    }
  },
  components: {
    SubLink,
    Phone
  }
};
</script>
