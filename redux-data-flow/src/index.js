
import {createStore} from "redux"
import reducers from "./reducers/index"
import {addTodo, toggleTodo, setVisibilityFilter} from "./action"
import {VisibilityFilters} from './constants/index'

// 由reducers 创建 store
let store = createStore(reducers);

// initial store
console.log('initial', store.getState());

// 订阅
store.subscribe(() => {
  console.log("store", store.getState());
});


// 分发不同的actionn 观察 store 的变化
// 新建
store.dispatch(addTodo("learn about action"));
// toggle
store.dispatch(toggleTodo(0))

// filter
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))











