const li = document.getElementsByTagName("li");

for(let i=0; i<6; i++){
    li[i].innerHTML = "항목" + " " + (i+1);
}

const div = document.getElementsByTagName("div");

div.innerText = "<h2>실습 과제</h2><p>DOM 조작 연습 중입니다.</p>"

console.log(div[0].innerText);

