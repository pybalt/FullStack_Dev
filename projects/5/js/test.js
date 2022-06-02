CREATE = [];
DELETE = [];
const median = (arr) => {
	const mid = Math.floor(arr.length / 2),
		nums = [ ...arr ].sort((a, b) => a - b);
	return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
const standardDeviation = (arr, usePopulation = false) => {
	const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
	return Math.sqrt(
		arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
			(arr.length - (usePopulation ? 0 : 1))
	);
};
function CreateNumber() {
	let Number = Math.floor(Math.random() * 1000000);
	return Number;
}
cleanArray = (arr) => {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			arr.splice(i, 1);
			i--;
		}
	}
	return arr;
};
function TestNode(NUMBER_OF_TIMES) {
	this.NUMBER_OF_TIMES = NUMBER_OF_TIMES;
	for (let i = 0; i < this.NUMBER_OF_TIMES; i++) {
		var NodeTimeS = performance.now();

        DISPLAY_NAME.value = Math.random().toString(36).slice(2, 7);
        DISPLAY_AMOUNT.value = CreateNumber();
		BTN.click();

		var NodeTimeE = performance.now();
		CREATE.push(NodeTimeE - NodeTimeS);
	}
	NUMBER_OF_TIMES = this.NUMBER_OF_TIMES;
	return cleanArray(CREATE);
}

function DeletingNodes() {
	let SELECTOR = document.querySelectorAll('div.card');
	SELECTOR.forEach((element) => {
        var NodeTimeSD = performance.now();

		element.click();

        var NodeTimeED = performance.now();
        DELETE.push(NodeTimeED - NodeTimeSD);
	});
	return cleanArray(DELETE);
}

function Statictics(arr) {
	console.log(`Median: ${median(arr)}`);
	console.log(`Standard Deviation: ${standardDeviation(arr)}`);
	console.log(`MIN ${Math.min.apply(Math, arr)}`);
	console.log(`MAX ${Math.max.apply(Math, arr)}`);
}