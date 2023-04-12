function insert(num) {
	document.getElementById("result").value += num;
}

function clearScreen() {
	document.getElementById("result").value = "";
}

function back() {
	var result = document.getElementById("result").value;
	document.getElementById("result").value = result.substr(0, result.length - 1);
}

function calculate() {
	var result = document.getElementById("result").value;
	if (result) {
		document.getElementById("result").value = eval(result);
	}
}
