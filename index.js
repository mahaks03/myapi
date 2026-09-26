const express = require('express');
const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    const obj = [
        {
            id:1,
            name:'xyz',
            address:'jdh'
        },
        {
            id:2,
            name:'abc',
            address:'kol'
        }
    ];
    res.send(JSON.stringify(obj));
    res.status(200).json({
        _status:true,
        _data:obj
    })
})
app.post('/create' ,(req, res)=>{
    let {useradmin, userpassword} = req.body;
    res.status(201).json({
        _status : true,
        useradmin,
        userpassword
    })
})
const port = 8000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})