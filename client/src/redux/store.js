//ПОДКЛЮЧЕНИЕ НАШЕГО РУТ РЕДЮСЕРА КОТОРЫЙ ОТВЕЧАЕТ ЗА ВСЕХ
import rootReducer from './reducers/rootReducer'

import {createStore,applyMiddleware} from 'redux'; // ПОДКЛЮЧИТЬ ЭПЛАЙМИДЛВАРУ И САНКИ К 16 СТРОКЕ СМОТРИ

//Это для Санок 
import thunk from 'redux-thunk';

//composeWithDevTools ПОДКЛЮЧАЕМ НАШ ДЕВТУЛС К ПРОЕКТУ
import { composeWithDevTools } from '@redux-devtools/extension';

//САГА
import createSagaMiddleware from 'redux-saga';
//САГА
import rootSaga from './sagas/rootSaga';
//сага
const sagaMiddleware = createSagaMiddleware();







//ПОДКЛЮЧЕНИЕ LOCAL STORAGE   LET STORE ДОЛЖЕН БЫТЬ ОБЯЗАТЕЛЬНО МЕЖДУ  persistedState И store.subscribe(() 
///////////////////////////////////////////////////////////////////////////////////////////
const persistedState = localStorage.getItem("reduxState") // 2. Распарсиваем
? JSON.parse(localStorage.getItem("reduxState"))
: {};


//CreateStore Создание стора где лежит наш РЕДЮСЕР который отвечает за ВСЕХ!
let store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(sagaMiddleware,thunk)))           //persistedState Положить рядом с РУТРЕДЮСЕРОМ ДЛЯ ЛОКАЛ СТОРАДЖ


store.subscribe(() => { // 1. Подписываемся и закидываем данные в localStorage
   localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
///////////////////////////////////////////////////////////////////////////////////////////////////



//для саги
sagaMiddleware.run(rootSaga);
export default store; // ЭКСПОРТ 






