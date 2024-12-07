<template>
  <div
    class="flex flex-row-reverse justify-between items-center px-24 py-24"
  >
    <div class="flex flex-col items-end">
      <h2 dir="rtl" class="font-RokhSemiBold text-4xl">
        خـــانه قـهــوه <span class="font-RokhMedium">چـــالوس☕</span>
      </h2>
      <p class="max-w-[38.75rem] mt-6 font-Estedad" dir="rtl">
        با بیش از ده سال تجربه در اداره کافه‌ها و رستوران‌ها، و پنج سال سابقه در
        عرصه‌ی آموزش و تولید و فروش قهوه، ما در زمینه‌ی خدمات قهوه به شما
        اطمینان می‌دهیم. تخصص ما در ترکیب بی‌نظیر علم قهوه با تجربه رستورانی،
        تجربه‌ی بی‌نظیری را برای شما ایجاد خواهیم کرد.
      </p>
      <button
        class="p-2 mt-2 text-white rounded-full bg-gold-brand w-[8.75rem]"
      >
        درباره ما
      </button>
    </div>
    <div class="relative">
      <img
        src="@/assets/about-us.png"
        alt="About-us"
        class="rounded-full border-[3px] border-black p-3"
      />
      <img
        src="@/assets/Certificate.png"
        alt="Certificate"
        class="absolute right-[-40%] top-[-10%]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
