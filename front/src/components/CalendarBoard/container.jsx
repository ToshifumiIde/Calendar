//reduxからのstateとreduxにdispatchする関数をpropsとして提供するコンポーネント
import { connect } from "react-redux";
import CalendarBoard from "./presentation";//カレンダーを描画するコンポーネントのimport
import { createCalendar } from "../../services/calendar";//カレンダーを生成する「ロジック」を格納している
import { setSchedules } from "../../services/schedule";//予定の配列を生成する「ロジック」を格納している
import { 
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";//カレンダーのスケジュールに対するactionを引っ張ってきている

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: d => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({date:d}));
  },
});

const mapStateToProps = state => ({
  calendar:state.calendar,
  schedules:state.schedules,
});
//storeから必要な状態（state）を選択してpropsの形にする関数。
//実行時にstateが渡されるため、それをコンポーネントで使う名前で渡している。

const mergeProps = (stateProps , dispatchProps) => {
  const {
    calendar:month,
    schedules:{items:schedules},
  } = stateProps;

  const calendar = setSchedules(createCalendar(month),schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);