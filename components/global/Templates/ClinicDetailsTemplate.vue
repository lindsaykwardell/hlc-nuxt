<template>
  <div class="template container">
    <section>
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
      <div class="flex flex-col md:flex-row p-4 pt-16">
        <div class="col" role="Contact information">
          <h3 class="py-4">Address:</h3>
          <p class="whitespace-pre-line">
            {{ address }}
          </p>
          <h3 class="py-4">Contact:</h3>
          <div
            class="grid grid-cols-5"
            v-for="contact in content.contact"
            :key="contact.name"
          >
            <div class="col-span-1">{{ contact.name }}:</div>
            <div class="col-span-4">
              <template v-if="contact.value.includes('@')">
                <a :href="`mailto:${contact.value}`">
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
      return this.content.address.reduce(
        (total, line) => total + `${line}\n`,
        ""
      );
    }
  },
  mounted() {
    console.log(this.content);
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
