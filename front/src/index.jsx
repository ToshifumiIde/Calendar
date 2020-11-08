import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard";//カレンダー全体の描画
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

//リファクタリングの実行
//カレンダーの日付を取得する配列を作成し、カレンダーに反映させる
//feature1

const App = () => (
<div>
  <CalendarBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
