const os=require('os');

const obj={
    user:os.userInfo(),
    uptime:os.uptime(),
    type:os.type(),
    release:os.release(),
    total:os.totalmem(),
    free:os.freemem(),
}

console.log(obj);