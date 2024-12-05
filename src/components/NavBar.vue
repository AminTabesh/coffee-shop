<template>
  <div
    class="w-full h-24 flex flex-row-reverse justify-between px-20 pt-6 items-center font-Estedad"
  >
    <div class="flex gap-5">
      <ul class="flex flex-row-reverse gap-4 items-center">
        <li class="flex flex-row-reverse items-center gap-2 cursor-pointer">
          محصولات
          <Icon
            icon="material-symbols-light:keyboard-arrow-down-rounded"
            class="text-gray-500"
          />
        </li>
        <span class="text-[#DCDBD7]">|</span>
        <li class="cursor-pointer">درباره ما</li>
        <span class="text-[#DCDBD7]">|</span>
        <li class="cursor-pointer">تماس با ما</li>
      </ul>

      <img
        src="../assets/Logo.svg fill.png"
        alt="logo"
        class="w-36 object-contain"
      />
    </div>

    <div class="flex flex-row-reverse gap-4 items-center">
      <button class="p-2 border-2 rounded-full">
        <Icon icon="mdi-light:magnify" class="text-3xl" />
      </button>
      <button
        class="p-1 border-2 rounded-full flex items-center flex-row-reverse px-5 py-2 gap-2"
      >
        <Icon icon="mdi-light:account" class="text-3xl font-thin" />
        <span>ورود / ثبت نام</span>
      </button>
      <button
        class="bg-gold-brand text-white p-1 border rounded-full flex items-center flex-row-reverse px-5 py-2 gap-2"
      >
        <Icon icon="mdi-light:cart" class="text-3xl font-thin" />
        <span dir="rtl">۰ تومان</span>
      </button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
