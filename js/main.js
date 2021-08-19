//Se crean las variables que van a tomar los valores de los inputs
//Variables de las seccion de valores de entrada

let valorInmueble = document.getElementById('valorInmueble');
let cuotaI = document.getElementById('cuotaI');
let separacion = document.getElementById('separacion');
let cuotas = document.getElementById('cuotas');

//Varaibles de la seccion en la que se muestran los valores
let cuotaInicial = document.getElementById('cuotaInicial');
let cuotaSeparacion = document.getElementById('cuotaSeparacion');
let cuota = document.getElementById('cuota');
let financiado = document.getElementById('financiado');


function calcular() {
    //formula para hallar el valor de cuota inicial
    let vi = parseFloat(valorInmueble.value);
    let ci = parseInt(cuotaI.value) / 100;
    let se = parseFloat(separacion.value);
    let cu = parseInt(cuotas.value);

    let valorCuotaI = vi * ci;
    let valorcuotaSepracion = valorCuotaI - se;
    let valorCuota = valorcuotaSepracion / cu;
    let valorFinanciado = vi - valorCuotaI;

    //se envian valores a html
    cuotaInicial.innerHTML = valorCuotaI;
    cuotaSeparacion.innerHTML = valorcuotaSepracion;
    cuota.innerHTML = Math.round(valorCuota);
    financiado.innerHTML = valorFinanciado;

    console.log(vi);
    console.log(ci);
    console.log(se);
    console.log(cu);

    console.log(valorCuotaI);
    console.log(valorcuotaSepracion);
    console.log(valorCuota);
    console.log(valorFinanciado);


}