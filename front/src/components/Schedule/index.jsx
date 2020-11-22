//日付の中に組み込まれる予定の見た目を作成（表示させているのみ）

import React from "react";
import * as styles from "./style.css";

const Schedule = ({schedule}) => {
  return( 
    <div className={styles.schedule}>
      {schedule.title}
    </div>
  ) 
};
export default Schedule;