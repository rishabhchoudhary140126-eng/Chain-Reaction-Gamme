# syntax:

function functionName(para1, para2){
    do some work;
    return something;
}


# Arrow functions:
a compact way of writting functions.

const funcName = (para1, para2) => {
    do some work; 
}


here funcName is a variable, in which functions definition is stored, later that var  can be used as function.


# forEach function:

this is a special way in which we can define a function with an array such that the function defined will be applied to each elements of that array.

let arr = [1,2,3,4,5,6,7,8,9];
function funcName(val){
    do something;
}

--using forEach:

arr.forEach(here we can write whole function....) for e.g.,

arr.forEach((val) => {
    do something;
})

as parameter to this forEach function, we can use value, inex or array itself.


# map function:
it will do some work on each element just like forEach, but will return a new array of outputs obtained. e.g.,

let newArr = arr.map(val) =>{
    return value**2;
}

# reduce metho:
we use this method in cases where we have too many inputs but have single output.

it will reduce the array in a single value and return it.

let arr = [1,2,3,4,5];

arr.reduce((result, current) => {
    return result + current;
});

D