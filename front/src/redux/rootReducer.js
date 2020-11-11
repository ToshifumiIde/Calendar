//rootReducerはdispatchされたpayloadに基づき
//各々のReducerにpayloadが格納されるが
//「全てのreducerを1つにまとめたreducer」をrootReducerと呼ぶ
import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

const rootReducer = combineReducers({calendar:calendarReducer});

export default rootReducer;

//combineReducersの引数は{[state]:[reducer]}という形で対応付けしていく