// swap
function swap<T>(num1:T, num2:T):[T, T]{
    return [num2, num1];
}

const result1 = swap(2, 3);
const result2 = swap(true, false);

console.log(result1, result2)