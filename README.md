# Чекпоинт: асинхронность и AJAX

## Задачи

* Определить синхронный и асинхронный код
* Описать процесс коммуникации с сервером
* Обработка данных, которые вернул `fetch`

## Упражнения

Ответы к упражнению собери в файле  `answers.js`. Перед каждым ответом укажи номер вопроса, на который дается ответ.

Постарайся к каждому ответу приложить описание хода своих мыслей: как ты пришел именно к такому ответу?

### Упражнение 1

Есть следующий код со списком консоль.логов:

```javascript
console.log(1)

fetch('https://api.chucknorris.io/jokes/random')
  .then( res => res.json() )
  .then( data => {
    console.log(2) 
  })

console.log(3)
```

В каком порядке будут выведены логи в консоль?

### Упражнение 2

**Вопрос 2.1** Что будет выведено в консоль, когда выполнится функция `fetchData`?

```javascript
function fetchData(){
  let data = fetch('https://api.chucknorris.io/jokes/random')
    .then( res => res.json() )
    .then( res => res )
  console.log(data)	
}

fetchData();
```
**Вопрос 2.2** Что будет в консоле после выполнения следующего кода?

```javascript
function fetchData(){
  let data = fetch('https://api.chucknorris.io/jokes/random')
    .then( res => res.json() )
    .then( json => console.log(json) )
}

fetchData();
```

**Вопрос 2.3** Что будет в консоле после выполнения следующего кода?

```javascript
function fetchData(){
    let data = fetch('https://api.chucknorris.io/jokes/random')
      .then( res => res.json() )
      .then( console.log )
}

fetchData();
```

### Упражнение 3

Своими словами: что означает "асинхронность"?

### Упражнение 4

Что в следующем кода означает строка, выделенная звездочкой? Какую задачу она выполняет?

```javascript
fetch('https://api.chucknorris.io/jokes/random')
  .then( res => res.json() ) //*
  .then( data => {
    console.log(data) 
  })

```


### Упражнение 5

Исправь ошибки в файле `index.js`, чтобы на странице выводились шутки про Чака Норриса.

⚠️ Нельзя изменять файл `index.html`.  

После исправления укажи какие именно ошибки были обнаружены.