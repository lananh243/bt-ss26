const changeLanguage = {
  state: {
    language: "vi", // Default to Vietnamese
  },
  mutations: {
    setLanguage(state, newLanguage) {
      state.language = newLanguage; // Update language state
    },
  },
  getters: {
    currentLanguage: (state) => state.language,
  },
};
export default changeLanguage;
