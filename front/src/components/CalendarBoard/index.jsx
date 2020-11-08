//カレンダー全体(CalendarBoard)の見た目を作成するcomponent
import React from "react";
import { GridList }from "@material-ui/core";//カレンダーのレイアウトを作成
import * as styles from "./style.css";
import dayjs from "dayjs";//dayjsの取得
import "dayjs/locale/ja";//ローカライズ
dayjs.locale("ja");//ローカライズして日本の時刻を指定

//カレンダーの日付を作成する関数//
const createCalendar = () => {
  const firstDay = dayjs().startOf("month");//dayjsによる今月の初日の取得
  const firstDayIndex = firstDay.day();//初日の曜日のインデックスを取得
  return Array(35).fill(0).map((_, i) => i - firstDayIndex);//カレンダーの日付を取得する配列
};
const calendar = createCalendar();//関数の実行結果(配列)を格納する


const CalendarBoard = () =>{
  return (
    <div className={styles.container}>
    <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
      {calendar.map(c => (
        <li>
        <div className={styles.element}>{c}</div>
        </li>
      ))}
    </GridList>
    </div>
  )
};

export default CalendarBoard;