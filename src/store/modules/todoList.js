const todoListModule = {
  state: {
    jobs: [
      { id: 1, name: "Nấu ăn", status: true },
      { id: 2, name: "Ăn", status: true },
    ],
  },
  mutations: {
    addJob(state, payload) {
      state.jobs.push(payload);
    },
  },
};
export default todoListModule;
