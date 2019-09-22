// 関数を2回実行する関数！！
function doTwice(func) {
  func(); // 1回目！
  func(); // 2回目！
}

// あいさつを2回実行する
doTwice(function() {
  console.log('Hello!');
});
