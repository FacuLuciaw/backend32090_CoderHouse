const express = require('express')

const router = express.Router();

let id=3;

let listaProductos=[

    {id:1 ,title:"Guitarra Stratocaster Fender", price:25000,img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-GFTwz14wcpwjuryhw6T7gdNO6ToGukprXVDmXxiDQmG3MQzLhEip99VcH7To-P_CF6pHgltZTGw&usqp=CAc"},

    {id:2 ,title:"Guitarra Telecaster Harley Benton", price:24000,img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBLCa50TIyiIhOjdCXcYo59z-3rsXNyztgsJBQ6Mks_-XYdpQBZWWjqYaRi_sPmXwdrMrOTLTegDb2&usqp=CAc"},

    {id:3 ,title:"Guitarra Les Paul Epiphone", price:23000,img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFGB0Ki7J2EW3IzR7F0uuEFbFJO06SWtHFL5R6PsblyAhbLqgryPOYhifoIe9p&usqp=CAc"}

]

router.get('/mostrarproductos',(req,res)=>{

    res.render('productos',{productos:listaProductos})

})

router.get('/agregarProducto',(req,res)=>{

    res.render('agregarProducto')

})

router.get('/detalle/:id',(req,res)=>{

    let id = req.params.id;

    let miProducto = listaProductos.filter(p=>p.id == id);

    if(miProducto.length ==0){

        return res.send(`no existe ese producto`)

    }

    res.send(miProducto)

})

router.post('/',(req,res)=>{

    let datos = req.body;

    datos.id=id++;

    listaProductos=[...listaProductos,datos]

    res.redirect('/productos/agregarProducto');

})

module.exports = router;