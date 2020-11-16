//actions.jsで作成したaction
import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG,
}from "./actions";
import dayjs from "dayjs";

//予定の初期値(フォームデータとdialogの開閉の2つの状態)
const init = {
  form:{
    title:"",
    description:"",
    date:dayjs(),
    location:"",
  },
  isDialogOpen:false,
};

//予定を管理するreducer
const addScheduleReducer = (state = init , action) => {
  const { type , payload } = action;//actionを分割代入
  switch(type){
    case ADD_SCHEDULE_SET_VALUE:
      return {...state, form:{...state.form,...payload}};
    case ADD_SCHEDULE_OPEN_DIALOG:
      return {...state,isDialogOpen:true};//actionのtypeがOPEN_DIALOGの場合、stateのレスト公文とisDialogOpenのtrueを返す
    case ADD_SCHEDULE_CLOSE_DIALOG:
      return init;//actionオブジェクトのtypeプロパティがCLOSE_DIALOGの場合、initを返す
    default:
      return state;//デフォルトの場合、stateを返却
  }
};

export default addScheduleReducer;