<template>
  <Layout class="bg-hlc-brown-100">
    <template #header>
      <nuxt-link to="/">
        <img
          src="/hlc-logo-stacked-color.svg"
          alt="Healthy Living Community Logo"
          class="w-[350px] m-auto"
        />
      </nuxt-link>
      <hr class="w-2/3 m-auto border-black" />
    </template>
    <StandardTemplate>
      <h1 class="font-merriweather">Give the Gift of Healing</h1>

      <img
        src="/gift-of-healing-cropped.webp"
        class="w-3/5 shadow-lg rounded-lg m-auto no-default"
      />

      <div class="w-3/4 m-auto py-8">
        <p>
          Do you have loved ones who are uninsured, under-insured or simply not being supported by the current health care system? Give the gift of healing by signing them up for membership at Healthy Living Community.
        </p>
        <p>
          Healthy Living Community is a non-profit health clinic providing affordable holistic health care and health-supporting resources in SE Portland. We are working to create a model of community supported healthcare offering sliding-scale memberships and pay what you can appointments as our answer to the broken medical system. Members receive 30-60 minute appointments of high-quality, trauma-informed holistic health care regardless of what they are able to pay. Membership also includes: nutrition and food support, supplements, connections with health-promoting community partners, support groups and educational events all at a discounted rate.
        </p>
        <p>
          Healthy Living Community believes that healthy communities grow health individuals. We provide education to ensure that people understand what it is to be healthy and how to build our personal health.  We know that it requires support through education and a community of like-minded peers to create and maintain optimal health. At Healthy Living Community holistic care means access to providers who will fully listen and work in partnership with our members to help guide their unique paths towards health.
        </p>
        <p>
          Are your loved ones already part of the Healthy Living Community? You can gift them with a bodywork session and/or food sensitivity test. Want to support other community members too? You can donate to support our mission and help pay for the quality care our members receive.
        </p>
      </div>
      <section>
        <h2>What is Healthy Living Community?</h2>
        <p>
          We are a registered 501(c)(3) nonprofit that offers affordable,
          patient-centered, inclusive, and trauma-informed care in a beautiful
          and welcoming setting. We focus on root causes of symptoms, and work
          with our patients on treatment plans that are both realistic and
          effective. Our patient care integrates medications with diet and
          exercise, as well as referrals to massage, acupuncture, naturopathic
          medicine and various other modalities. Our goal is to do this in a
          compassionate, cost-effective, and earth-friendly manner.
        </p>
        <p>
          By supporting Healthy Living Community, you are helping to make a
          difference in the lives of people in need. We are a non-profit
          organization that is dedicated to providing a safe, healthy, and
          supportive environment for all. We are a community of people who are
          passionate about health and wellness.
        </p>
      </section>
      <div class="flex items-center py-8">
        <Card class="flex-1 bg-[#fafafa] flex flex-col">
          <h3>Gift of Membership</h3>
          <p class="flex-grow">
            Give the gift of membership to a friend or family member. This gift
            covers the cost of a membership for one year.
          </p>
          <div class="flex justify-center">
            <DonateButton />
          </div>
        </Card>
        <Card class="flex-1 h-[550px] flex flex-col">
          <h3>
            Gift of Membership <br />
            + Body Work
          </h3>
          <p class="flex-grow">
            Give the gift of membership and a body work session. This gift
            covers the cost of a membership for one year and a body work
            session.
          </p>
          <div class="flex justify-center">
            <DonateButton />
          </div>
        </Card>
        <Card class="flex-1 bg-[#fafafa] flex flex-col">
          <h3>Gift of Care</h3>
          <p class="flex-grow">
            Give the gift of care to a current member of the community. This
            gift covers the cost of a one-time care session.
          </p>
          <div class="flex justify-center">
            <DonateButton />
          </div>
        </Card>
      </div>
    </StandardTemplate>

    <template #footer>
      <Footer hideLinks />
    </template>
  </Layout>
</template>

<script>
export default {};
</script>
