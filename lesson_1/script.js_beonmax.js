"use strict";/* СТРОГШИЙ РЕЖИМ ES6*/

               /* --------   УСЛОВИЯ  ----------  */

                  /* if  */
let num = 51;
if (num > 60) {console.log("да"); }
else if(num == 60) {console.log("может быть"); }
else {console.log("НЕТ");}


             /*Тернарный (три аргумента)  */
(num > 10) ? console.log("да") : console.log("нет");

 
                    /* switch (находит только совпадение)  */
let  namba = 100;

switch (namba) {
    case  49: console.log("Да"); break;
    case  100: console.log("нет"); break;
    case 50: console.log("Не знаю"); break;
   case namba >=100:console.log("Может быть"); break;
              
    default: console.log("Проблема");
        break;
}

                             /*  ЦИКЛЫ  */

                         /* while */
let figure = 50;

while (figure < 55) {
    console.log(figure);
    figure++;
}

                      /*  do while  */

let nam2 = 40;

do {console.log(nam2);   nam2++;}
while(nam2 < 45);

                     /* for */
/*for(нач.цикла;  ост.работы; происход. в новом цикле  ) */                     
  for(let i = 1;   i  <   8;          i++              ){
  console.log(i);
  }

            /* for - break  (break останавливает цикл )*/
           
  for (let i = 1; i < 8; i++ ){
    if(i == 5){ break};
    console.log(i);  

  }

     /* for - continue  (continue пропускает 1 цикл )*/

     for (let a = 1; a < 10; a++){
      if(a == 6){ continue }; 
      console.log(a);  
     }


/* ФАНКШИОН ДЕКЛАРЭШИОН  (объявлена в потоке кода " и вызываются до объявления" ) */

//ЗАМЫКАНИЕ это функция вместе со всеми внешними переменными которые ей доступны.

/* let nam  = 80;
function show (a,b,c) {
  //console.log(4 + 6 +1);
  //console.log(a + b + c);
  let xau = 50;
  console.log(xau);
  console.log(nam);
  //nam = 20;
}                     
show(); */
 //---------------------------------------

/*  function calk (a,b){ return(a + b); }
console.log(calk(5,5));
console.log(calk(10,10)); */

//--------------------------------------------

function ups (){
  let mops = 1+1;
  return mops;
}
let mama = ups(); 
console.log(mama);

/*ФАНКШИОН ЭКСПРЕШИОН (функцию присваиваем в переменную "срабатывает когда до неё доходит КОД") */

 let fan = function (){ 
   let a = 'Я ' + 'Виталий';
   return a;
   };
  console.log(fan());


  /* Callback - функции */

/*   function papa(Mama,Lena) {
 console.log('Буся Галя моя  ' + Mama);

   Lena();
  }
 papa('мама',function(){console.log('я учу js')});

 //-------------------

 function vit (lala,blabla ){
 console.log('Я пою ' + lala);
 blabla();
}

function tututu () {
  console.log('Едит паровозик');
}
vit("песню",tututu); */

  /* СТРЕЛОЧНАЯ (не имеет контекта вызова) */

let strela = (a,b) =>  a + b ;
console.log(strela(5,9));


       /* МЕОДЫ  вспомогательные функции */
             //(изминяет строки)
 //.toUpperCase(верхний регистр)
 //.toLowerCase(нижний регистр  )  
 //.Math.round(округляет до целого )
 //parseInt(округ. до десятых)
 //parseFloat(убирает буквы после десятка 10.1px -> 10.1 )
// Number.isNaN(возвращает true если попадают не цифры  ) 
//.toFixed(0) или .toFixed(1) или .toFixed(2) и тд. (возвращает число после точки ,до знака в скобках)(ВОЗВРАЩАЕТ СТРОКОВОЕ ЗНАЧЕНИЕ) ;




let bi = 'Leia';
console.log(bi.toUpperCase());
console.log(bi.toLowerCase());


let nam1 = '20.2';
 console.log(Math.round(nam1));

  let mat = '10.2px';
console.log(parseInt(mat)),
  console.log(parseFloat(mat));

 
      /* СВОЙСТВА  вспомогательные значения  */
               //( производим описание)
 //.length 
 let strit = 'Uraaaa';
 console.log(strit.length);           



