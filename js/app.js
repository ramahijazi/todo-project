'use strict';

alert('welcome to our website')


let userName = prompt('please enter your name');
console.log(userName);

let userGender = prompt('please enter your gender');
console.log(userGender);


let userAge = prompt('please enter your age');
console.log(userAge);

if (userAge <= 0) {
    alert(`enter your age again`);
    let userAge = prompt('please enter your age');
    console.log(userAge);
}

let answer = confirm("do you want to skip the welcoming message");
console.log(answer);

if (answer === false) {

    if (userGender === 'male') {
        alert(`welcome Mr. ${userName}`)

    }
    else if (userGender === 'female') {
        alert(`welcome Ms. ${userName}`)
    } 
    else { alert(`welcome ${userName}`)}
}


let Q1= prompt('do you need lighting design consulting');

let Q2= prompt('do you want help in lighting design in your home');

let Q3= prompt('do you have a supplier for your project');


let yourAnswer =[];


 function chkeckArray(Q){
    if (Q===""){ yourAnswer.push('invalid')
   
} else if (Q==="yes"){yourAnswer.push('yes')}
  else if (Q==="no"){yourAnswer.push('no')} }

  chkeckArray(Q1)
  chkeckArray(Q2)
  chkeckArray(Q3)
  console.log(yourAnswer);

for (let index = 0; index < yourAnswer.length; index++) {
   console.log(yourAnswer[index]);
    
}

