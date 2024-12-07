<template>
  <div class="flex flex-col items-center w-full gap-4">
    <img src="@/assets/title-coffee.png" alt="" />
    <div class="flex w-full items-center gap-6">
      <div
        v-if="hasLine"
        class="w-full h-[0.1rem]"
        :style="{ backgroundColor: lineColor }"
      ></div>
      <p
        :class="[
          { 'font-RokhBold': isBold, 'font-RokhSemiBold': !isBold },
          'text-3xl text-nowrap mx-auto',
        ]"
        :style="{ color: titleColor }"
      >
        {{ title }}
      </p>
      <div
        v-if="hasLine"
        class="w-full h-[0.1rem]"
        :style="{ backgroundColor: lineColor }"
      ></div>
    </div>
    <p v-show="subtitle" class="font-EstedadMedium text-sm">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    titleColor: {
      type: String,
      default: "#000000",
    },
    subtitle: {
      type: String,
      default: null,
    },
    hasLine: {
      type: Boolean,
      default: true,
    },
    isBold: {
      type: Boolean,
      default: true,
    },
    lineColor: {
      type: String,
      default: "#E5E7EB",
    },
  },
};
</script>
