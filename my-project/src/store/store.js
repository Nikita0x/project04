import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 50,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default store;
