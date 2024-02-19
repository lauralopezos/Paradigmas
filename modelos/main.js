function abrirBuscador() {
  var radios = document.getElementsByName('hobby');
  var hobbySeleccionado = false;

  // Verificar si algún botón de radio está seleccionado
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          hobbySeleccionado = radios[i].id;
          localStorage.setItem('hobbySeleccionado', hobbySeleccionado)
          break
          
      }
  }

  // Redirigir solo si se ha seleccionado un hobby
  if (hobbySeleccionado) {
      window.location.href = 'buscador.html';
  } else {
      alert('Por favor, selecciona un hobby antes de continuar.');
  }
}
function definirHobbySeleccionado(){

  var hobbySeleccionado = localStorage.getItem('hobbySeleccionado');
  
  // Verificar si hay un hobby almacenado
  if (hobbySeleccionado) {
      // Utilizar el hobby como título de la página
      document.title = hobbySeleccionado;
  
      // También podrías insertar el hobby en el contenido de la página
      var contenido = document.createElement('div');
      contenido.innerHTML = 'Has seleccionado el hobby: ' + hobbySeleccionado;
      document.body.appendChild(contenido);
  } else {
      // Manejar el caso en el que no se haya seleccionado un hobby
      alert('No se ha seleccionado un hobby.');
  }
}

const placeInput = document.getElementById("place-input");
let map;
let autocomplete;
window.initMap = function (){
  const coords = {lat:1000 , lng: 12140};
  map = new google.maps.Map(document.getElementById("map"),{
    zoom : 6,
    center: coords,
  } );
  const marker = new google.maps.Marker({
    position: coords,
    map,
  });
  searchGoogleMap();
};
const searchGoogleMap = () => {
  autocomplete = new google.maps.places.Autocomplete(placeInput);
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    map.setCenter(place.geometry.location);
    map.setZoom(13);
  })
}
