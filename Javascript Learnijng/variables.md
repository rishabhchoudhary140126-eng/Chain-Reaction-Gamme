alerts("Apna College");    -- this will create a popup alert of whatever written inside.

console.log("Apna college");   -- this will print apna college

# Variables
we can simply define varables like python.

age=24
name = "Rishabh"

It is dynamically typed langage, we dont need to define type.

in var name letters, _, numbers and $ is allowed. An first etter should be letter or _.

# let, const and var
before writing var names, we use a pre keyword, any of these 3 which gives special meaning to them:

var: variable can be redecleared and updated, A global scope variable. Global scope var

let: variable can't be redecleared but can be updated. Block scope var

const: variable cant be redecleared or updated. Block scope var

-----we mostly use let or const.----

# Objects:

const student = {
    fullName: "Rahul",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};

---How to access?

writing stuents in console will give all:
{fullName = "Rahul" , age=20, .....}
to access individually, we can use students["fullName"]

also can be accessed with object.key, or object["key"]

NOTE: we cant change cont variable, but we can change cases of const objects.

