//rootReducerはdispatchされたpayloadに基づき
//各々のReducerにpayloadが格納されるが
//「全てのreducerを1つにまとめたreducer」をrootReducerと呼ぶ
import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";//カレンダーのreducerをインポート
import addScheduleReducer from "./addSchedule/reducer";//スケジュールのreducerをインポート
import schedulesReducer from "./schedules/reducer";//DIalogのreducerをインポート
import currentScheduleReducer from "./currentSchedule/reducer";

const rootReducer = combineReducers({
  calendar:calendarReducer,
  addSchedule:addScheduleReducer,
  currentSchedule:currentScheduleReducer,
  schedules:schedulesReducer,
});

export default rootReducer;

//combineReducersの引数は{[state]:[reducer]}という形で対応付けしていく