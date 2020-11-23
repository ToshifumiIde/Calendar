//カレンダーの日付の見た目を生成する
import React from "react";//reactパッケージのインストール
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";//Typography(design)のインストール
import dayjs from "dayjs";
import { 
  isSameDay,
  isSameMonth,
  isFirstDay,
  getMonth,
} from "../../services/calendar";//リファクタリングを実施
import Schedule from "../Schedule";

const CalendarElement = ({ 
  day,
  month,
  schedules,
  ...props
  })=> {
  const today = dayjs();
  //今月以外をグレーダウン
  // ①const isCurrentMonth = day.month() === today.month();リファクタリングして、下記内容に変更
  // ②const isCurrentMonth = isSameMonth(day , today);
  // service/calendar.jsで作成したロジックを使用
  // さらに、前月と翌月の区別をつけるためのスタイルを付与するために、下記内容に変更③
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary" ;
  
  //今日の日付を取得
  // const compareFormat = "YYYYMMDD";
  //月初ならM月D日、それ以外はD日で表示
  const format = isFirstDay(day) ? "M月D日" : "D";
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
      <div className={styles.schedules}>
        {schedules.map(e => (
          <Schedule 
            key={e.id}
            schedule={e}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarElement;