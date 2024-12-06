<template>
  <div class="bg-background-color-darker w-full h-fit mt-44 pt-8 pb-16">
    <div class="w-10/12 mx-auto flex flex-col items-center">
      <TitleShow
        title="جدیدترین محصولات"
        :hasLine="false"
        titleColor="#4F2C19"
        :isBold="false"
      />
      <ul class="flex gap-5 mt-5">
        <li
          v-for="category in categories"
          :key="category.name"
          :class="[
            {
              'font-RokhSemiBold before:bottom-0 before:left-0 before:absolute before:h-[2px] before:bg-[#B0A27B] before:w-full':
                category.dataName === activeCategory,
            },
            'cursor-pointer relative',
          ]"
          @click="changeActiveCategoty(category.dataName)"
        >
          {{ category.name }}
        </li>
      </ul>
      <div v-if="activeCategoryArray.length > 0" class="flex gap-4">
        <div
          v-for="product in activeCategoryArray"
          :key="product.name"
          class="flex flex-col gap-4 items-center w-[20.8rem] px-4 mt-10 relative"
        >
        <div v-if="product.offPercent" class="bg-gold-brand text-white w-[3.125rem] h-[3.125rem] flex items-center justify-center rounded-full absolute right-5 top-2"> - {{ product.offPercent }} %</div>
          <img
            :src="require(`@/assets/products/${product.imgSrc}`)"
            :alt="product.name"
            class="w-full rounded"
          />
          <h3 class="font-EstedadMedium mt-3">{{ product.name }}</h3>

          <div class="flex gap-4 font-RokhBold text-lg">
            <span class="text-gold-brand"
              >{{ formatPrice(product.basePrice, product.offPercent) }}
              <span class="text-xs ml-1"> تومان</span></span
            >
            <p v-if="product.offPercent > 0" class="text-gray-400">
              <span class="line-through">{{
                product.basePrice.toLocaleString()
              }}</span>
              <span class="text-xs ml-1"> تومان</span>
            </p>
          </div>

          <button
            class="font-Estedad text-xs bg-[#7F6051] text-white p-4 rounded-full"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
      <div v-else class="mt-24 pb-20 text-4xl font-RokhSemiBold" dir="rtl">
        محصولی یافت نشد :(
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TitleShow from "./TitleShow.vue";

export default {
  name: "NewestProducts",
  components: { TitleShow },
  data() {
    return {
      categories: [
        { name: "انواع قهوه", dataName: "coffes" },
        { name: "انواع پودریجات", dataName: "powders" },
        { name: "انواع سیروپ", dataName: "syrups" },
        { name: "دریپ بک", dataName: "dripBacks" },
        { name: "انواع اکسسوری", dataName: "accessories" },
      ].reverse(),
      activeCategory: "coffes",
    };
  },
  methods: {
    changeActiveCategoty(newCategory) {
      this.activeCategory = newCategory;
    },
    formatPrice(basePrice, offPercent) {
      const discountedPrice = (basePrice * (100 - offPercent)) / 100;
      return (Math.round(discountedPrice / 1000) * 1000).toLocaleString();
    },
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
    activeCategoryArray() {
      return this.products[this.activeCategory] || [];
    },
  },
};
</script>
