import addNumbers, {concatStrings, fetchData, greet, printFormat} from "./function";
console.log(addNumbers(10,20));
// console.log(addNumbers(10,"20"));
console.log(concatStrings('hi', 'world!'));
console.log(concatStrings('hi'));
printFormat('titleee', 'formattt');
printFormat('titleee', 2323.222);

fetchData('http://google.com', [11,]).then(data => console.log(data));
console.log(greet('Hello', 'radha', 'john'));