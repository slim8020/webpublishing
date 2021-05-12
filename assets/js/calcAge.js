var currentYear = 2021;
var birthYear;
var age;

birthYear = prompt("태어난 해를 입력하세요. (예:1980)", "1980");

age = currentYear - birthYear;

document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");