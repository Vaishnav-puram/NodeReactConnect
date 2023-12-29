import express from "express";
import mysql from 'mysql';
import cors from 'cors';

const app=express();
app.use(cors());
const db=mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"Vaishv@123",
    database:"nodejsReact",
    insecureAuth: true
})

app.get('/',(req,res)=>{
    const sql="SELECT * FROM employee";
    console.log("Executing SQL query: " + sql);
    db.query(sql,(error,result)=>{
        if(error){
            return res.json({
                "message":"unable to fetch the data"+error
            })
        }else{
            return res.json(result);
        }
    })
})

app.listen(9090,()=>{
    console.log("server started listening at port : 9090")
})