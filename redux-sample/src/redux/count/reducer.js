//③reducerの作成

import { INCREMENT , DECREMENT } from "./constants";
//①で作成したactionTypeのインポート

const initState = 0;

export const count = ( state = initState , { type , payload } ) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};

//reducer
//第一引数：直前のstate
//第二引数：action(分割代入でactionのtypeとpayloadを受け取っている)
//switch
//actionのtypeに応じて新しいstateを返却する。
//あくまで返却するのは「state」。直接変更は加えない。
//今後の実際の変更の手順
//1.rootReducer.jsの中でcombineReducers()関数を用いて全てのreducerを一つにまとめる
//2.全てのreducerを一つにまとめた後、storeに格納する
//3.react-reduxのProviderを用いてstoreをreactに渡す
//4.コンポーネントからreduxにアクセスする（connect()();を用いる）