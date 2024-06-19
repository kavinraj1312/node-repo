const {readFile,writeFile}=require('fs');
console.log("started");
readFile("./example/first.txt",'utf-8',(err,res)=>{
    if(err){
        console.log(`reading failed ${err}`);
        return;
    }
   
    const first=res;
    writeFile("./example/async.txt",`this is asynchronous file ${first}`,(err,res)=>{
        if(err){
            console.log(`writing failed ${err}`);
            return;
        }
        console.log(res);
        console.log("finished 1st task");
    });
});
console.log("start next task");