<template>
  <!-- TODO: Adjust the padding in the end -->
  <div class="pb-36 font-RokhMedium">
    <LandingHeader />
    <CustomersCount />
    <div class="w-10/12 mx-auto">
      <TitleShow
        title="دسته بندی محصولات"
        subtitle="بهترین و باکیفیت ترین برند ها ، چون شما لایق بهترین ها هستید"
      />
    </div>
  </div>
</template>

<script>
import LandingHeader from "@/components/LandingHeader.vue";
import CustomersCount from "@/components/CustomersCount.vue";
import TitleShow from "@/components/TitleShow.vue";

export default {
  components: {
    LandingHeader,
    CustomersCount,
    TitleShow,
  },
};
</script>
