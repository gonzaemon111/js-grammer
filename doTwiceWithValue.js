// 関数に値を渡しつつ2回実行する関数！！
function doTwiceWithValue(func) {
  func('Hello!'); // 1回目！
  func('I am here!!!'); // 2回目！
}

// 受け取ったmessageを表示するだけの関数を渡す
doTwiceWithValue(function(message) {
  console.log(message);
});
