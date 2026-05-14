we have these operators:

+ , - , * , / , Modulus(%) , exponential(**) , increment(++) , decrement(--)

a += 4;  --- it means a = a + 4;


# comparison operators

> , >= , < . <= , == , !=      {comparision operators}

== , !=  --- if we compare 5 and "2" java will convert string 2 into number and then compare. But if we want to conserve the type and then compare, we use:

=== (equal to and type)
!== (not equal to and type)

# Logical Operators
logical and "&&"
logical or "||"
logical not "!"


### Ternary Operators ###

based on 3 operators
syntax:

a? b : c;
condition ? true output : false output;

let resu;t = age > 18 ? adult : not adult;  --- if age>18, adult be assigned to result var, if not then not adult be assigned.

we can also use it for giving commands 
age > 18 ? console.log("adult") : console.log("not adult")  ---here directly results will be printed.