<template>
  <div class="flex flex-col items-center w-full mt-40 gap-4">
    <img src="@/assets/title-coffee.png" alt="" />
    <div class="flex w-full items-center gap-6">
      <div v-if="this.hasLine" class="w-full h-[0.1rem] bg-gray-200"></div>
      <p class="font-RokhBold text-3xl text-nowrap mx-auto">{{ title }}</p>
      <div v-if="this.hasLine" class="w-full h-[0.1rem] bg-gray-200"></div>
    </div>
    <p v-show="this.subtitle" class="font-EstedadMedium">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: null,
    },
    hasLine: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
