//2 ФАЙЛ
// ДЛЯ ОБЪЕДЕНЕНИЕ ВСЕХ РОУТЕРОВ
import registerReducer from "./registerReducer";
import postReducer from "./postReducer";

//combineReducers КОМБАЙН СОБИРАЕТ ВСЕ РЕДЬЮСЕРЫ ВМЕСТЕ
import { combineReducers } from "redux";

//combineReducers КОМБАЙН СОБИРАЕТ ВСЕ РЕДЬЮСЕРЫ ВМЕСТЕ
const rootReducer = combineReducers({
  register: registerReducer,
  post: postReducer,
});

export default rootReducer;
