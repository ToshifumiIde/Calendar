import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";//Typography(design)のインストール

const CalendarElement = ( { day } )=> {

  const isFirstDay = day.date() === 1;//月初をisFirstDayで定義
  const format = isFirstDay ? "M月D日" : "D";//月初ならM月D日、それ以外はD日で表示

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
        >
        {day.format(format)}
      </Typography>
    </div>
  );
};

export default CalendarElement;