import React from "react";//react表記に必要
import ReactDOM from "react-dom";//renderする際に必要
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
import { Provider } from "react-redux";//storeの情報を全てのコンポーネントで参照できる様にする
import { createStore } from "redux";//Storeの生成
import CalendarBoard from "./components/CalendarBoard/container";//カレンダー全体の描画
import rootReducer from "./redux/rootReducer";//全てのreducerをまとめたrootReducerを入手、storeに格納するために引数として使用
import Navigation from "./components/Navigation/container";
// import CalendarBoard from "./components/CalendarBoard/container";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

dayjs.locale("ja");

const store = createStore(rootReducer);//createStore関数の引数にrootReducerを渡すことで、storeを生成する。これでstoreを使える。

//DatePickerと切替の実装
//feature1

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
    </MuiPickersUtilsProvider>
  </Provider>
  );


ReactDOM.render(<App />, document.getElementById("root"));
