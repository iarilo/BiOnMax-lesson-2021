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
/*5) git add -A  Добавить все файлы */
/*5a)git add Css2  Добавить конкретный файл файлы  */
/*6) git commit -a -m"Добавил 5 команд гита" */
/*   git checkout сбросить все изминения до предыдущего комита */
/* */

