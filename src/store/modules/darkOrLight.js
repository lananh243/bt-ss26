const changeColor = {
  state: {
    isDarkMode: false, // Mặc định là chế độ sáng
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode; // Chuyển đổi trạng thái
    },
    setDarkMode(state, value) {
      state.isDarkMode = value; // Thiết lập trạng thái sáng/tối
    },
  },
};
export default changeColor;
