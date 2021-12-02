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
          Give the gift of healing this holiday season! If your friend or loved
          one is looking for a supportive community of health professionals, you
          can help them by donating to the Healthy Living Community. The gift of
          healing is a gift of love and compassion. It is a gift of life, and it
          is a gift of hope.
        </p>
        <p>
          You can give the gift of healing in three ways:
          <ul>
            <li>By paying for membership in Healthy Living Community for one year.</li>
            <li>By paying for membership in Healthy Living Community for one year PLUS a body work session.</li>
            <li>By paying for a single visit with one of our health practitioners.</li>
          </ul>
        </p>
        <p>
          Whatever you choose, you can make a difference in the health and wellness of your loved ones.
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
