
const contenedor = document.querySelector('tbody');
const tabla =  document.getElementById('tablaproductos');
let productos=[];
let fila = 0;
const modalProductos = new bootstrap.Modal(document.getElementById('modal_producto'));
const formProducto = document.querySelector('form');
const idproduct = document.getElementById('idproducto');
const nom = document.getElementById('producto');
const cant = document.getElementById('cantidad');
const preci = document.getElementById('precio');
let opcion = '';


btncreate.addEventListener('click',() =>{
    idproduct.value= '';
    nom.value= '';
    cant.value= '';
    preci.value= '';
    modalProductos.show();
    opcion = 'crear';
})


//mostrar

function mostrar(){
    console.log('Mostrando lista de producutos...');
    let subt = 0;
let descuento = 0;
let total = 0;
    let resultados = '';
    for(let producto of productos){
        console.log(producto);
        resultados += `<tr>
       <td>${producto.idproducto}</td>
       <td>${producto.nombre}</td>
       <td>${producto.cantidad}</td>
       <td>${producto.precio}</td>
       <td class = "text-center"><a class="btnEditar  btn btn-primary ">Editar</a><a class="btnEliminar  btn btn-danger">Eliminar</a></td>
      </tr>
     `;

     subt = subt + (producto.cantidad*producto.precio);
     descuento = descuento1(subt);
     total = subt - descuento; 
     
    }

    txt = `<div">
    <li>Subtotal: ${subt}</li>
    <li>Descuento: ${descuento}</li>
    <li>total: ${total}</li>
    </div>`;
    console.log(productos);
    contenedor.innerHTML = resultados;
    document.getElementById('total').innerHTML=txt;

}

/*const mostrar = (productos) => {
    productos.forEach(producto => {
      resultados += `<tr> 
      
      <td>${producto.idproducto}</td>
      <td>${producto.nombre}</td>
      <td>${producto.cantidad}</td>
      <td>${producto.precio}</td>
      <td class = "text-center"><a class="btnEditar  btn btn-primary ">Editar</a><a class="btnEliminar  btn btn-danger">Eliminar</a></td>
      </tr>`
      subt = subt + (producto.cantidad*producto.precio);
      descuento = descuento1(subt);
      total = subt - descuento; 
    })
    txt = `<div>
    <li>Subtotal: ${subt}</li>
    <li>Descuento: ${descuento}</li>
    <li>total: ${total}</li>`
    
    console.log(productos);
    contenedor.innerHTML = resultados;
    document.getElementById('total').innerHTML=txt;
}
*/

//Ingresar & Editar

formProducto.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(opcion=='crear'){
      const idproduct = document.getElementById('idproducto');
      const nom = document.getElementById('producto');
      const cant = document.getElementById('cantidad');
      const preci = document.getElementById('precio');
      const prod= new Producto(idproduct.value,nom.value,cant.value,preci.value);
      productos.push(prod);
      mostrar();
      console.log("Hola");
    }
    if(opcion =='editar'){
        const idproduct = document.getElementById('idproducto');
        const nom = document.getElementById('producto');
        const cant = document.getElementById('cantidad');
        const preci = document.getElementById('precio');
        const product = new Producto(idproduct.value, nom.value, cant.value, preci.value);
        productos[fila] = product;
        mostrar();
      
     console.log("asdsadada")
    }
  
    modalProductos.hide();
  
  })
  
  

//eliminar

const on = (element,event,selector,handler)=>{
    console.log(handler)
    element.addEventListener(event,e =>{
       if(e.target.closest(selector)){
        handler(e)
       }
    })
}



on(document,'click', '.btnEliminar',e => {
    const fila = e.target.parentNode.parentNode; //-obtener el hijo del padre
    const fila2 = e.target.parentNode.parentNode.rowIndex; //obtener la posicion de la fila
    const id = fila.firstElementChild; //obtiene el dato de la tabla
    console.log(id);
    alertify.confirm('Eliminar Producto', 'Seguro de Eliminar este producto?', 
    function()
    { 
       
        eliminar(id);
        tabla.deleteRow(fila2);
        resultados = '';
        mostrar();

    }
    , function()
    { alertify.error('Cancel')});
})

function eliminar(id) {
    console.log("se presiono eliminar-->");
    productos.splice(productos.findIndex(i => i.idproducto==id),1);
}


//editar
on(document,'click', '.btnEditar',e => {
    const fila2 = e.target.parentNode.parentNode; //obtener la posicion de la fila
    fila = e.target.parentNode.parentNode.rowIndex - 1;
    let producto = productos[fila];
    producto.idproducto = fila2.children[0].innerHTML;
    producto.producto = fila2.children[1].innerHTML;
    producto.cantidad= fila2.children[2].innerHTML;
    producto.precio = fila2.children[3].innerHTML;
    opcion='editar';
    modalProductos.show();
   
})


function descuento1(a){
    var descuentoaux = 0;
    var aux = 0;
    if (a > 0 && a <=10){
        descuentoaux = a * 0;
        aux = descuentoaux.toFixed(2);
    }
    if(a > 10 && a <=30){
        descuentoaux = a * 0.05;
        aux = descuentoaux.toFixed(2);
    }
    if(a > 30){
        descuentoaux = a * 0.1;
        aux = descuentoaux.toFixed(2);
    }
    return aux;
}






