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
    var idiomas = document.getElementById("idiomas");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    var distancia_idiomas = window.innerHeight - idiomas.getBoundingClientRect().top;

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

    if(distancia_idiomas >= 300){
        let habilidades_idiomas = document.querySelectorAll("#idiomas .progreso");
        habilidades_idiomas[0].classList.add("ingles");
        habilidades_idiomas[1].classList.add("espanol");
        habilidades_idiomas[2].classList.add("frances");
    }
}
function descargarCV() {
    // Reemplaza 'ruta/al/curriculum.pdf' con la ruta real a tu archivo PDF
    var pdfUrl = 'ruta/al/curriculum.pdf';
    
    // Crea un elemento <a> temporal
    var link = document.createElement('a');
    link.href = pdfUrl;
    
    // Establece el nombre del archivo para la descarga
    link.download = 'file:///D:/des/PAPELES_TRABAJO/Hipster_CV.pdf';
    
    // Añade el enlace al documento y simula un clic
    document.body.appendChild(link);
    link.click();
    
    // Limpia el elemento creado
    document.body.removeChild(link);
  }
const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showItem(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
}

nextBtn.addEventListener('click', nextItem);
prevBtn.addEventListener('click', prevItem);

// Auto-scroll
setInterval(nextItem, 5000);
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}