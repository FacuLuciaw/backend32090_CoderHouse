const {promises:fs} = require ('fs');

class Contenedor {

    static newId = 0;

    constructor(ruta){

        this.ruta = ruta; 

    }

    async guardar(obj){

        let objs = await this.capturarTodo();

        if (objs.lenght == 0){

            Contenedor.newId = 1; 

        }

        else {

            Contenedor.newId++; 

        }

        obj = {id: Date.now(), ...obj}

        let datos = [...objs, obj]

        try {

            await fs.writeFile(this.ruta, JSON.stringify(datos,null,2))

        } catch (error) {

            throw new Error(`Error al guardar los datos ${error}`)

        }

    }

    async capturarPorId(id){

        let objs = await this.capturarTodo();

        let obj = objs.filter(o=>o.id==id)

        if (obj.lenght==0){

            return `No se puede obtener el dato con el id: ${id}`

        }

        return obj

    }

    async capturarTodo(){

        try {

            const objs = await fs.readFile(this.ruta)

            return JSON.parse(objs)

        } catch (error) {

            return []

        }

    }

    async modificarDatos(id, obj){

        let objs = await this.capturarTodo();

        let index = objs.findIndex(o=>o.id==obj.id);

        objs[index]=obj;

        try {

            await fs.writeFile(this.ruta,JSON.stringify(objs, null, 2))


        } catch (error) {

            `no se puede modificar los datos`

        }

    }

    async eliminarUno(id){

        let objs = await this.capturarTodo();

        let obj = objs.filter(o=>o.id!=id)

        try {

            await fs.writeFile(this.ruta, JSON.stringify(obj,null,2))

        } catch (error) {            

            return `No se puede borrar ese registro`

        }

    }

    async eliminarTodo(){

        try {

            await fs.writeFile(this.ruta,JSON.stringify([],null,2))

        } catch (error) {

            return `No se pueden borrar los datos`

        }

    }

}

    let producto = new Contenedor('./productos.json')

    producto.guardar({title: "titulo del producto",price: "precio del producto", thumbnail:"Url de la foto del producto", id: 1 })

    setTimeout(()=>{
        
        // console.log(producto.capturarTodo);

        console.log(producto.capturarPorId(1));

    }, 8000)

    // producto.capturarTodo()

