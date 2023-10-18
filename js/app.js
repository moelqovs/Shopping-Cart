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
    listaCursos.addEventListener('click', agregarCurso)

    //eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso)
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

    //revisar si un elemento ya existe en el carrito
    const existe = articulosCarrito.some ( curso => curso.id === infoCurso.id )
    
    if (existe){
        //actualizar cantidad de elementos
        const cursos = articulosCarrito.map ( curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++
                return curso //retorna objeto actualizado
            }else{
                return curso //retorna objetos no duplicados
            }
        })
        articulosCarrito = [...cursos]
    }else{
        //Agregar elementos del dato curso al carrito
        articulosCarrito = [...articulosCarrito,infoCurso]
    }

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


//eliminar un curso de carrtito
const eliminarCurso = (e) => {
    
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')

        //eliminar del arreglo por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

        carritoHTML() //iterar carrito de nuevo  y mostrar en el html
    }
}


// llamar funciones
cargarListeners()