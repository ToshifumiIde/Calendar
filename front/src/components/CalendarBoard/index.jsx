//カレンダー全体(CalendarBoard)の見た目を作成するcomponent
import React from "react";
import { GridList }from "@material-ui/core";//カレンダーのレイアウトを作成
import * as styles from "./style.css";
import CalendarElement from "../CalendarElement";//個々の日付を描画するコンポーネントの取得
import { createCalendar } from "../../services/calendar";//カレンダーの日付の配列を生成するコンポーネント

const calendar = createCalendar();//関数の実行結果(配列)を格納する

const CalendarBoard = () =>{
  return (
    <div className={styles.container}>
    <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
      {calendar.map(c => (
        <li key={c.toISOString()}>
          <CalendarElement>
            {c.format("D")}
          </CalendarElement>
        </li>
      ))}
    </GridList>
    </div>
  )
};

export default CalendarBoard;