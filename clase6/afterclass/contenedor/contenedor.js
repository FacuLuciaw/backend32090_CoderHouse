const { json } = require('express');
const {promises:fs} = require('fs')

class Contenedor{

    constructor(ruta){

        this.ruta = ruta;

    }

    async getAll(){

        try {

            let datos = await fs.readFile(this.ruta,'utf-8')

            return datos

        } catch (error) {

            return [{error: error}]

        }

    }

    async getRandom(){

        try {

            let datos = await this.getAll()

            let jsonData = JSON.parse(datos)

            let numRandom = Math.floor(Math.random()*jsonData.lenght)

            return jsonData[numRandom]

        } catch (error) {

        }

    }

}

module.exports = Contenedor
