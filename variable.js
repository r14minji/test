//1. Use strict
// added in ES5


//2. Variable
// let ES6

let globalName = 'global name'; // 최소한으로 사용하는 것이 좋음. 함수나 for 루프에서 사용
{
    let name = "Ellie"
    console.log(name);
}

// var (don't ever use this!)
// var hoisting (선언을 제일 위로 끌어 올림. move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

//3. Constnat
// favor immutanble data type always 값이 변하지 않는 
// - security 보안상
// - thread safety
// - reduce human mistakes

// 4. Variable types
// sing item: number, string, null, boolean, 
// object
// funcion, first-class-function

const count = 17; //integer
const count = 1.7;

const infinity = 1/ 0;
const negativeInfinity = -1 /0;
const nAn = 'not a number' / 2

//string
const char = 'c';
//백틱이용

//symbol , create

//5. Dynamic typing: dynamically typed langugae
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
