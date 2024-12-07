import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      products: {},
      posts: [],
    };
  },
  mutations: {
    productsFetched(state, payload) {
      state.products = payload;
    },
    postsFetched(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        commit("productsFetched", data);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchBlogPosts({ commit }) {
      try {
        const res = await fetch("http://localhost:5000/blogPosts");
        const data = await res.json();
        commit("postsFetched", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
