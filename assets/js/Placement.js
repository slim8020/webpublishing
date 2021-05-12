var seat = prompt("총 몇명의 자리를 만들까요?", "25");
var col = prompt("한줄에 몇명이나 앉을 수 있게 할까요?","5");

document.write("<table>");

for(var i=1; i<=seat; i++)
{
    if(i % col === 1){ 
        document.write("<tr>");
    }

    document.write("<td>좌석" + i + "</td>");
    if(i % col === 0){ 
        document.write("</tr>");
    }

}

document.write("</table>");