最简单的 redux API 和 数据流演示

- 在 constants 中定义新的 action type
- 在 action 中定义新的 action 
- 在 reducers 中定义 reducers
 - 每个 reducers 都是最终的 store 中的一个字段
 
    + 注意 reducer 中如何针对每个 action 返回新 store   
    + 比如这里定义了todos, visibilityFilter 两个reducers, 最终的store 中就有这两个字段
    + 字段名取决于 combindReducers() 是的指定值
    + 如何进行嵌套 ？ 在此 combineReducers ， 嵌套是错的
    + reducers 与 express 中模块化路由的思想
    
- index 中可以对store 进行订阅，分发 action, 并获取 state

text

   
    


