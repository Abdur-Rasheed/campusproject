const express = require("express");
const app = express();
const cors = require("cors");
const pool =require("./db");


app.use(cors());
app.use(express.json());

//Queries

app.post("/allrecords", async(req,res) =>{
    try{
        const { description }=req.body;
        const newAdd = await pool.query("INSERT INTO unidb(c_name,c_image_url,adrs,decr ) VALUES('LEH01',https://placekitten.com/200/300,'250 bedford pk blvd', 'public inst in nyc') ",
        
        );

        res.json(newAdd.rows[0]);
    }catch(err){
        console.error(err.message);
    }
});

app.get("/allrecords", async(req,res)=>{
    try{
        const allstu = await pool.query("SELECT * from unidb");     
        res.json(allstu.rows);   
    }catch(err){
    console.error(err.message);
}
});

app.get("/allrecords/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const stu = await pool.query("SELECT * FROM unidb WHERE stuid= $1",[id])
           


        res.json(allstu.rows);   
    }
    catch(err){
    console.error(err.message);
}
});

app.listen(3000,() =>{
    console.log("server on 3000");
})

