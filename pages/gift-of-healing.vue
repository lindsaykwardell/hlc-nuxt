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
        src="/gift-of-healing.webp"
        class="w-5/6 shadow-lg rounded-lg m-auto no-default"
      />

      <!-- <img
        src="https://images.unsplash.com/photo-1482355785872-95d19e9ebee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
        class="w-5/6 shadow-lg rounded-lg m-auto no-default"
      /> -->

      <div class="w-3/4 m-auto py-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          lobortis felis luctus orci fringilla pretium. Aenean ut purus turpis.
          Maecenas iaculis euismod dui at lobortis. Integer accumsan volutpat
          tempor. Phasellus a ipsum vel lacus scelerisque auctor. Ut at enim sit
          amet felis commodo dictum id vel felis. Nulla egestas quam eu massa
          luctus, ac faucibus dolor sodales. Suspendisse est sem, pellentesque
          quis porttitor vitae, cursus ut lacus. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Aenean non porta nisi. Vivamus sem arcu, malesuada vitae dolor ac,
          dictum lacinia eros. Maecenas et semper turpis. Nam imperdiet, sem non
          consequat maximus, mauris sapien pharetra sem, sit amet auctor nisl
          est eget quam. Vivamus faucibus urna id mi hendrerit malesuada.
        </p>

        <p>
          Nulla facilisi. Fusce semper nibh sit amet pharetra tristique. Sed
          commodo orci at enim cursus dignissim. Donec tempus lobortis aliquam.
          Fusce sollicitudin faucibus odio, tincidunt mattis dolor imperdiet a.
          Curabitur vel bibendum libero. Nullam pretium posuere dolor, eget
          semper mauris vehicula ac. Fusce odio dui, tempus id velit sed,
          venenatis venenatis ex. Nam facilisis rutrum pulvinar.
        </p>

        <p>
          Morbi et nulla ante. Nulla facilisi. Nulla iaculis ligula interdum
          justo consequat, id posuere sem dapibus. Integer dignissim quam in
          lacus tristique sodales. Ut non metus ex. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Praesent
          venenatis leo augue, sed consectetur metus dictum sodales. Nunc
          ultricies est sit amet massa auctor mattis. Duis at sodales arcu.
          Nulla eget porttitor orci, non pretium sem. Vestibulum ornare
          venenatis rutrum. Vestibulum a facilisis ante, vel suscipit erat. Duis
          maximus ultrices odio nec semper. Proin porttitor sodales magna a
          sollicitudin. Aenean eros lectus, dapibus eget nulla ac, eleifend
          elementum quam. Mauris ut justo sagittis, placerat arcu ut, finibus
          ligula.
        </p>
      </div>
      <section>
        <h2>Amazing Title Goes Here</h2>
        <p>
          Duis sed erat in elit bibendum porta nec vitae leo. Duis fringilla
          convallis nibh. Duis vulputate turpis et purus bibendum aliquet eget
          vitae nisi. Mauris sodales est eget est varius, vitae lacinia lorem
          convallis. Vestibulum porta mauris vitae nibh gravida vulputate.
          Maecenas bibendum ipsum quam, eu commodo ex faucibus vel. Nulla a leo
          sit amet lorem efficitur fringilla. Nunc ac rutrum mi. Donec sed
          malesuada nisl.
        </p>
      </section>
      <div class="flex items-center py-8">
        <Card class="flex-1 bg-[#fafafa] flex flex-col">
          <h3>Give Membership</h3>
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
