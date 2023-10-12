//variables

//queriselector toma el id con el #
const carrito = document.querySelector('#carrito')
const listaCursos = document.querySelector('#lista-cursos')
const listaCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')



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
    console.log(curso)

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAtribute('data-id'),
    }

}




// llamar funciones
cargarListeners()