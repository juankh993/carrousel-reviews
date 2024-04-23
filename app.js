
const persons = [
    { 
        id:                 1,
        name:           "Alfonso",
        lastName:       "Chavarro",
        image:          "./img/lady-escabia.jpg",
        job:            "HTML Developer",
        description:    "Alfonso Su pasión por la tecnología se refleja en su trabajo, donde la innovación y la atención al detalle se fusionan para crear experiencias memorables para los usuarios. Desde sitios web complejos hasta aplicaciones web dinámicas, Alfonso tiene la habilidad de convertir ideas en realidades tangibles"
    },
    {
        id:                 2,
        name:           "Jair",
        lastName:       "Montenegro",
        image:          "./img/person-horse.jpg",
        job:            "Front End",
        description:    "Jair, con su mente analítica y su pasión por el código, teje la magia del HTML. Domina el lenguaje que da vida a las páginas web, esculpiendo estructuras sólidas y elegantes."
    },
    {
        id:                 3,
        name:           "Isabella",
        lastName:       "Garzon",
        image:          "./img/woman-2.jpg",
        job:            "Diseñadora Gráfica",
        description:    "Isabella, con su mente analítica y su pasión por el código, teje la magia del HTML. Domina el lenguaje que da vida a las páginas web, esculpiendo estructuras sólidas y elegantes."
    },
    {
        id:                 4,
        name:           "Diana Marcela",
        lastName:       "Hincapie",
        image:          "./img/woman-3.jpg",
        job:            "Contadora Publica",
        description:    "Diana Marcela, es una contadora pública que emerge como la tejedora de certezas financieras y la arquitecta de la estabilidad económica. Con su destreza analítica y su dominio de los números, traza el camino hacia el éxito empresarial, asegurando que cada cifra, cada transacción, esté en perfecta armonía con las normativas vigentes y las metas financieras de la organización."
    },
    {
        id:                 5,
        name:           "Yamileth",
        lastName:       "Garzón",
        image:          "./img/woman.jpg",
        job:            "Litografa Profesional",
        description:    "Yamileth, es una profesional en litografía, donde deja volar su mente, sacando a la luz excelentes obras de arte, ademas, de mantener a sus cliente contentos con su trabajo debido a la alta calidad en sus textos eilustraciones."
    },
];

const namePerson = document.getElementById("name-person");
const imgPerson = document.getElementById("img-person");
const jobTitle = document.getElementById("job-title");
const description = document.getElementById("decription-person");
const btnPrev = document.querySelector(".prev-btn");
const btnNext = document.querySelector(".next-btn");
const btnSurprise = document.querySelector(".btn-surprise");

let currentItem = 0;

//window.addEventListener("DOMContentLoaded", function() {
function showPerson(currentItem){
    const personsItem = persons[currentItem];
    imgPerson.src = personsItem.image;
    namePerson.textContent = personsItem.name + " " + personsItem.lastName;
    jobTitle.textContent = personsItem.job;
    description.textContent = personsItem.description;
    currentItem++;
};

//});

btnPrev.addEventListener("click", function(){
    currentItem--;
    //El if valida si se ha superado el limite del array se establece en 0
    if (currentItem < 0) {
        currentItem = persons.length - 1;
        
    }
    console.log(currentItem);
    showPerson(currentItem);

});
btnNext.addEventListener("click", function(){
    currentItem++;
    if (currentItem > persons.length - 1) {
        currentItem = 0;
    }
    console.log(currentItem);
    showPerson(currentItem);
});

btnSurprise.addEventListener("click" , function(){
    currentItem = Math.floor(Math.random() * persons.length);
    showPerson(currentItem);
});
