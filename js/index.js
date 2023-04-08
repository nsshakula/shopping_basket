//объявляю переменные, нахожу по классу, достаю текст, перевожу в число
const stegosaurus = +document.querySelector(".js-stegosaurus").textContent;
const brontosaurus = +document.querySelector(".js-brontosaurus").textContent;
const triceratops = +document.querySelector(".js-triceratops").textContent;
const ankylosaurus = +document.querySelector(".js-ankylosaurus").textContent;

//меняю значение на сумму
const sum = stegosaurus + brontosaurus + triceratops + ankylosaurus;
document.querySelector(".js-result__number").textContent = sum;

//вызываю функцию, возвращаю %
function showPercent(number) {
  return number * 0.8;
}

//объявляю переменную с параметром класса кнопки
const button = document.querySelector(".button");

//добавляю событие - по клику срабатывает функция
button.addEventListener("click", function () {
  const discountStegosaurus = showPercent(stegosaurus); //объявляю новую переменную, записываю в неё результат функции
  const totalStegosaurus = document.querySelector(".js-stegosaurus"); //объявляю новую переменную, вешаю на класс
  totalStegosaurus.textContent = discountStegosaurus; //меняю значение на результат вычисления

  const discountBrontosaurus = showPercent(brontosaurus);
  const totalBrontosaurus = document.querySelector(".js-brontosaurus");
  totalBrontosaurus.textContent = discountBrontosaurus;

  const discountTriceratops = showPercent(triceratops);
  const totalTriceratops = document.querySelector(".js-triceratops");
  totalTriceratops.textContent = discountTriceratops;

  const discountAnkylosaurus = showPercent(ankylosaurus);
  const totalAnkylosaurus = document.querySelector(".js-ankylosaurus");
  totalAnkylosaurus.textContent = discountAnkylosaurus;

  const discountSum = showPercent(sum);
  const totalSum = document.querySelector(".js-result__number");
  totalSum.textContent = discountSum;
});
