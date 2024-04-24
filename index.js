import _ from 'lodash';
import { color, log, red, green } from 'console-log-colors';

const myArray = [ 1, 2, 3, 4, 5, 8, 4, 3, 9]
console.log(color.red(myArray));


const output = _.uniq(myArray);

console.log(output);

const backwards = _.sortBy(myArray, (a,b) => b < a)

console.log(color.green(backwards));