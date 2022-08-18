var express = require('express');
var router = express.Router();

const contenedorMemoria = require('../Contenedor/contenedorMemoria')
const data = new contenedorMemoria();

router.get('/', function(req, res, next) {

  // Devuelve todos los productos

  res.send({data:data.getAll()});

  
});

  router.get('/:id',(req,res)=>{

    // Devuelve un producto por su id 

    let obj = data.getOne(req.params.id)

    if(obj.length==0){

      res.send('No se puedo conseguir el producto')

    }else{

    res.send({data:obj})

    }

  })

  router.post('/', ({body}, res)=>{

  // Enviamos los datos 

  data.addOne(body)

  res.send({datos:body})

  })

  router.put('/:id',(req,res)=>{

  // Modificar según el id

  let id = req.params.id;

  res.send({datos:req.body})

  })

  router.delete('/:id',(req,res)=>{

  //elimina según id

    let newData = data.deleteOne(req.params.id)

    res.send({datos:newData})

  })

module.exports = router;
