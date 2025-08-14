// btnというidをもつHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  // textというidをもつHTML要素を取得し、変数に代入する
  const text = document.getElementById('text');
  document.getElementById('text').textContent = 'ボタンをクリックしました';

});
