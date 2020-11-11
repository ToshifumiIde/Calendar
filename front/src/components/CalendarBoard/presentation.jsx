//カレンダー全体(CalendarBoard)の見た目を作成するcomponent
import React from "react";
import { 
  GridList,
  Typography,
}from "@material-ui/core";//GridListはカレンダーのレイアウトを作成、TypoGraphyはデザインを担当
import * as styles from "./style.css";
import CalendarElement from "../CalendarElement";//個々の日付を描画するコンポーネントの取得
// import { createCalendar } from "../../services/calendar";//カレンダーの日付の配列を生成するコンポーネント

// const calendar = createCalendar();//関数の実行結果(配列)を格納する
const days = ["日","月","火","水","木","金","土"];

const CalendarBoard = ({ calendar }) => {
  // console.log(calendar);
  return (
    <div className={styles.container}>
      <GridList 
        className={styles.grid}
        cols={7}
        spacing={0}
        cellHeight="auto">
          {days.map( d => (
            <li key={d}>
              <Typography
                className={styles.days}
                color="textSecondary"
                align="center"
                variant="caption"
                component="div"
              >
              {d}
              </Typography>
            </li>
          ))}
          {calendar.map(c => (
            <li key={c.toISOString()}>
              <CalendarElement day={c} />
            </li>
          ))}
      </GridList>
    </div>
  )
};

export default CalendarBoard;