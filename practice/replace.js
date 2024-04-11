// Replace First Occurrence of a Character in a String


// const string = 'Mr Red has a red house and a red car';

// let change = string.replace('red','blue')

// console.log(change);

// Example 2: Replace Character of a String Using RegEx

const string = 'Mr Red has a red house and a red car';

let change=string.replace(/red/g,'blue');
console.log(change)

// In the above program, a regex expression is used as the first parameter inside the replace() method.

// /g refers to global. It means that all the matching characters in the string are replaced.

// Since JavaScript is case-sensitive, R and r are treated as different values.

// You could also use the regex to perform case-insensitive replacement using /gi, where i represents case-insensitive.