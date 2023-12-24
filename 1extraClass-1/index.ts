// assignement 1
type NumberArr = number[];

function getFirstElement(arr:NumberArr):number{
  return arr[0];
}

let ans = getFirstElement([121, 2, 3, 34]);
console.log(ans)

// assignement 2

type Input = (number | string)[];

function getFirstItem(arr:Input): (string | number) {
    return arr[0];
}


let a = getFirstItem(['one', 'two', 'three']);
let b = getFirstItem([3, 2, 1]);

// console.log(a.toLowerCase()) //give error

// better approach for ass 2 using genric

function getFirstItemG<T>(arr: T[]){
    return arr[0];
}

let ans1 = getFirstItemG<string>(['one', 'two', 'three']);
let ans2 = getFirstItemG<number>([2, 4, 3]);
console.log(ans1.toUpperCase())