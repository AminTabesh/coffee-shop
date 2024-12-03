<template>
  <div
    class="w-full h-24 flex flex-row-reverse px-20 bg-gray-100 items-center font-Estedad"
  >
    <div class="flex gap-5">
      <ul class="flex flex-row-reverse gap-4 items-center">
        <li class="flex flex-row-reverse items-center gap-2 cursor-pointer">
            محصولات
            <Icon icon="material-symbols-light:keyboard-arrow-down-rounded" class="text-gray-500"/>

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
