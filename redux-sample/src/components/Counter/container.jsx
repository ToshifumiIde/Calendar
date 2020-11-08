//ロジックに責任を持つ、container.jsxの作成
import { connect } from "react-redux";
import { increment , decrement } from "../../redux/count/actions";
import Counter from "./presentation";

const mapStateProps = ({ count }) => ({ count });
//const mapStateProps = state => {
//  return {count : state.count};
//}と同じ

const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  },
});
//引数：dispatch
//必要なactionだけをdispatchする関数を定義し、propsとして渡す


export default connect(
  mapStateProps,
  mapDispatchProps,
)(Counter);
//react-reduxのconnectを用いて、mapStateProps関数とmapDispatchProps関数をCounterコンポーネントと接続させる
//第一引数：storeからどのstateを引っ張ってくるか定義する
//第二引数：どんなdispatcherをpropsに渡すか定義する