import { createStore } from "vuex";
import countModule from "./modules/count";
import todoListModule from "./modules/todoList";

import listProduct from "./modules/product";
import randomNumber from "./modules/random";
import changeTitle from "./modules/title";
import changeColor from "./modules/darkOrLight";
import changeLanguage from "./modules/language";
import profileUser from "./modules/informationUser";
import infoUser from "./modules/listUser";
import countState from "./modules/counter";

const store = createStore({
  modules: {
    countModule,
    todoListModule,
    infoUser,
    listProduct,
    randomNumber,
    changeTitle,
    changeColor,
    profileUser,
    changeLanguage,
    countState,
  },
});

export default store;
