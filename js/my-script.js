// $('#btn').click(function () {
//     var firstNameValue = $('#firstName').val();
//     var lastNameValue = $('#lastName').val();
//     var fullName = firstNameValue+' '+lastNameValue;
//
//     $('#fullName').val(fullName);
// });

$('add').click(function () {
    var firstNumberValue =Number($('#firstNumber').val());
    var lastNumberValue =Number($('#secondNumber').val());
    var result = firstNumberValue+' '+lastNumberValue;

    $('#result').val(result);
});

$('sub').click(function () {
    var firstNumberValue =$('#firstNumber').val();
    var lastNumberValue =$('#secondNumber').val();
    var result = firstNumberValue+' '+lastNumberValue;

    $('#result').val(result);
});

// alert( $('#h1').text() );












// var btnElement = document.getElementById('btn');
// btnElement.onclick = function () {
//     var startingNumberValue =document.getElementById('startingNumber').value ;
//     var endingNumberValue =document.getElementById('endingNumber').value ;
//     var res='';
//     for(var x=startingNumberValue; x<=endingNumberValue; x++ ){
//        res+=x;
//     }
//
// document.getElementById('result').value=res;
// };


// var redBtnElement = document.getElementById('redBtn');
// redBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     divOneElement.style.backgroundColor = 'red';
//     divOneElement.style.borderRadius = '100px 100px 0 0';
// }
//
// var greenBtnElement = document.getElementById('greenBtn');
// greenBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     divOneElement.style.backgroundColor = 'green';
//     divOneElement.style.borderRadius = '400px 400px 0 0';
// }
//
// var blueBtnElement = document.getElementById('blueBtn');
// blueBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     divOneElement.style.backgroundColor = 'blue';
//     divOneElement.style.borderRadius = '400px';
// }
//
// var defaultBtnElement = document.getElementById('defaultBtn');
// defaultBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     divOneElement.style.backgroundColor = 'white';
// }



// var redBtnElement = document.getElementById('redBtn');
// redBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     divOneElement.className = 'class-one';
// }
//
// var greenBtnElement = document.getElementById('greenBtn');
// greenBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     divOneElement.className = 'class-two';
// }
//
// var blueBtnElement = document.getElementById('blueBtn');
// blueBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     divOneElement.className = 'class-three';
// }
//
// var defaultBtnElement = document.getElementById('defaultBtn');
// defaultBtnElement.onclick = function () {
//     var divOneElement = document.getElementById('divOne');
//     divOneElement.className = 'my-style';
// }



