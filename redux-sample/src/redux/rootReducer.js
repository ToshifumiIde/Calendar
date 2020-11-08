//④全てのreducerをrootReducerに格納する
import { combineReducers } from "redux";//combineReducers関数の入手
import { count } from "./count/reducer";//countのreducerの入手

const rootReducer = combineReducers( {count} );

export default rootReducer;


//rootReducer.jsにて、全てのreducerを引数として渡し、rootReducerに格納している
//次にstoreに全てのrootReducerを格納する