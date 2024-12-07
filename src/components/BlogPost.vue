<template>
  <div
    dir="rtl"
    class="flex flex-col gap-4 bg-[#EBEBDC] rounded-xl w-[25rem] h-[32.5rem] overflow-hidden transition-all hover:translate-y-[-1rem]"
  >
    <img
      :src="require(`@/assets/blog/${img}`)"
      :alt="title"
      class="object-cover"
    />
    <div class="mt-4 flex flex-col gap-5 px-8">
      <h3 class="font-RokhSemiBold text-xl">
        {{ title }}
      </h3>
      <p>{{ shortenedContent }}</p>
      <p class="cursor-pointer text-gold-brand font-RokhSemiBold text-xl">ادامه مطلب »</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  computed: {
    shortenedContent() {
      return this.content.slice(0, 200).concat(" ...");
    },
  },
};
</script>
