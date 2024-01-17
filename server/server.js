import express from "express";
import mysql from 'mysql';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());
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
    db.query(sql,(error,result)=>{
        if(error){
            return res.json({
                "message":"unable to fetch the data"+error
            })
        }else{
            return res.status(200).json(result);
        }
    })
})

app.post('/addEmp',(req,res)=>{
    const sql="insert into employee values(?)";
    const values=[
        req.body.id,
        req.body.firstName,
        req.body.lastName,
        req.body.age,
        req.body.email,
        req.body.password,
        req.body.joiningDate,
        req.body.gender,
        req.body.mob,
        req.body.address,
        req.body.sal
    ]
    console.log("Executing SQL query: " + sql);
    db.query(sql,[values],(error,result)=>{
        if(error){
            console.log("-->",error);
            return res.json({
                "message":"unable to add the record !"+error
            })
        }else{
            return res.json(result);
        }
    })
})

app.put('/edit/:id',(req,res)=>{
    const sql="update employee set firstName=?,lastName=?,age=?,email=?,password=?,joiningDate=?,gender=?,mob=?,address=?,sal=? where id=?";
    const id= req.params.id;
    db.query(sql,[req.body.firstName, req.body.lastName, req.body.age, req.body.email, req.body.password, req.body.joiningDate, req.body.gender, req.body.mob, req.body.address, req.body.sal
        ,id],(error,result)=>{
        if(error){
            console.log(error);
            return res.json({
                "message":"unable to update the record!"
            })
        }else{
            return res.json(result);
        }
    })
})

app.get('/emp/:id',(req,res)=>{
    const sql="select * from employee where id=?";
    console.log(sql);
    const id=req.params.id;
    db.query(sql,[id],(error,result)=>{
        if(error){
            console.log(error);
            return res.status(404).json({
                "message":`unable to find the employee with id : ${id}`
            })
        }else{
            return res.status(200).json(result[0]);
        }
    })
})

app.delete('/deleteEmp/:id',(req,res)=>{
    const sql="delete from employee where id=?";
    const id=req.params.id;
    db.query(sql,[id],(error,result)=>{
        if(error){
            console.log(error);
            return res.json({
                "message":"unable to delete the record!"
            })
        }else{
            return res.json(result);
        }
    })
})
app.listen(9090,()=>{
    console.log("server started listening at port : 9090")
})