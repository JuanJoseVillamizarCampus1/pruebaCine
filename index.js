//Selectores
const inputNameMovie= document.querySelector('#search')
inputNameMovie.addEventListener('input',getData)


//Funciones
function getData() {
    const nameMovie=document.querySelector('#search')
    const movie=nameMovie.value
    fetch(` http://www.omdbapi.com/?plot=full&s=${movie}&apikey=8bc914e6`)
        .then(respuesta=>{
            console.log(respuesta);
            return respuesta.json()
        })
        .then(datos=>{
            console.log(datos);
            return showmovies(datos)
        })
        .catch()

}
function showmovies(datos) {
    limpiar()
    datos.Search.forEach(dato => {
       const {Year,Type,Poster,Title}=dato
        const movieHTML=document.createElement('p')
        movieHTML.innerHTML=`
        <div class="movie">
            <img src="${Poster}" alt="">
            <h1 class="tittle">${Title}</h1>
            <p class="year"> ${Year}</p>
            
            <a href="#" class="clase">${Type}</a>
        </div>

        `
        document.querySelector('.contenido').appendChild(movieHTML)
    });
    
}
function limpiar(){
    let borrar = document.querySelectorAll('p')
    for (let i = 0; i < borrar.length; i++) {
        borrar[i].remove()
        
    }
}