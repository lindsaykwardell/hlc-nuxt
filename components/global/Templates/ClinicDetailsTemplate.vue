<template>
  <div class="template container">
    <section class="full">
      <h1>Location</h1>
      <h4>Where to find us</h4>
      <hr />
      <div
        role="placeholder for map"
        style="width: 100%; height: 500px;"
        class="flex justify-center items-center"
      >
        <iframe
          class="embed-responsive-item shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.656069900266!2d-122.64210304865612!3d45.496870178998776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0b9e0170b59%3A0x8fda52152481f456!2sHealthy+Living+Family+Medicine%3A+Pulliam+Kerry+A+MD!5e0!3m2!1sen!2sus!4v1545090923814"
          frameborder="0"
          style="width: 100%; height: 100%"
          allowfullscreen=""
        ></iframe>
      </div>
      <div class="flex flex-col md:flex-row pt-16 justify-around">
        <div class="w-full md:w-1/4">
          <h3>Address:</h3>
          <p>
            {{ address[0] }}<br />
            {{ address[1] }}<br />
            {{ address[2] }}
          </p>
        </div>
        <div class="w-full md:w-1/4">
          <h3 class="py-4">Contact:</h3>
          <div
            class="grid grid-cols-5"
            v-for="contact in content.contact"
            :key="contact.name"
          >
            <div class="col-span-1">{{ contact.name }}:</div>
            <div class="col-span-4">
              <template v-if="contact.value.includes('@')">
                <a class="break-all" :href="`mailto:${contact.value}`">
                  {{ contact.value }}
                </a>
              </template>
              <template
                v-else-if="
                  contact.name.toLowerCase().includes('phone') ||
                    contact.name.toLowerCase().includes('fax')
                "
              >
                <a class="phone" :href="`tel:${contact.value}`">
                  {{ contact.value }}
                </a>
              </template>
              <template v-else>
                {{ contact.value }}
              </template>
            </div>
          </div>
        </div>
      </div>
      <section class="mt-16 bg-hlc-brown-100">
        <p>
          We acknowledge that the land where we are located rests on the
          traditional village sites of the Multnomah, Kathlamet, Clackamas,
          Tualatin, Kalapuya, and Molalla bands of the Chinook, and many other
          Tribes who made their homes along the Columbia River. We also
          acknowledge that systemic policies of genocide, relocation, and
          assimilation continue to impact Indigenous/Native American families
          today.
        </p>
        <p>
          We are guests on these lands and we honor the sovereignty of First
          Nations tribes, leaders, communities and families. We commit to
          ongoing, real-world efforts to center Indigenous wisdom, creativity,
          health and resilience in our work and life. We recognize that
          decolonization means land back and so we stand in solidarity with
          rematriation efforts. To learn whose homelands you are on, visit:
          <a href="https://native-land.ca/">Native-Land.ca</a>
        </p>
      </section>
      <div class="flex flex-col md:flex-row flex-wrap pt-16">
        <Hours
          v-for="hours in content.hours"
          :key="hours.title"
          v-bind="hours"
        />
      </div>
    </section>
    <slot />
  </div>
</template>

<script>
import StandardTemplate from "@/components/global/Templates/StandardTemplate";

export default {
  extends: StandardTemplate,
  props: ["content"],
  computed: {
    address() {
      return this.content.address;
    }
  }
};
</script>

<style lang="postcss" scoped>
h1 {
  @apply p-4 pb-1;
}

.col {
  @apply flex-1 p-4;
}

ul.hours li {
  @apply flex p-3;
  border-top: solid thin black;

  & div:first-child {
    @apply flex-shrink font-bold;
  }

  & div:last-child {
    @apply flex-grow text-right;
  }
}

.phone {
  @apply no-underline;

  &:hover {
    @apply underline;
  }
}
</style>
