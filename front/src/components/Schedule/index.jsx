//日付の中に組み込まれる予定の見た目を作成（表示させているのみ）

import React from "react";
import * as styles from "./style.css";

const Schedule = ({schedule , onClickSchedule}) => {
  return( 
    <div 
      className={styles.schedule}
      onClick={e => onClickSchedule(schedule,e)}
      >
      {schedule.title}
    </div>
  ) 
};
export default Schedule;