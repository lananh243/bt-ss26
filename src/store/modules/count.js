const countModule = {
  state: {
    count: 0,
  },
  //   nơi xử lý các hàm đồng bộ
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
};

export default countModule;
