<template>
  <div class="flex gap-2 text-white flex-row-reverse">
    <div
      class="bg-gold-brand rounded-full w-[4.375rem] h-[4.375rem] flex justify-center items-center"
    >
      <Icon :icon="resolvedIcon" class="text-white text-5xl" />
    </div>

    <div class="flex flex-col justify-center" dir="rtl">
      <h4 class="text-lg font-bold font-RokhSemiBold">{{ title }}</h4>
      <p class="text-sm text-gray-400 font-RokhLight">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "FooterInfo",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
      validator: (value) => ["location", "phone"].includes(value),
    },
  },
  computed: {
    resolvedIcon() {
      const icons = {
        location: "mdi:location",
        phone: "typcn:phone",
        clock: "tabler:clock",
      };
      return icons[this.icon];
    },
  },
  components: {
    Icon,
  },
};
</script>
