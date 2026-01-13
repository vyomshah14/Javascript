// reduce
let nums = [1, 2, 3, 4, 5];
let result = nums.reduce((accumulator, currentValue) =>  accumulator + currentValue);
console.log(result); // Output: 15

// with the help of for loop
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum); // Output: 15 
// filter
let arr = [10, 20, 30, 40, null , undefined];
let filteredarr = [];
// method one
for (i = 0; i<arr.length; i++){
    if (typeof arr[i] === "number") { //Number
        console.log(arr[i]);
    }

}
// method two
for (i = 0; i<arr.length; i++){
    if (typeof arr[i] === typeof 0) { 
        console.log(arr[i]);
    }
}

console.log(arr.filter((i) => typeof i == "number"));
console.log(arr.map((i) => i + 2));