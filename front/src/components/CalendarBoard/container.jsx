import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

const mapStateToProps = state => ({
  calendar:state.calendar
});
//storeから必要な状態（state）を選択してpropsの形にする関数。
//実行時にstateが渡されるため、それをコンポーネントで使う名前で渡している。

const mergeProps = stateProps => ({
  calendar:createCalendar(stateProps.calendar)
});

export default connect(mapStateToProps,null,mergeProps)(CalendarBoard);