const path=require('path');

const filepath=path.join('/example/','content.txt');
const absolute=path.resolve(__dirname,'/example','content.txt');


const res={
    separator:path.sep,
    base:path.basename(filepath),

}
console.log(res);
console.log(absolute);