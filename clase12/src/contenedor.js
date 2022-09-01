class Contenedor {
  constructor(route) {
    this.route = route;
    this.products = [];
  }

  getAll() {
    return this.products;
  }
  save(obj) {
    obj.id = !this.products.length ? 1 : parseInt(this.products[this.products.length - 1].id) + 1;
    this.products.push(obj);
    return obj
  }

  getById(id) {
    return this.products.find((product) => product.id == id);
  }

  updateProduct(id, obj) {
    const productIndex = this.products.findIndex(product => product.id == id);
    
    if (productIndex != -1) {
      this.products[productIndex].title = obj.title || this.products[productIndex].title;
      this.products[productIndex].price = obj.price || this.products[productIndex].price;
      this.products[productIndex].thumbnail = obj.thumbnail || this.products[productIndex].thumbnail;
      return this.products[productIndex];
    }
    return false;
  }

  deleteById(id) {
    const index = this.products.findIndex(prod=>prod.id == id)
    if(index != -1){
      this.products = this.products.filter((product) => (product.id != id));
      return true
    }
    return false
  }
}
const products = new Contenedor('./src/products.txt');

products.save({title: 'Escuadra', price: 25000, thumbnail:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-GFTwz14wcpwjuryhw6T7gdNO6ToGukprXVDmXxiDQmG3MQzLhEip99VcH7To-P_CF6pHgltZTGw&usqp=CAc"})
products.save({title: 'Calculadora', price: 24000, thumbnail:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBLCa50TIyiIhOjdCXcYo59z-3rsXNyztgsJBQ6Mks_-XYdpQBZWWjqYaRi_sPmXwdrMrOTLTegDb2&usqp=CAc"})
products.save({title: 'Globo Terráqueo', price: 23000, thumbnail:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFGB0Ki7J2EW3IzR7F0uuEFbFJO06SWtHFL5R6PsblyAhbLqgryPOYhifoIe9p&usqp=CAc'})

module.exports = products;
