//연산자
//1.산술연산자 : +, -, *, /, %
let x=10;
let y=20;

console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} - ${y} = ${x-y}`);
console.log(`${x} * ${y} = ${x*y}`);
console.log(`${x} / ${y} = ${x/y}`);
console.log(`${y} % ${x} = ${y%x}`);

//2.대입연산자 : =  다른연산자=
const z = x+y;
console.log(z);
console.log(x += 10, x-=10, x*=10, x/=10);

//3.비교연산자 : >,<,>=,<=,==,!=, ===, !==
for(let i=1; i < x; i++){
    if(i%2 == 0) console.log(`${i}는 짝수입니다.`); 
    else console.log(`${i}는 홀수입니다.`)
}
if(x < y ) console.log(`${x}는 ${y}보다 작은 수 입니다.`);
if(x > y ) console.log(`${x}는 ${y}보다 큰 수 입니다.`);
if(x != y ) console.log(`${x}는 ${y}는 다른 수 입니다.`);
if(x == y ) console.log(`${x}는 ${y}는 같은 수 입니다.`);
if( x == "10" ) console.log(`==연산자로 숫자 문자 비교 x는 10 입니다.`);
if( x === "10" ) console.log(`===연산자로 숫자 문자 비교 x는 10 입니다.`);

//4.논리연산자: &&, ||, ~
if( (x<y) && x>0) console.log(`${x}는 ${y}보다 작은 양수 입니다.`);

//5.비트연산자: &, |, ^,~,>>,<<
x=4;
console.log(`${x} >> 2 = ${x>>2}`);
console.log(`${x} << 2 = ${x<<2}`);

//6.삼항연산자 : 조건 ? 참 : 거짓
x == y ? console.log(`${x} == ${y}`):console.log(`${x} != ${y}`);