# creating
let str = "Apna clg";

str.length    ---gives length
can be accessed as str[0] , str[3] ...

# Template literals

in template literals, we can write both string and variables together or #expresions.

eg,
let info = `the cose of $(obj.item) is $(obj.price) `
this starts an ends with ` and not "

\n --- new line character


# String Methos:

let str = "sjfJekjs";
let new_str = str.toUpperCase();  -- this wont change original string, it will return new strings.

NOTE: In javaScript string are immutable.

let new_str = str.toLowerCase();


str.trim()   -- remove whitespaces from both the ends

str.slice(start_index, end_index);  --returns a part of string. end value is not enclusive

str1.contact(str2);

str.replace(searchVal, newVal);
str.charAt(index);    --returns which char is at that index

