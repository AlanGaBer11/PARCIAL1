
function calcularcurp() {
  var nombrex = document.getElementById('nombre').value;
  var apx = document.getElementById('ap').value;
  var amx = document.getElementById('am').value;
  var diax = document.getElementById('dia').value;
  var mesx = document.getElementById('mes').value;
  var aniox = document.getElementById('anio').value;
  var generox = document.getElementById('genero').value;
  var lugarx = document.getElementById('lugar').value;
  var entidad = '';

  if (lugarx === 'Aguascalientes') {
    entidad = 'AS';
  } else if (lugarx === 'Zacatecas') {
    entidad = 'ZC';
  } else if (lugarx === 'Jalisco') {
    entidad = 'JC';
  }

  var curp = apx.substring(0, 2) +
    amx.substring(0, 1) +
    nombrex.substring(0, 1) +
    aniox.substring(2, 4) +
    mesx +
    diax +
    generox.substring(0, 1) +
    entidad;

  alert(curp);

  // Cambiar color de fondo según el género
  if (generox === 'Hombre') {
    document.body.style.backgroundColor = 'lightblue';
  } else if (generox === 'Mujer') {
    document.body.style.backgroundColor = 'pink';
  }

}

function calcularfc() {
  var nombrex = document.getElementById('nombre').value;
  var apx = document.getElementById('ap').value;
  var amx = document.getElementById('am').value;
  var diax = document.getElementById('dia').value;
  var mesx = document.getElementById('mes').value;
  var aniox = document.getElementById('anio').value;
  var generox = document.getElementById('genero').value;
  var rfc = apx.substring(0, 2) +
    amx.substring(0, 1) +
    nombrex.substring(0, 1) +
    aniox.substring(2, 4) + mesx + diax;
  alert(rfc);

  // Cambiar color de fondo según el género
  if (generox === 'Hombre') {
    document.body.style.backgroundColor = 'lightblue';
  } else if (generox === 'Mujer') {
    document.body.style.backgroundColor = 'pink';
  }
}