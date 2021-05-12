var num = prompt("몇까지 3의 배수를 찾을까요?", "3");
var count=0;

document.write("<h2>");

for(var i=1; i<num; i++){
    if(i % 3 === 0){
        document.write(i+",");
        count++;
    }
}
document.write("</h2>");

document.write("<br><p>" + num + "까지 3의 배수의 개수 : " + count + "</p>");
