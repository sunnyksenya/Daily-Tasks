// var a = {
//   "name": "MacBook Air",
//   "producer": "Apple",
//   "display": 11,
//   "year": 2013
// }
// a.year = 2014;
// delete a.year;
// a.newYear = 2015;
// console.log(a);
//
// a.mas = [3,4,5,6];
// a.assoc = {
//   "weight": 1.2,
//   "color": "silver"
// }
// console.log(a.mas[2]);
// // console.log(a[mas][2]);
// console.log(a);
//
// var b = {
//   "money": 1000,
//   "kurs_rub": 5,
//   "kurs_dollar": 0.3
// }
// b.moneyToRub = function() {
//   console.log(this.money * this.kurs_rub);
// }
// b.moneyToRub();
//
// b.moneyToDollar = function() {
//   console.log(this.money * this.kurs_dollar);
// }
// b.moneyToDollar();

var hero = {
  "name": "Hero",
  "xp": 50,
  "img": "http://orig00.deviantart.net/324a/f/2015/299/a/4/world_of_tanks_icon___wz111_by_adyshor37-d9dzh53.png",
  "damage": [3, 7, 12],
  "hit": function(a) {
    if (a==1) return 0;
    if (a==2 || a==3) return this.damage[0];
    if (a==4 || a==5) return this.damage[1];
    if (a==6) return this.damage[2];
  }
}
var hero2 = {
  "name": "Hero2",
  "xp": 60,
  "img": "http://fc01.deviantart.net/fs71/f/2014/029/4/3/world_of_tanks_by_goldenarrow253-d748j2l.png",
  "damage": [1, 5, 9],
  "hit": function(a) {
    if (a==1) return 0;
    if (a==2 || a==3) return this.damage[0];
    if (a==4 || a==5) return this.damage[1];
    if (a==6) return this.damage[2];
  }
}
function kubik () {
  var rand = 0.5 + 6*Math.random();
  rand = Math.round(rand);
  return rand;
}
 init();//начальный вывод
function init() {
  document.querySelector('.hero1 h2').innerHTML = hero.name;
  document.querySelector('.hero1 .xp').innerHTML = hero.xp;
  document.querySelector('.hero1 img').src = hero.img;

  document.querySelector('.hero2 h2').innerHTML = hero2.name;
  document.querySelector('.hero2 .xp').innerHTML = hero2.xp;
  document.querySelector('.hero2 img').src = hero2.img;
}
document.querySelector('#h1udar').onclick = hit1;
function hit1() {
  document.querySelector('#h1udar').onclick = null;
  document.querySelector('#h2udar').onclick = hit2;
  var kub = kubik ();
  console.log(kub);
  hero2.xp = hero2.xp - hero.hit(kub);
  if(hero.xp <= 0) {
    alert('The game is over! Hero2 is the winner!');
    window.location.reload();
  }
  document.querySelector('.hero2 .xp').innerHTML = hero2.xp;
}

document.querySelector('#h2udar').onclick = hit2;
function hit2() {
  document.querySelector('#h2udar').onclick = null;
  document.querySelector('#h1udar').onclick = hit1;
  var kub = kubik ();
  console.log(kub);
  hero.xp = hero.xp - hero.hit(kub);
  if(hero.xp <= 0) {
    alert('The game is over! Hero1 is the winner!');
    window.location.reload();
  }
  document.querySelector('.hero1 .xp').innerHTML = hero.xp;
}
