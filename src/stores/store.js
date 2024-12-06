import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      products: {},
    };
  },
  mutations: {
    productsFetched(state, payload) {
      state.products = payload;
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
  },
});
