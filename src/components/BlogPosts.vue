<template>
  <div class="w-full bg-background-color-darker pt-10 pb-16">
    <div class="w-10/12 mx-auto relative">
      <TitleShow
        title="مقالات آموزشی"
        subtitle="مقالات و آموزش های خانه قهوه چالـــوس"
        :hasLine="true"
        lineColor="#CAC7BD"
      />
      <img
        src="@/assets/elements/element1.png"
        alt="element 1"
        class="absolute left-44 top-5"
      />
      <img
        src="@/assets/elements/element1.png"
        alt="element 1"
        class="absolute bottom-[-1.2rem] right-36"
      />
    </div>
    <div class="flex mt-16 justify-center gap-10 flex-wrap">
      <BlogPost
        v-for="(post, index) in posts"
        :title="post.title"
        :content="post.content"
        :img="post.img"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TitleShow from "./TitleShow.vue";
import BlogPost from "./BlogPost.vue";
export default {
  components: { TitleShow, BlogPost },
  name: "BlogPosts",
  computed: {
    ...mapState({
      posts: (state) => state.posts,
    }),
  },
};
</script>
