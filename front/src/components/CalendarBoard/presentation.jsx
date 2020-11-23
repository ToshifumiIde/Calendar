//カレンダー全体(CalendarBoard)の見た目を作成するcomponent
import React from "react";
import { 
  GridList,
  Typography,
}from "@material-ui/core";//GridListはカレンダーのレイアウトを作成、TypoGraphyはデザインを担当
import * as styles from "./style.css";//cssのインポート
import CalendarElement from "../CalendarElement";//個々の日付を描画するコンポーネントの取得

const days = ["日","月","火","水","木","金","土"];

const CalendarBoard = ({
  calendar,
  month,
  openAddScheduleDialog,
  openCurrentScheduleDialog,
}) => {
  return (
    <div className={styles.container}>
      <GridList 
        cellHeight="auto"
        className={styles.grid}
        cols={7}
        spacing={0}
        >
          {days.map( d => (
            <li key={d}>
              <Typography
                align="center"
                className={styles.days}
                color="textSecondary"
                component="div"
                variant="caption"
              >
              {d}
              </Typography>
            </li>
          ))}
          {calendar.map( ({date , schedules}) => (
            <li 
              key={date.toISOString()}
              onClick={()=> openAddScheduleDialog(date)}
            >
              <CalendarElement 
                day={date}
                month={month}
                schedules={schedules}
                onClickSchedule={openCurrentScheduleDialog}
              />
            </li>
          ))}
      </GridList>
    </div>
  )
};

export default CalendarBoard;