//⑤rootReducerをstoreに格納し、Providerにstoreを渡すことでコンポーネント内で呼び出せる様にする

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";//Providerでwrapするために入手
import { createStore } from "redux";//storeを生成するために入手
import rootReducer from "./redux/rootReducer";//作成した全rootReducer
import Counter from "./components/Counter/container";//Counterコンポーネント

const store = createStore(rootReducer);
//createStore関数を用いて、全てのrootReducerをstoreに格納する

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
//<Provider store={store}></Provider>でwrapすることで、中のコンポーネントでstoreを使える様にする

ReactDOM.render(<App />, document.getElementById("root"));