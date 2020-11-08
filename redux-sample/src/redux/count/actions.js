//②
//①で作成したconstantsでのactionTypeを呼び出し、actionを作成する

import { INCREMENT , DECREMENT } from "./constants";

export const increment = payload => ({
  type: INCREMENT,
  payload
});
export const decrement = payload => ({
  type: DECREMENT,
  payload
});

//actionには必ずtypeが必要
//typeにはconstants.jsで作成したactionTypeを格納している。
//payload
//number型。引数で受け取った数だけcountの増加・減少を制御する
//上記actions.jsで作成したactionをreducer.jsに渡す。