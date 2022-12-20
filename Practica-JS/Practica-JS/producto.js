class Producto{
    constructor(idproducto,nombre,cantidad,precio)
    {
      this.idproducto=idproducto;
      this.nombre=nombre;
      this.cantidad=cantidad;
      this.precio=precio;
    }

    get IDproducto (){
        return this.IDproducto;
    }

    set IDproducto(idproducto){
        this.IDproducto=idproducto;
    }
    get Nombre (){
        return this.nombre;
    }

    set Nombre(nombre){
        this.nombre=nombre;
    }
    get Cantidad (){
        return this.cantidad;
    }

    set Cantidad(cantidad){
        this.cantidad=cantidad;
    }
    get Precio (){
        return this.precio;
    }

    set Precio(precio){
        this.IDproducto=precio;
    }

    
}