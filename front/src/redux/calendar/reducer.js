//action.jsからactionを受け取る
import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions";
import { formatMonth } from "../../services/calendar";

const day = dayjs();

// const init = {
//   year:day.year(),
//   month:day.month() + 1,
// };//初期値に関してはservices/calendar.jsにてロジックを作成したので、以下の様に書き換えが可能。
const init = formatMonth(day);

const calendarReducer = (state = init , action ) => {
  const { type , payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state; 
  }
};
//actionのtypeがCALENDAR_SET_MONTHの時に、payloadを次のstateに返す


export default calendarReducer;