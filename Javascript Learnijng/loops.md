# for loop

for(let i =1; i<=5; i++>){
    console.log("Hello");
}

# while loop

while(condition){
    code;
    var upddate;
}

# do while loop

do {
    code;
    update var;
} while (condition);

#### for-of loop

for(let val of strVar){       --used to itterate over string
    code;
}

here updation and stop conition are automatic.

#### for-in loop

used for objects, arrays... itterator recieves keys of objects.

let student = {
    fullName: "Rahul",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};
for(let i in student){
    code;
    // here i contains "fullName", "age", "cgpa", "isPass" one by one
}

