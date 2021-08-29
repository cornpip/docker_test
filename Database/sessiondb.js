//const Mysqlstore = require('express-mysql-session');
let options = {
    host: "localhost",
    user: "shell",
    password: "auguststart08!",
    database: "together",
    clearExpired: true, // 만료됐을시 행 삭제
    checkExpirationInterval: 5000, //만료된거 지우는 주기
    expiration: 30000 // 유효한 세션 최대타임 시간은(ms)
}

sessionstore = (session)=>{
    const Mysqlstore = require('express-mysql-session')(session);
    return new Mysqlstore(options)
    //let test2 = session //이렇게하면 이 안에서만 도는 변수고 밖에는 전달 안되는 듯
    // 변수는 return 또는 변수 exports해야할듯 
}
function hi(a){
    return a
}
module.exports= {hi, sessionstore, options}

// exports.sessionstore = (session)=>{
//     //const Mysqlstore = require('express-mysql-session')(session);
//     let sessionstore= new Mysqlstore(session, options)
// }

//    host: "localhost",
//    user: "shell",