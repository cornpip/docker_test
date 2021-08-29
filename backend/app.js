const express = require('express')
const app = express()
let mysql = require('mysql2');
let db = mysql.createConnection({
  host: `${NODE_ENV_HOST}`,
  user: 'root',
  password: 'auguststart08!',
  database: 'dockertest'
});
db.connect((err)=>{
    if(err) throw err;
    console.log("db success")
})

app.get('/', (req,res)=>{
    res.send('hello test')
})

app.listen(3000, ()=>{
    console.log("connect success")
})

if(dbhost){
    console.log(dbhost)
}
console.log('ho')