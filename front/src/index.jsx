import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard";//カレンダー全体の描画

//カレンダーの日付を取得する配列を作成し、カレンダーに反映させる
//feature0

const App = () => (
<div>
  <CalendarBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
