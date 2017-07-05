
import {createStore, applyMiddleware} from "redux"

import reducers from "./reducers/index"
import {addTodo} from "./action"
import {logger, crashReporter, middlewareOne, middlewareTwo, middlewareThree} from './middleware'


// 由reducers 创建 store
let store = createStore(
  reducers,
  applyMiddleware(logger, middlewareOne, middlewareTwo, middlewareThree)
);

// initial store
console.log('initial', store.getState());

// 订阅
store.subscribe(() => {
  console.log("subscribe store", store.getState());
});


// 分发不同的actionn 观察 store 的变化
// 新建
store.dispatch(addTodo("learn about action"));

