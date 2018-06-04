let defaultName = 'Հարգելի  աշխատակից';
let name = prompt("Խնդրում  ենք  մուտքագրել  ձեր  անունը", "Հարգելի  աշխատակից");

window.onload = function(){
  let userName = name ? name : defaultName;
  document.getElementById('name').innerHTML = 'Բարև Հարգելի ' + userName + '։ Դուք  գոհ  ե՞ք  Ձեր  աշխատավարձից։';
}

function clickMe() {
    alert('Շնորհակալռւթյռւն  անկեղծ  պատասխանի  համար  ' + name + '  ջան։  Մենք  այդպես  էլ  գիտեինք');
}

function pressMe(){
  alert('Ամոթ  քեզ  ' + name + '։  Հազար ասեցինք INSPECT ELEMENT մէ՛ք էնէ');
}

function changeElementPosition(){
  let elemMargin = (Math.random()*250 + 'px ') + (Math.random()*300 + 'px ') + (Math.random()*400 + 'px ') + (Math.random()*500 + 'px');
  let marginElem = document.getElementById('btnPosition').style.margin = elemMargin;
}
