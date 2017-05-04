// Изображение товаров
// 	•	Создайте HTML и CSS верстку, которая аналогична изображению ниже. Есть главное изображение большого размера. Ниже него в строку идут изображения маленького размера, причем большое изображение – совпадает с первым маленьким изображением.
//
// Перечеркнутый квадрат – обозначение изображения.
// 	•	Добавьте JS код, который будет выполнять следующее: при клике на миниатюре изображения, данное изображение будет дублироваться в большой картинке. Т.е. кликаем на вторую миниатюру, большое изображение становится таким, как та миниатюра, по которой кликнули. Сами миниатюры не меняются.
// Как реализовать
// 	•	Добавьте всем миниатюрам одинаковый класс.
// 	•	Добавьте событие на клик для изображений выбранных по классу.
// 	•	При клике на миниатюре в this попадает то изображение, по которому кликнули.
// 	•	Нам необходимы вычитать его свойство src.
// 	•	Получить большое изображение по его id.
// 	•	Изменить большому изображению src на полученное при клике по миниатюре.
// Усложняем
// Если вы сделали предыдущее задание – это круто. У вас есть готовый продукт. Дальнейшее выполнение задания может привести к резкому увеличению уровня IQ!
// 	•	При клике на миниатюру добавьте вокруг нее рамку, чтобы пользователь понимал, какая картинка активна в текущий момент.  Соответственно рамка должна быть в один момент времени у одного изображения. Для этого почитайте раз , два
// 	•	Оставьте в HTML только блоки, удалив изображения. Создайте в JS массив изображений. При запуске страницы, переберите массив. Все изображения массива занесите в миниатюры. Первое изображение массива, помимо миниатюры сделайте большим. Пример массива:
// var a = ['one.png', 'two.jpg', 'olen.png', 'golen.png']
document.getElementById('smallpicture').onclick = fClick;

function fClick(event) {
  var a = event.target.src;
  console.dir(event.target);
  document.getElementById('bigpicture').src = a;
}
