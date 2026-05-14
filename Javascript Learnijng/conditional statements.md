# If statement:

let color;
if(mode === "dark-mode"){
    color = "black";
} else if ( mode === "night-vision" ){
    color = "green";
} else {
    color = "white";
}

Shortcut:
if (mode === "dark") color="black";

### Ternary Operators ###

based on 3 operators
syntax:

a? b : c;
condition ? true output : false output;

let resu;t = age > 18 ? adult : not adult;  --- if age>18, adult be assigned to result var, if not then not adult be assigned.

we can also use it for giving commands 
age > 18 ? console.log("adult") : console.log("not adult")  ---here directly results will be printed.

# Switch Statement:

switch (var) {
    case "value1" :
        command;
        break;
    case "value2" :
        command;
        break;
    default:
        command;
}

