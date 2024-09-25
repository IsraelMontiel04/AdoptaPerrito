const fotoPerro = document.getElementById("foto-perro");
const noMeGusta = document.getElementById("noMeGusta");
const meGusta = document.getElementById("meGusta");
const pasar = document.getElementById("pasar");
const cargando = document.getElementById("cargando");
const perrosVerde = document.getElementById("perros-verde");
const perrosRojo = document.getElementById("perros-rojo");
const api = "https://dog.ceo/api/breeds/image/random"

perrosVerde.style.display="none";
perrosRojo.style.display="none";
cargando.classList.add("oculto");

fotoPerro.addEventListener("load",()=>{
    fotoPerro.classList.toggle("oculto", false);
    cargando.classList.toggle("oculto", true);
})

noMeGusta.addEventListener("click",()=>{
    gustosPerritos('No');
})

meGusta.addEventListener("click",function(){
    gustosPerritos("Si")
})

async function perritos() {
    try {

        /* cargando.classList.toggle("oculto", false);
        fotoPerro.classList.toggle("oculto", true); */

        cargando.classList.remove("oculto");
        fotoPerro.classList.add("oculto");

        const respuesta = await fetch(api)
        const respuestaJson = await respuesta.json();
        
        fotoPerro.src = respuestaJson.message;
    } catch (error) {
        console.log(error);   
    } finally {
        cargando.classList.add("oculto");
        fotoPerro.classList.remove("oculto");
    }
}

function gustosPerritos(gusto){
    imagen = document.createElement('img')
    imagen.src=fotoPerro.src;
    if(gusto==="Si"){
        perrosVerde.style.display="flex"
        perrosVerde.appendChild(imagen)
    }else{
        perrosRojo.appendChild(imagen);
        perrosRojo.style.display="flex"
    }

    perritos();
}

pasar.addEventListener("click", perritos);
perritos();
