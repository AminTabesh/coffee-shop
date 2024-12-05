<template>
  <div class="flex flex-col items-center w-full mt-40 gap-4">
    <img src="@/assets/title-coffee.png" alt="" />
    <div class="flex w-full items-center gap-6">
      <div class="w-full h-[0.1rem] bg-gray-200"></div>
      <p class="font-RokhBold text-3xl text-nowrap">{{ title }}</p>
      <div class="w-full h-[0.1rem] bg-gray-200"></div>
    </div>
    <p class="font-EstedadMedium">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>
