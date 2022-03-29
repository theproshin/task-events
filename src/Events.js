/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let btn = document.createElement('button');
    let txt = document.createTextNode('Удали меня');
    btn.appendChild(txt);
    document.body.append(btn);
    btn.addEventListener('click', () => {
        document.querySelector('button').remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let innerLi = '';
    arr.forEach((element) => {
        innerLi += `<li>${element}</li>`;
    });
    let ul = document.createElement('ul');
    ul.innerHTML = innerLi;
    document.body.append(ul);
    document.querySelector('ul').addEventListener(
        'mouseover',
        function (event) {
            if (event.target && event.target.nodeName === 'LI') {
                event.target.setAttribute('title', event.target.textContent);
            }
        },
        true,
    );
    document.querySelector('ul').addEventListener(
        'mouseout',
        function (event) {
            if (event.target && event.target.nodeName === 'LI') {
                event.target.removeAttribute('title');
            }
        },
        true,
    );
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let countClick = 0;
    let a = document.createElement('a');
    let txt = document.createTextNode('tensor');
    a.setAttribute('href', 'https://tensor.ru/');
    a.appendChild(txt);
    document.body.append(a);

    a.addEventListener('click', function (event) {
        countClick += 1;
        if (countClick == 1) {
            let elm = document.querySelector('a');
            elm.textContent += ` ${elm.href}`;
            event.preventDefault();
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {}
