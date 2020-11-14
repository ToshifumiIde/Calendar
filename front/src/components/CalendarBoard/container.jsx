import { connect } from "react-redux";//Viewにconnectするためのreact-reduxの関数
import CalendarBoard from "./presentation";//CalendarBoardの見た目を担当するコンポーネント
import { createCalendar } from "../../services/calendar";//カレンダーを生成するロジック

const mapStateToProps = state => ({
  calendar:state.calendar,
});
//storeから必要な状態(state)を選択してpropsの形にする関数。
//実行時にstateが渡されるため、それをコンポーネントで使う名前で渡している。

const mergeProps = stateProps => ({
  calendar:createCalendar(stateProps.calendar)
});
//mapStateToPropsで生成されたpropsとmapDispatchToPropsで生成されたpropsを引数にとり、コンポーネントで使う形に整形して渡す関数

export default connect(mapStateToProps,null,mergeProps)(CalendarBoard);