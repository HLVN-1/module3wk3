import fs, { access } from 'fs';
import _ from 'lodash';
import { color, log, red, green, blue } from 'console-log-colors';
import request from 'request';

const myArray = [ 1, 2, 3, 4, 5, 8, 4, 3, 9]
console.log(color.red(myArray));


const output = _.uniq(myArray);

console.log(output);

const backwards = _.sortBy(myArray, (a,b) => b < a)

console.log(color.green(backwards));

// Synchronous File access
const file = fs.readFileSync('./data.json', {encoding: 'utf-8'});
console.log(file);

// Asynchronous File Access method
fs.readFile('./data.json', {encoding: 'utf-8'}, (err, f) => console.log(color.green(f)));

// web request

request('https://jsonplaceholder.typicode.com/posts', (err, resp, body) => {
    const parsed = JSON.parse(body);
    parsed.forEach( (x) => console.log(x));
    // console.log(color.blue(parsed))
    fs.writeFileSync('./newWebStuff.json', JSON.stringify(body));
});

// An example of printing JSON data as a string is:

// JSON.stringify(parsed);
// console.log(JSON.stringify(parsed))
