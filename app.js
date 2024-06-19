// package.json store info of the project,
//it stores the dependencies (external modules installed)

const l=require('lodash');
const ar=[1,[2,3,[4]]]
const item=l.flattenDeep(ar);
console.log(item);
