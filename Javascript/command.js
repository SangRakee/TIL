//1.조건문 
// if(조건식) 참일때 실행문; 
// if(조건식) {참일때 실행문} else {거짓일때 실행문};
let month = prompt("월 입력 :", "");

if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    console.log(`${month}월은 31일까지 있습니다.`);
}else if(month==2){
    console.log(`${month}월은 28일까지 있습니다.`);
}else if(month==4 || month==6 || month==9 || month ==11){
    console.log(`${month}월은 30일까지 있습니다.`);
}else{
    console.log(`${month}월이 맞는지 확인하세요`);
}
//swich(변수명) {
//     case 변수값: 실행문
//                  break;
//     case 변수값: 실행문
//                  break;
//     default: 기타실행문;
// }
switch(month){
    case '1':
    case '3':
    case '5':
    case '7':
    case '8':
    case '10':
    case '12': console.log(`${month}월은 31일까지 있습니다.`);
             break;
    case '2': console.log(`${month}월은 28일까지 있습니다.`);
             break;
    case '4':
    case '6':
    case '11':console.log(`${month}월은 30일까지 있습니다.`);
             break;
    default : console.log(`${month}월이 맞는지 확인하세요`);
}

//반복문
//초기값;                         초기값;            for(초기값; 조건식; 증감식){
//while(조건식){                  do{                       실행문;
//    참일때 실행문;                실행문;           }
//    증감식;                       증감식;          for( 데이터 in|of 리스트데이터){
//}                                }while(조건식);         실행문; }

let index=1;
let sum=0;
while(index < 11){
    sum += index; //sum = sum+index;
    index++;  //index=index+1;
}
console.log(`1~10 합 : ${sum}`);

index=1;
sum=0;
do{
   sum += index;
   index++;
}while(index < 11);
console.log(`1~10 합 : ${sum}`);

sum=0;
for(index=1; index < 11; index++){
    sum+=index;
}
console.log(`1~10 합 : ${sum}`);

//기타 : return - 함수종료(반환), break - 반복문 종료, continue-반복문으로 돌아가기
sum=0;
for(index=1; index < 11; index++){
    if( index%2 ==0) continue;
    sum+=index;
}
console.log(`1~10 홀수 합 : ${sum}`);
//nexted for문 이용 구구단 출력 해보기~~~