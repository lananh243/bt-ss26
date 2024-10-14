const randomNumber = {
  state: {
    number: [],
  },
  mutations: {
    generateRandom(state) {
      const randomNum = Math.floor(Math.random() * 100);
      state.number.push(randomNum);
    },
  },
};

export default randomNumber;
