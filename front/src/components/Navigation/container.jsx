import { connect } from "react-redux";
import Navigation from "./presentation";//Navigationの見た目を担うpresentation部分
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from "../../services/calendar";//calendar.jsで作成した関数のロジックを取得
import { calendarSetMonth } from "../../redux/calendar/actions";


const mapStateToProps = state =>({calendar:state.calendar});

const mapDispatchToProps = dispatch =>({setMonth:month => {
  dispatch(calendarSetMonth(month))
}});
//オブジェクトを返却
//オブジェクトの中身はsetMonthメソッド
//メソッドの中身は、monthを引数にcalendarSetMonthを実行し、dispatchを実行

const mergeProps = (stateProps , dispatchProps) => ({
  //reduxのstate => dayjs
  month:getMonth(stateProps.calendar),
  setNextMonth:()=> {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth:()=> {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
  },
  setMonth: dayObj => {
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
  }
});
//オブジェクトを返却
//中身はsetNextMonthメソッドとsetPreviousメソッド


export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Navigation);
