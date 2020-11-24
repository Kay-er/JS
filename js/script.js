// Задание №1
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2   Потому что к переменной c присваиваем значение а и добовляем 1 
//d = b++; alert(d);           // 1   Потому что к переменной d присваиваем значение B и добовляем 1 но выводим предыдущее значение переменной 
//c = (2+ ++a); alert(c);      // 5   Так как в строке 1 у нас получилось 2, здесь мы прибавляем 3 поэтому ответ 5
//d = (2 + b++); alert(d);      // 4  Так как в строке 2 у нас получилось 1, здесь мы прибавляем 3 поэтому ответ 4
//alert(a);                    // 3    прибавили единицу в примере 1 и примере 3 
//alert(b);                   // 3     прибавили единицу в примере 2 и примере 4 

// Задание №2 

//var a = 2;
//var x = 1 + (a *= 2); Ответ 5, так как идёт умножение а*а и + 1

// Задание № 3
//var a = 10;
//var b = 5;
//if(a > 0 && b >0 ){
//    c = a - b;
//    alert(c);
//} else if(a < 0 && b < 0);{
//    c = a * b;
//    alert(c);
//} else if(a > 0 && b < 0 || a < 0 && b > 0);{
//    c = a + b;
//    alert(c);
//}

// Задание № 4
var a = +prompt('Введите число от 0 до 15');
switch(a){
    case 0:
    alert(0);
    break;
    case 1:
        alert(1);
        break;
    case 2:
        alert(2);
        break;
    case 3:
        alert(3);
        break;
    case 4:
        alert(04);
        break;
    case 5:
        alert(5);
        break;
    case 6:
        alert(6);
        break;
    case 7:
        alert(7);
        break;
    case 8:
        alert(8);
        break;
    case 9:
        alert(9);
        break;
    case 10:
        alert(10);
        break;
    case 11:
        alert(11);
        break;
    case 12:
        alert(12);
        break;
    case 13:
        alert(13);
        break;
    case 14:
        alert(14);
        break;
    case 15:
        alert(15);
        break;
}