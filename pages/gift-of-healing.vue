<template>
  <Layout class="bg-hlc-brown-100">
    <template #header>
      <div class="bg-gradient-to-b from-white">
        <nuxt-link to="/">
          <img
            src="/hlc-logo-stacked-color.svg"
            alt="Healthy Living Community Logo"
            class="w-[350px] m-auto"
          />
        </nuxt-link>
      </div>
      <hr class="w-2/3 m-auto border-black" />
    </template>
    <StandardTemplate>
      <h1 class="font-merriweather">Give the Gift of Healing</h1>

      <img
        src="/gift-of-healing-cropped.webp"
        class="w-3/5 shadow-lg rounded-lg m-auto no-default"
      />

      <div class="w-3/4 m-auto py-8 text-justify">
        <p>
          Do you have loved ones who are uninsured, under-insured or simply not
          being supported by the current health care system? Give the gift of
          healing by signing them up for membership at Healthy Living Community.
        </p>
        <p>
          Healthy Living Community is a registered 501(c)(3) non-profit health
          clinic providing affordable holistic health care and health-supporting
          resources in SE Portland. We are working to create a model of
          community supported healthcare offering sliding-scale memberships and
          pay what you can appointments as our answer to the broken medical
          system. Members receive 30-60 minute appointments of high-quality,
          trauma-informed holistic health care regardless of what they are able
          to pay. Membership also includes: nutrition and food support,
          supplements, connections with health-promoting community partners,
          support groups and educational events all at a discounted rate.
        </p>
        <p>
          Healthy Living Community believes that healthy communities grow health
          individuals. We provide education to ensure that people understand
          what it is to be healthy and how to build our personal health. We know
          that it requires support through education and a community of
          like-minded peers to create and maintain optimal health. At Healthy
          Living Community holistic care means access to providers who will
          fully listen and work in partnership with our members to help guide
          their unique paths towards health. We are working to build a community
          of people who are passionate about health and wellness.
        </p>
        <p>
          Are your loved ones already part of the Healthy Living Community? You
          can gift them with a bodywork session and/or food sensitivity test.
          Want to support other community members too? You can donate to support
          our mission and help pay for the quality care our members receive.
        </p>
        <div class="flex justify-between items-center">
          <p>~</p>
          <p class="flex-grow text-xl p-8 mt-4">
            By supporting Healthy Living Community, you are helping make
            quality, holistic, patient-centered care available to others.
          </p>
          <p>~</p>
        </div>
      </div>
      <div class="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center py-8">
        <Card class="w-full flex-1 lg:h-[550px] bg-[#fafafa] flex flex-col">
          <h3>Gift of Membership</h3>
          <div class="flex-grow">
            <p>
              Give the gift of membership to a friend or family member. This
              gift covers the cost of a membership for one year.
            </p>
            <p>
              To give a gift of membership, please fill out the form below and
              we will send a confirmation email to the recipient.
            </p>
          </div>
          <div class="flex justify-center">
            <nuxt-link
              class="action-button bg-hlc-magenta-500 hover:bg-hlc-magenta-600 transition duration-200 hover:shadow-lg text-white p-3 rounded text-left"
              to="/membership#how-to-join-our-community"
            >
              Go to the Membership form
            </nuxt-link>
          </div>
        </Card>
        <Card class="w-full flex-1 lg:h-[600px] flex flex-col">
          <h3>
            Gift of Membership <br />
            + Body Work
          </h3>
          <div class="flex-grow">
            <p>
              Give the gift of membership and a body work session. This gift
              covers the cost of a membership for one year and a body work
              session.
            </p>
            <p>
              To give a gift of membership and a body work session, please fill
              out the form below and we will send a confirmation email to the
              recipient. You will also need to send payment for the body work
              session to the second link below, specifying who is receiving the
              gift.
            </p>
            <p>The cost of a body work session is $100-$240 (sliding scale)</p>
          </div>
          <div class="flex justify-center items-center flex-col gap-2">
            <nuxt-link
              class="action-button bg-hlc-magenta-500 hover:bg-hlc-magenta-600 transition duration-200 hover:shadow-lg text-white p-3 rounded text-left"
              to="/membership#how-to-join-our-community"
            >
              Go to the Membership form
            </nuxt-link>
            <a
              href="https://www.paypal.com/paypalme/hlcomm"
              class="action-button bg-blue-500 hover:bg-blue-600 transition duration-200 hover:shadow-lg text-white p-3 rounded text-left"
            >
              Pay via PayPal
            </a>
          </div>
        </Card>
        <Card class="w-full flex-1 lg:h-[550px] bg-[#fafafa] flex flex-col">
          <h3>Gift of Care</h3>
          <div class="flex-grow">
            <p>
              Give the gift of care to a current member of the community. This
              gift covers the cost of a one-time care session.
            </p>
            <p>Some gift options include:
              <ul>
                <li>Food sensitivity test - $100</li>
                <li>Body work session - $100-$240 (sliding scale)</li>
              </ul>
            </p>
            <p>Click on the button to submit payment. In the comment, note the service being paid for and the person it is being gifted to.</p>
          </div>
          <div class="flex justify-center">
            <a
              href="https://www.paypal.com/paypalme/hlcomm"
              class="action-button bg-blue-500 hover:bg-blue-600 transition duration-200 hover:shadow-lg text-white p-3 rounded text-left"
            >
              Pay via PayPal
            </a>
          </div>
        </Card>
      </div>
      <section>
        <p>Interested in donating, but don't have someone specific in mind? You can donate any value to the Healthy Living Community, which will be used to help cover the costs of an existing member's appointment or session.</p>
        <div class="text-center py-4">
          <DonateButton />
        </div>
      </section>
    </StandardTemplate>

    <template #footer>
      <Footer hideLinks />
    </template>
  </Layout>
</template>

<script>
import DonateButton from "~/components/global/DonateButton.vue";
export default { components: { DonateButton } };
</script>
