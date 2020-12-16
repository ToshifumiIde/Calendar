import React from "react";//react表記に必要
import ReactDOM from "react-dom";//renderする際に必要
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
import { Provider } from "react-redux";//storeの情報を全てのコンポーネントで参照できる様にする
import { createStore } from "redux";//Storeの生成
import rootReducer from "./redux/rootReducer";//全てのreducerをまとめたrootReducerを入手、storeに格納するために引数として使用
import Navigation from "./components/Navigation/container";
// import CalendarBoard from "./components/CalendarBoard/container";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CalendarBoard from "./components/CalendarBoard/container";//カレンダー全体の描画
import AddScheduleDialog from "./components/AddScheduleDialog/container";

dayjs.locale("ja");

import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";

//createStore関数の引数にrootReducerを渡すことで、storeを生成する。これでstoreを使える。
const store = createStore(rootReducer);

//サーバーからの予定取得（途中）
//feature1

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
  );

export default App;

// ReactDOM.render(<App />, document.getElementById("root"));
