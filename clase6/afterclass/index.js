const express = require('express')

const app = express()

const Contenedor = require('./contenedor/Contenedor')

const contenedor = new Contenedor('./productos.txt')

const PORT = 8080

//end point productos

app.get('/', (req, res)=>{

    //manejar las peticiones y las respuestas 

    contenedor.getAll()

    .then(data=>res.send(data))

    .catch((err)=>{res.send(err)})

})

//end point productosRandom

    app.get('/productRandom', (req, res)=>{

        contenedor.getRandom()

    .then((data)=>{

        return data

    })

    .catch((err)=>{res.send(err)})

})

const server = app.listen(PORT, ()=>{

    console.log(`se esta escuchado por el puerto ${PORT}`);

})

server.on("error", err=>console.log(`Error en el servidor: ${err}`))