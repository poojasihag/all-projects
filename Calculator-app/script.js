// document.addEventListener("DOMContentLoaded", function() {

//     var buttons = document.querySelectorAll('input[type="button"]');

//     buttons.forEach(function(button) {

//         button.addEventListener('click', function() {

//             var value = this.value;

//             switch(value) {
//                 case 'AC':

//                     document.querySelector('input[name="diplay"]').value = '0';
//                     break;
//                 case 'DE':

//                     var currentValue = document.querySelector('input[name="diplay"]').value;
//                     document.querySelector('input[name="diplay"]').value = currentValue.slice(0, -1);
//                     break;
//                 case '=':

//                     var expression = document.querySelector('input[name="diplay"]').value;
//                     var result = eval(expression);
//                     document.querySelector('input[name="diplay"]').value = result;
//                     break;
//                 default:

//                     if (document.querySelector('input[name="diplay"]').value === '0') {
//                         document.querySelector('input[name="diplay"]').value = value;
//                     } else {
//                         document.querySelector('input[name="diplay"]').value += value;
//                     }
//                     break;
//             }
//         });
//     });
// });

let buttons = document.querySelectorAll('input[type="button"]');
let inputDigit = document.querySelector(".inputDigit");
console.log(inputDigit);
// console.log(buttons);

buttons.forEach(function (a, b, c) {
  // console.log("value:a",a);
  // console.log("value:b",b);
  // console.log("value:c",c);
  // console.log(a.value);
  a.addEventListener("click", (e) => {
    let value = e.target.defaultValue;

    if (value == "AC") {
      inputDigit.value = "";
    } else if (value == "DE") {
      let x = inputDigit.value;
      let newNum = x.toString().slice(0, -1);
      console.log(newNum);
      inputDigit.value = newNum;
      console.log("hi");
    } else if (value == "=") {
      let result = eval(inputDigit.value);
      inputDigit.value = result;
    } else {
      inputDigit.value += value;
    }
  });
});
