//reduxからのstateとreduxにdispatchする関数をpropsとして提供するコンポーネント
import { connect } from "react-redux";
import CalendarBoard from "./presentation";//カレンダーを描画するコンポーネントのimport
import { createCalendar } from "../../services/calendar";//カレンダーを生成するロジックを格納している
import { addScheduleOpenDialog } from "../../redux/addSchedule/actions";//カレンダーのスケジュールに対するactionを引っ張ってきている

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog:()=> {
    dispatch(addScheduleOpenDialog());
  },
});

const mapStateToProps = state => ({
  calendar:state.calendar
});
//storeから必要な状態（state）を選択してpropsの形にする関数。
//実行時にstateが渡されるため、それをコンポーネントで使う名前で渡している。

const mergeProps = (stateProps , dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  month:stateProps.calendar,
  calendar:createCalendar(stateProps.calendar),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);