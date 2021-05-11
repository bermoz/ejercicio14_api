function traer(){
    var contenido = document.querySelector("#contenido");    
    fetch('texto.txt')
    .then(res => res.text())
    .then(data =>{
        //console.log(data)
        contenido.innerHTML = data;
    });
}

function traerJson(){
    var contenido1 = document.querySelector("#contenido1");
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data =>{
       // console.log(data.results['0'].name);
        var nombre = "<p>Nombre: " + data.results['0'].name.title + " " + data.results['0'].name.first + " " + data.results['0'].name.last; + "</p>"
        var foto ="<img src=" + data.results['0'].picture.large + " alt='Foto' width='100px' class ='img-fluid rounded-circle'>"
        var correo = "<p>Email: " + data.results['0'].email + "</p>"
        contenido1.innerHTML = foto +  nombre + correo;
    });
}

function traerPerro(){
    var contenido2 = document.querySelector("#contenido2");
    fetch("https://dog.ceo/api/breeds/image/random/3")
    .then(res => res.json())
    .then(data =>{
    //   console.log(data.message);
        var foto1 ="<img src=" + data.message['0'] + " alt='Foto1' width='80px' class ='img-fluid rounded '>"
        var foto2 ="<img src=" + data.message['1'] + " alt='Foto2' width='80px' class ='img-fluid rounded '>"
        var foto3 ="<img src=" + data.message['2'] + " alt='Foto3' width='80px' class ='img-fluid rounded '>"
        contenido2.innerHTML = foto1 + " " + foto2 + " " + foto3;
    });
}

function traerPais(mpais){
    var contenido3 = document.querySelector("#contenido3");     
    url = "https://restcountries.eu/rest/v2/name/" + mpais;
    fetch(url)
    .then(res =>  res.json())
    .then(pais =>{
        //datos= JSON.parse(JSON.stringify(pais))
      //  console.log(pais);
      var nombre = "<p>Pais: " + pais['0'].name + " " + "</p>";
      var poblacion = "<p>Población: " + pais['0'].population + "</p>";
      var capital = "<p>Capital: " + pais['0'].capital + "</p>";
      var bandera ="<img src=" + pais['0'].flag + " alt='Bandera' width='100px' class ='img-fluid rounded-0'>";
        var area = "<p>Superficie: " + pais['0'].area + "Kms </p>";
        contenido3.innerHTML = nombre + capital + poblacion + area + bandera ;
    });
}

function traerPerro2(){
    var contenido4 = document.querySelector("#contenido4");
    fetch("perros.json")
    .then(res => res.json())
    .then(data =>{
    //   console.log(data.message);
        var foto1 ="<img src=" + data.message['0'] + " alt='Foto1' width='80px' class ='img-fluid rounded '>"
        var foto2 ="<img src=" + data.message['1'] + " alt='Foto2' width='80px' class ='img-fluid rounded '>"
        var foto3 ="<img src=" + data.message['2'] + " alt='Foto3' width='80px' class ='img-fluid rounded '>"
        contenido4.innerHTML = foto1 + " " + foto2 + " " + foto3;
    });
}

function traerNotas(){
    var contenido5 = document.querySelector("#contenido5");    
    fetch('Notas_APIS.txt')
    .then(res => res.text())
    .then(data =>{
        //console.log(data)
        contenido5.innerHTML = data;
    });
}