//Dialogでのschedule登録（予定管理）のReduxに紐づくactions

//contains(typeに設定するactionの中身)
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";

//actions
export const schedulesAddItem = payload => ({
  type:SCHEDULES_ADD_ITEM,
  payload,
});