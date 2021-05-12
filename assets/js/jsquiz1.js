var num = prompt("숫자를 입력하세요.", "4");

if(num % 4 === 0){
    document.write("<h2>" + num + "는 4의 배수 입니다!</h2>");
}
else{
    document.write("<h2>" + num + "는 4의 배수가 아닙니다!</h2>");
}