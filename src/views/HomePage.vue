<template>
  <!-- TODO: Adjust the padding in the end -->
  <div class="pb-36 font-RokhMedium">
    <LandingHeader />
    <CustomersCount />
    <div class="w-10/12 mx-auto">
      <TitleShow
        title="دسته بندی محصولات"
        subtitle="بهترین و باکیفیت ترین برند ها ، چون شما لایق بهترین ها هستید"
        :hasLine="true"
      />

      <div class="flex items-center justify-between mt-16">
        <SortingBtn
          v-for="group in groups"
          :title="group.name"
          :key="group.name"
          :img="group.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LandingHeader from "@/components/LandingHeader.vue";
import CustomersCount from "@/components/CustomersCount.vue";
import TitleShow from "@/components/TitleShow.vue";
import SortingBtn from "@/components/SortingBtn.vue";

export default {
  components: {
    LandingHeader,
    CustomersCount,
    TitleShow,
    SortingBtn,
  },
  data() {
    return {
      groups: [
        {
          name: "دانه ی قهوه",
          img: require("@/assets/coffee.jpg"),
        },
        {
          name: "پودریجات",
          img: require("@/assets/coffee.jpg"),
        },
        {
          name: "دریپ بک",
          img: require("@/assets/coffee.jpg"),
        },
        {
          name: "سیروپ",
          img: require("@/assets/coffee.jpg"),
        },
        {
          name: "اکسسوری",
          img: require("@/assets/coffee.jpg"),
        },
      ].reverse(),
    };
  },
};
</script>
