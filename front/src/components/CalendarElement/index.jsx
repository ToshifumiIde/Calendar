import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";//Typography(design)のインストール
import dayjs from "dayjs";
import { isSameDay , isSameMonth , isFirstDay } from "../../services/calendar";//リファクタリングを実施

const CalendarElement = ( { day } )=> {
  const today = dayjs();
  //今月以外をグレーダウン
  // const isCurrentMonth = day.month() === today.month();リファクタリングして、下記内容に変更
  const isCurrentMonth = isSameMonth(day , today);//service/calendar.jsで作成したロジックを使用
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary" ;
  
  //今日の日付を取得
  // const compareFormat = "YYYYMMDD";
  const format = isFirstDay(day) ? "M月D日" : "D";//月初ならM月D日、それ以外はD日で表示
  // const isToday = day.format(compareFormat) === today.format(compareFormat);
  const isToday = isSameDay(day, today);//service.calendar.jsで作成したロジックを使用

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
        color={textColor}
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;