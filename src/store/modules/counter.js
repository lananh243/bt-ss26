const countState = {
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
};

export default countState;
