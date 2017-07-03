
## React-Redux 中的两个核心概念：

- reducer: 根据 action 返回 new state, 即不可见的store;

    - 相关的API： createStore, combindReducers 
- container: 由 事件 dispatch action;
    - 相关的API： connect, dispatch

## API
### createStore
### combindReducers
### connect
### dispatch
### Provider

## 连接
- 由components 到 container: connect
    - mapStateToProps
    - mapDispatchToProps
- 由reducer 到 store: createStore
- store 与 container 绑定： Provider

## 入口文件
```javascript
// 创建store
const store = createStore(
    reducers
);

render(
    // Provider 连接 reducers 与 container 
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
```

## 目录结构
- actionCreater: 创建action
- components
- container: 容器组件
- reducers

### actionCreater
actionCreater 返回表示 action 的对象；
```javascript
export const setIncr = (num) => ({
    type: INCR_NUM,
    num
});
export const setDecr = (num) => ({
    type: DECR_NUM,
    num
});
```

### components
定义展示型组件；
```javascript
class App extends Component {
    render() {
        const current = this.props.current;
        const onClickCounter = this.props.onClickCounter;
        return (
            <div>
                <div>Current: {current}</div>
                <button onClick={e => onClickCounter('incr', current)}>+1</button>
                <button onClick={e => onClickCounter('decr', current)}>-1</button>
            </div>
        )
    }
}
```

### container
定义容器组件；
```javascript
const mapStateToProps = (state) => {
    return {
        current: state.counter,
    }
};

const mapDispatchToProps = (dispatch) => ({
    onClickCounter: (type, numer) => {
        if(type === 'incr') {
            dispatch(setIncr(numer));
        } else {
            dispatch(setDecr(numer));
        }
    }
});

// App
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
```

### reducer
```javascript
const counter = (state = 1, action) => {
    switch (action.type) {

        case INCR_NUM:
            return action.num + 1;

        case DECR_NUM:
            return action.num - 1;

        default:
            return state;
    }
};
```
