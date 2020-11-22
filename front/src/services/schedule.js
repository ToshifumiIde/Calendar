//カレンダーの予定のロジックを実装(その月の配列をmapし、それぞれの日に「日付が一致する予定」だけの配列を追記する)

import { isSameDay } from "./calendar";

export const setSchedules = (calendar , schedules) => 
  calendar.map( c => ({
    date:c,
    schedules:schedules.filter(e => isSameDay(e.date , c)),
}));