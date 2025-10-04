// Este codigo originalmente se encontraba en el archivo index.html
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing');
  
  // Guardar en la secuencia
  guardarSecuencia(e.keyCode);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// Codigo de clase
//Hacer sonido en cada tecla
let secuencia = [];
let reproducirBtn = document.getElementById('reproducir-btn');

function guardarSecuencia(codigoTecla) {
  secuencia.push(codigoTecla);
  console.log('Secuencia actual:', secuencia); // Para debug
}

function reproducirSecuencia() {
  if (secuencia.length === 0) {
    alert('No hay secuencia grabada. Toca algunas teclas primero.');
    return;
  }
  
  console.log('Reproduciendo secuencia:', secuencia);
  
  secuencia.forEach((codigoTecla, index) => {
    setTimeout(() => {
      // Reproducir el sonido
      const audio = document.querySelector(`audio[data-key="${codigoTecla}"]`);
      const key = document.querySelector(`.key[data-key="${codigoTecla}"]`);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
      
      // Efecto visual
      if (key) {
        key.classList.add('playing');
      }
      
    }, index * 500); // 500ms entre cada sonido
  });
}

// Boton para limpiar la secuencia
function limpiarSecuencia() {
  secuencia = [];
  console.log('Secuencia limpiada');
}

reproducirBtn.addEventListener('click', reproducirSecuencia);

// Opcional: agregar tecla para limpiar secuencia (tecla C)
window.addEventListener('keydown', function(e) {
  if (e.keyCode === 67) { // Tecla C
    limpiarSecuencia();
  }
});