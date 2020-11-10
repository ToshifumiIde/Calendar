import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard";//カレンダー全体の描画
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

//日付と月を判別するロジックをリファクタリング（完了）
//feature1

const App = () => (
<div>
  <CalendarBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
