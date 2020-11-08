import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard";//カレンダー全体の描画

const App = () => (
<div>
  <CalendarBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
