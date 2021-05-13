function addNumber(n1, n2){
    return n1+n2;
}

var sum = addNumber(10, 20);
console.log(sum);
sum = 50;   // 재할당
console.log(sum);
var sum = 100;  // 재선언
console.log(sum);