<template>
  <div class="w-full bg-[#333333] pt-10 pb-3">
    <div class="w-10/12 mx-auto flex flex-col justify-between">
      <div class="flex justify-between">
        <FooterInfo
          title="ساعات کاری"
          subtitle="8 صبح الی 11 شب"
          icon="clock"
        />
        <FooterInfo
          title="آدرس"
          subtitle="جاده چالوس ، رشت ، رادیو دریا 2"
          icon="location"
        />
        <FooterInfo title="تلفن تماس" subtitle="09177839982" icon="phone" />
      </div>
      <div class="bg-gray-500 w-full h-[2px] my-5"></div>
      <div class="flex justify-between flex-row-reverse">
        <img src="@/assets/Logo-white.png" alt="logo" />
        <ul class="flex flex-row-reverse gap-4 items-center text-white">
          <li class="flex flex-row-reverse items-center gap-2 cursor-pointer">
            محصولات
            <Icon icon="material-symbols-light:keyboard-arrow-down-rounded" />
          </li>
          <li class="cursor-pointer">درباره ما</li>
          <li class="cursor-pointer">تماس با ما</li>
        </ul>
        <div class="flex gap-1">
          <div
            class="w-[3rem] h-[3rem] bg-[#434343] flex justify-center items-center text-white rounded-full"
          >
            <Icon icon="mdi:instagram" class="text-2xl" />
          </div>
          <div
            class="w-[3rem] h-[3rem] bg-[#434343] flex justify-center items-center text-white rounded-full"
          >
            <Icon icon="ic:outline-whatsapp" class="text-2xl" />
          </div>
          <div
            class="w-[3rem] h-[3rem] bg-[#434343] flex justify-center items-center text-white rounded-full"
          >
            <Icon icon="ic:outline-telegram" class="text-2xl" />
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center flex-row-reverse mt-16">
        <p class="text-sm text-gray-400">تمام حقوق این سایت متعلق به قهوه ی چالوس میباشد.</p>
        <img src="@/assets/Enamad.png" alt="enamad" class="cursor-pointer">
      </div>
    </div>
  </div>
</template>

<script>
import FooterInfo from "./FooterInfo.vue";
import { Icon } from "@iconify/vue";

export default {
  name: "FooterComponent",
  components: { FooterInfo, Icon },
};
</script>
