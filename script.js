let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("matlab");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("illustrator");
        habilidades[3].classList.add("coreldraw");
        habilidades[4].classList.add("solidworks");
        habilidades[5].classList.add("ansys");
        habilidades[6].classList.add("labview");
        habilidades[7].classList.add("arduino");
        habilidades[8].classList.add("iot");
        habilidades[9].classList.add("cadcam");
        habilidades[10].classList.add("plc");
        habilidades[11].classList.add("comunicacion");
        habilidades[12].classList.add("trabajo");
        habilidades[13].classList.add("creatividad");
        habilidades[14].classList.add("dedicacion");
        habilidades[15].classList.add("proyect");
    }
}
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        // ... (tus habilidades existentes)
        habilidades[16].classList.add("ingles");
        habilidades[17].classList.add("espanol");
        habilidades[18].classList.add("frances");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 