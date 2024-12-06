<template>
  <div class="w-full flex flex-col items-center relative">
    <img src="@/assets/elements/element1.png" alt="element" class="absolute top-28 right-[25%]">
    <img src="@/assets/elements/element1.png" alt="element" class="absolute bottom-[-7rem] left-[15%]">
    <TitleShow
      title="قهوه ها بر اساس برند"
      subtitle="بر اساس برند مورد علاقه تان انتخاب کنید"
      :hasLine="false"
    />
    <div class="w-10/12 mt-8 grid grid-cols-4 gap-8 justify-items-center">
      <div
        v-for="brand in brands"
        :key="brand.name"
        class="flex flex-col items-center justify-center w-[6.75rem] h-[10.3rem] border-2 border-gold-brand rounded-full p-2 mt-10"
      >
        <img
          :src="require(`@/assets/brands/${brand.img}`)"
          :alt="brand.name"
          class="w-24 h-24 object-contain mb-4"
        />
        <span class="text-lg font-semibold">{{ brand.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import TitleShow from "./TitleShow.vue";
export default {
  components: { TitleShow },
  name: "BrandsShow",
  data() {
    return {
      brands: [
        { name: "Tamkins", img: "1.png" },
        { name: "Bonmano", img: "2.png" },
        { name: "Lemm", img: "3.png" },
        { name: "Griffon", img: "4.png" },
        { name: "Xav", img: "5.png" },
        { name: "Hayk", img: "6.png" },
        { name: "Alba", img: "7.png" },
        { name: "Mont", img: "8.png" },
      ],
    };
  },
};
</script>
