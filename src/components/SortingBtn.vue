<template>
  <button
    class="w-[13.25rem] h-[5rem] rounded-full bg-button-color text-black text-2xl font-RokhBold flex flex-row-reverse gap-3 items-center justify-center"
  >
    <img :src="src" :alt="title" class="w-[3.125rem] h-[3.125rem] rounded-full object-cover" />
    <p>{{ title }}</p>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      src: "",
    };
  },
  mounted() {
    this.src = this.img;
  },
};
</script>
