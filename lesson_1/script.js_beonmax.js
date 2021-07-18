"use strict";/* СТРОГШИЙ РЕЖИМ ES6*/

/*  Переменнве */
var leftBorderWidyh = 1;
{let second = 2;
 /* console.log(second); */
}
const pi = 3.14;

             /* ----- ТИПЫ ДАННЫХ -------  */

var number = 5; /* число ,infinity(деление на ноль),notanambar NaN(не подлежит математической логике )  */

var string = "Hello";  /* строка*/
var sym = Symbol();     /* символ*/
var boolean = true;     /* логическое*/
null;                   /*  философские (В коде это не существует)*/
undefined;              /*философские (существует но ничего не обозначает)*/
var obj = {};      /*{свойства,метод}; Объект*/

let person = {
  name: "Vit",
  age: 50,
  isMarried: false 
};
/*
console.log(person.name);
console.log(person["age"]); 

let arr = ['5','8','6'];
console.log(arr[1]);
*/

   /* ----------- ОБЩЕНИЕ С ПОЬЗОВАТЕЛЕМ ----------------  */

/* alert("Hellow");
let answer = confirm("Ты здесь?");
console.log(answer); */
/* let answer = prompt("Есть ли вам 18?", "Да");*/
/*console.log(answer);*/
/* console.log(typeof(arr));typeof Проверка типа данных 
console.log(typeof (answer));
console.log(answer);*/

                /* ----------- ОПЕРАТОРЫ ----------------  */
  
                /* конкатинация */
 /*               
console.log("Меня зовут" + " Виталий");
console.log(5 + "Виталий");  /*строка*/ 

/* let answer = +prompt("Есть ли вам 18?", "Да");/*числовое значение */

                    /* Инкримент */
  /*                  
let incr = 10;
    incr++;
   console.log(incr);/* 11 */
  
                    /* Декримент */
 /*                   
 let decr = 10;
 decr--;
 console.log(decr); /* 9 */

 /*Префиксная форма (ИЗМЕНЁНОЕ ЗНАЧЕНИЕ) */
/*
 let incr = 10,
     decr = 10;
 console.log(++incr);/* 11 */
 /* console.log(--decr);/* 9 */

     /* Посфиксная форма (СТАРОЕ ЗНАЧЕНИЕ) */
let incr = 10,
  decr = 10;
/*console.log(incr++);/* 10 */
/*console.log(decr--);/* 10 */

   /* % остаток от деления */
 /*console.log(5%2);/* 1 */  

    /*Сравниние по значению   == */
/* console.log("2" == 2); /* true */

  /*Сравнение по типу данных   === */
/* console.log("2" === 2); /* false */

             /* && оператор (И) */
 /*            
let isChecked = true,
     isClose = true;
console.log(isChecked && isClose); /* true */


            /* || оператор (ИлИ) */
/*            
let isChecked = true,
  isClose = false;
console.log(isChecked || isClose); /* true */

/*let isChecked = false,
  isClose = false;
/*console.log(isChecked || isClose); /* false */

               /* Отрицание  !  */
let isChecked = false,
  isClose = false;
console.log(isChecked || !isClose); /* true */

                 /*  настройка Git */

/* 1)git init */
/* 2)git config --global user.name "Vitaly" */
/*3)git config --global user.email brynzav2@gmail.com */
/*4) git status */
/*5) git add .  Добавить все файлы */
/*5a)git add Css2  Добавить конкретный файл файлы  */
/*6) git commit  -m"Добавил 5 команд гита" */
/*   git clear сбросить все изминения до предыдущего комита */
/*7) git log    просмотр кoмитов */
/*8) git remote add origin https://github.com/iarilo/BiOnMax-lesson-2021.git Добавляем строку из созданного репозитория */
/*9) git push -u origin master    Команда пуша */

/* cd .. — Выйти из папки */
/* mkdir — Создать папку */
/* cd !$ — Перейти в только что созданную папку */
/* touch — позволяет создавать файлы */
/* touch index.html — Создать файл index.html */
/* touch app/{css/main.css,js/main.js,index.html} — Создать сразу несколько файлов, никаких лишних пробелов быть не должно */
/*mv app1/*.* app2 — Переместить все файлы из папки app1 в папку app2  */
/* rm test — Удалить пустую папку test*/
/* добавляю из кракена*/


