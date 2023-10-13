//variables

//queriselector toma el id con el #
const carrito = document.querySelector('#carrito')
const listaCursos = document.querySelector('#lista-cursos')
const listaCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
let articulosCarrito = []


//listeners carrito
const cargarListeners = () => {
    //agregar un curso al carrito con el click del boton "agregar al carrito"
    listaCursos.addEventListener('click',agregarCurso)

}


//Funciones

//1. agregar el elemento o curso seleccionado al carrito
const agregarCurso = (e) => {
    e.preventDefault()

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement

        leerDatosCurso(cursoSeleccionado)
    }
}

//2. leer elemento al cual se activo el evento click y extraer informacion
const leerDatosCurso = (curso) => {

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Agregar elementos del dato curso al carrito
    articulosCarrito = [...articulosCarrito,infoCurso]
    carritoHTML()
    console.log(articulosCarrito)
}

//3. se muestra el html basado en el carrito de compras
const carritoHTML = () => {
    //limpiar el html
    limpiarHTML()

    //recorre el carrito y genera el html
    articulosCarrito.forEach ( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso
        const row = document.createElement('tr')
        row.innerHTML = `
            <td> <img src='${imagen}' width='100'> </td>
            <td> ${titulo} </td>
            <td> ${precio} <td>
            <td> ${cantidad} </td>
            <td> <a href="#" class="borrar-curso" data-id="${id}"> x </a> </td>
        `;

        //Agregar el html del carrito en el tbody
        listaCarrito.appendChild(row)
    })
}


//4. eliminar los cursos del tbody
const limpiarHTML = () => {
   //una fomra de limpiar es con listaCarrito.innerHTML = ''

   //forma de eliminar mas optimizada
    while( listaCarrito.firstChild ){
        listaCarrito.removeChild ( listaCarrito.firstChild )
    }
}




// llamar funciones
cargarListeners()