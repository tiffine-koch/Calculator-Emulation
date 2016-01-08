//to do - work on more complicated math and storing as string -concat-
var pastNum = "";
var currentNum = "";
var currentOp = "";
var resultNum = "";
var maxlength = 10;

document.addEventListener("DOMContentLoaded", function(event) {
	var buttons = document.getElementById.addEventListener('button', displayButtons)
	, nums = document.getElementsByClassName.addEventListener('number', numClicked)
	, operators = document.getElementsByClassName.addEventListener('power', opClicked)
	,	result = document.getElementById.addEventListener('window', resultClicked)[0]
	, clear = document.getElementById.addEventListener('clear', clearClicked)[0];
});

//click function - do Math
function numClicked() {
  var currentNum = document.getElementsByClassName('number');
​
  if(nums[i]e.target. !== 'number') {
		document.getElementById("display").innerHTML = currentNum;
  } else {
    result.innerHTML = "";
  }
}

function opClicked() {
	var currentOp = document.getElementsByClassName('power');
​
  if(nums[i]e.target. === 'power') {
		document.getElementById("display").innerHTML = currentOp;
  } else {
    result.innerHTML = "";
	}

	function clickClear(value) {
		document.getElementById("clear").addEventListener("click", function() {
	  document.getElementById("display").innerHTML = "";
		var pastNum = "";
		var currentNum = "";
	})

//limit zero to not clicked First
// function zeroClicked() {
//   var selected = document.getElementById('zero');
// ​
// 	while (var i = 0)
//   if (event.target.innerHTML === 'zero') {
// document.getElementById("display").innerHTML = currentOp;
//     result.innerHTML = "";
//   } else {
//   document.getElementById("display").innerHTML = 'this';
//   }
// }

//add and limit number entry to 9,  0 - 1
function addDigit(dig) {
	if (currentNum.length > maxlength {
		currentNum = "Sorry, too much math";
	} else if {
		((eval(currentNum) == 0) && (currentNum.indexOf(".") == -1)) {
			Current = currentNum;
  } else {
			currentNum = currentNum + currentOp;
    	};
    };
	};
	document.getElementById("display").innerHTML = currentNum;
 }

function doOperators(i, event) {
	var button = event.target.innerHTML;

		if (currentOp[i] === '÷') {
			 result.innerHTML  += '/';
		}
		else if (currentOp[i] === 'x') {
			 result.innerHTML  += '*';
		}
		else if (currentOp[i] === '%') {
					result.innerHTML  * '0.01';
		}
		else if (currentOp[i] === '+/-') {
			function toggleNums(nums) {
					 nums.map(function(num, index, array) {
						retun Math.abs(1) * -1;
					});
				};
			 result.innerHTML = num
		}
		else {
			 result.innerHTML += nums[i];
		}
	};
}
function doMath() {
	function calculate(i) {
     function () {
        result.innerHTML = eval(result.innerHTML);
    };
	}
// need to parseFloat
// pastNum = parseFloat(pastNum);
// currentNum = parseFloat(currentNum);

	function resultClicked() {
		var result = result.innerHTML;
			document.getElementById("result").addEventListener("click", function() {
 			result;
			var pastNum = "";
			var currentNum = "";
		});
	};
