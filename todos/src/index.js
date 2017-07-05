
import React from "react"
import {render} from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
import AppContainer from "./container"
import appReducer from "./reducers/reducers";

let store = createStore(appReducer);

let rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    rootElement
);
