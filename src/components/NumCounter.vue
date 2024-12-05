<template>
    <div class="flex flex-col items-center font-RokhBold">
      <p class="text-7xl text-custom-brand">+{{ counter }}</p>
      <p class="font-RokhMedium text-3xl">{{ name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ["name", "number"],
    data() {
      return {
        counter: 0,
        interval: null,
      };
    },
    mounted() {
      this.interval = setInterval(() => {
        if (this.counter < Number(this.number)) {
          this.counter > 100 
            ? (this.counter = Math.min(this.counter + 100, Number(this.number))) 
            : this.counter++;
        } else {
          clearInterval(this.interval);
        }
      }, 10);
    },
    beforeUnmount() {
      if (this.interval) clearInterval(this.interval);
    },
  };
  </script>
  