<template>
  <div class=" font-RokhMedium">
    <LandingHeader />
    <CustomersCount />
    <div class="w-10/12 mx-auto">
      <TitleShow
        title="دسته بندی محصولات"
        subtitle="بهترین و باکیفیت ترین برند
      ها ، چون شما لایق بهترین ها هستید"
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
    <NewestProducts />
    <div class="w-10/12 mx-auto">
      <BrandsShow class="mt-16" />
    </div>
    <OffProducts />
    <div class="w-10/12 mx-auto">
      <AboutUs />
    </div>
    <BlogPosts />
    <div class="w-10/12 mx-auto">
      <InstaPromo />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import LandingHeader from "@/components/LandingHeader.vue";
import CustomersCount from "@/components/CustomersCount.vue";
import TitleShow from "@/components/TitleShow.vue";
import SortingBtn from "@/components/SortingBtn.vue";
import NewestProducts from "@/components/NewestProducts.vue";
import BrandsShow from "@/components/BrandsShow.vue";
import OffProducts from "@/components/OffProducts.vue";
import AboutUs from "@/components/AboutUs.vue";
import BlogPosts from "@/components/BlogPosts.vue";
import InstaPromo from "@/components/InstaPromo.vue";
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    LandingHeader,
    CustomersCount,
    TitleShow,
    SortingBtn,
    NewestProducts,
    BrandsShow,
    OffProducts,
    AboutUs,
    BlogPosts,
    InstaPromo,
    FooterComponent
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
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchBlogPosts");
  },
};
</script>
