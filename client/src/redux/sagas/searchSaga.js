import { call, put, delay, takeLatest } from 'redux-saga/effects';

// worker helpers

const searchFetch = async (title) => {
  const response = await fetch(`/filter/${title}`);
  return response.json(); // ПРИХОДЯТ ДАННЫЕ С БЕКА ПОТОМ НА 15 СТРОКЕ ОН ГОВОРИТ ДЕРГАЙ ALL POSTS 
};

// worker
function* searchWorker(action) { // в action лежит type и payload 
  try {
    yield delay(2000);
    const posts = yield call(searchFetch, action.payload); // дергаю функцию которая вернёт данные и action payload
    yield put({ type: 'ALL POSTS', payload: posts }); // put = dispatch // put как диспатч тут дёргаю наш экшен ALL POSTS КОТОРЫЙ НАХОДИТСЯ В POST REDUCERE
    // yield put(allPosts(posts)); // put = dispatch
  } catch (e) {
    console.log(e);
  }
}

// watcher

//ТУТ ОТЛОВИЛИ ЭКШН  С ТИПОМ SEARCH_POST ПОТОМ ДЕРГАЕЦМ ФУНКЦИЮ СЕАРЧ ВОРКЕР
function* searchWatcher() {
  yield takeLatest('SEARCH_POST', searchWorker); // IF ACTION.TYPE="search" TO SEARCHwORKEDR(ACTION)  ------ ACTION={{ type: 'SEARCH_POST',//    payload: posts,//  }}
 
}

export default searchWatcher;
