<template>
  <div class="flex w-full items-center mt-10 relative flex-col">
    <img
      src="@/assets/COFFEE.svg fill.png"
      alt="COFFEE"
      class="z-0 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
    />
    <img src="@/assets/Hero-cofee-house.png" alt="Coffee-Cup" class="z-10" />
    <div
      class="bg-[url('@/assets/so-white.png')] z-20 -mt-20 relative overflow-hidden bg-opacity-100 w-[62.5rem] h-[9.68rem] border rounded-full bg-cover before:absolute before:inset-0 before:bg-custom-brand before:opacity-20 flex items-center justify-evenly"
    >
      <NumCounter number="100" name="اکسسوری" />
      <NumCounter number="3" name="شعبه" />
      <NumCounter number="1000" name="مشتری راضی" />
      <NumCounter number="100" name="نوع قهوه" />
    </div>
  </div>
</template>

<script>
import NumCounter from "./NumCounter.vue";

export default {
  components: { NumCounter },
};
</script>
