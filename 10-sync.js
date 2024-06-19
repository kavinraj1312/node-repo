const {readFileSync,writeFileSync}=require('fs');

const content=readFileSync('./example/content.txt','utf-8');
console.log(content);
writeFileSync('./example/first.txt',`this is taken from file content.txt--------> ${content} `,{flag:'a'});

