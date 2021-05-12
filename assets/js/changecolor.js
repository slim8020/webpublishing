var heading = document.querySelector('#heading');

heading.onclick = function(){
    // alert("Hello");
    var reply = confirm("정말 배경 색깔을 바꾸시겠습니까?");
    var color = prompt("색상을 입력하세요.", "red");
    heading.style.color = color;

    console.log(reply);

    if(reply === true){
        heading.style.backgroundColor = "#000";
    }
    else{
        heading.style.backgroundColor="#fff";
    }
}