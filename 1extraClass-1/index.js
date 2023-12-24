"use strict";
function getFirstElement(arr) {
    return arr[0];
}
let ans = getFirstElement([121, 2, 3, 34]);
console.log(ans);
function getFirstItem(arr) {
    return arr[0];
}
let a = getFirstItem(['one', 'two', 'three']);
let b = getFirstItem([3, 2, 1]);
// console.log(a.toLowerCase()) //give error
// better approach for ass 2 using genric
function getFirstItemG(arr) {
    return arr[0];
}
let ans1 = getFirstItemG(['one', 'two', 'three']);
let ans2 = getFirstItemG([2, 4, 3]);
console.log(ans1.toUpperCase());
