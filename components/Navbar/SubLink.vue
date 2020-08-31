<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    target="_blank"
    :role="role"
    class="font-mulish flex items-center px-3 text-hlc-green-400 md:text-hlc-green-300 cursor-pointer select-none"
    :class="{
      'hover:text-hlc-green-200 transition duration-100': !separateHover
    }"
  >
    <font-awesome-icon v-if="icon" :icon="icon" class="text-5xl pr-3" />
    <div class="text-sm" :role="role + '-content'">
      <slot :hoverClass="hoverClass" />
    </div>
  </component>
</template>

<script>
import { VBtn } from "vuetensils";

export default {
  props: {
    role: {
      type: String,
      default: ""
    },
    icon: {
      type: String | Array,
      default: null
    },
    separateHover: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: null
    }
  },
  computed: {
    hoverClass() {
      return "hover:text-hlc-blue-200 transition duration-100";
    }
  },
  components: {
    VBtn
  }
};
</script>
