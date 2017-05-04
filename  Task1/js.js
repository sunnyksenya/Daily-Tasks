//•	Используя таймеры имитируйте движение стрелок. Для стрелок используйте макет clock.psd.
//•	Для имитации поворота используйте свойство rotate.
//•	Время часов не должно совпадать с реальным. Вы просто имитируете движение стрелки – когда секундная стрелка совершает полный оборот, минутная – делает одно смещение.
document.getElementById('sec').onclick = fStart;

var a = 6;
var b = 0;
function fStart() {
  a=a+6;
  if (a%360==6) {
    b=b+6;
    document.getElementById('sec').style.transform = 'rotate('+a+'deg)';
    document.getElementById('min').style.transform = 'rotate('+b+'deg)';
  }
  document.getElementById('sec').style.transform = 'rotate('+a+'deg)';
  console.log(a);
  setTimeout (fStart, 1000);
}
