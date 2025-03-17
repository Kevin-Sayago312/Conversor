const valor = document.getElementById("valor");
// detecto el evento cuando se escribe un numero
// y llamo a la funcion CONVERTIR

valor.addEventListener("keyup", convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");
//detecto el evento cuando se selecciona una unidad
unidad1.addEventListener("change", convertir);

unidad2 = document.getElementById("unidad2");
//detecto el evento cuando se selecciona una unidad
unidad2.addEventListener("change", convertir);

//variable donde se calculara el resultado
var resultado;

//funcion que realiza el calculo
function convertir() {
  //caso de que no haya nada en el input
  if (valor.value == "") {
    return;
  }
  //tomo el numero del input y lo convierto a numerico
  numero = valor.value;
  numero = parseFloat(numero);

  // INICIO DE CALCULO DE LONGITUD

  //Calculo de kilometro a kilometro
  if (unidad1.value == "kilometro1" && unidad2.value == "kilometro1") {
    resultado = numero * 1;
    txtResultado.innerHTML =
      numero + " Kilómetro(s) equivalen a " + resultado + " kilómetro(s)";
  }
  //Calculo de kilometro a metro
  if (unidad1.value == "kilometro1" && unidad2.value == "metro1") {
    resultado = numero * 1000;
    txtResultado.innerHTML =
      numero + " Kilómetros(s) equivalen a " + resultado + " metros(s)";
  }
  //Calculo de kilometro a centimetro
  if (unidad1.value == "kilometro1" && unidad2.value == "centimetro1") {
    resultado = numero * 100000;
    txtResultado.innerHTML =
      numero + " Kilómetros(s) equivalen a " + resultado + " centímetros(s)";
  }

  //Calculo de metro a metro
  if (unidad1.value == "metro1" && unidad2.value == "metro1") {
    resultado = numero * 1;
    txtResultado.innerHTML =
      numero + " Metro(s) equivalen a " + resultado + " metro(s)";
  }
  //Calculo de metro a kilometro
  if (unidad1.value == "metro1" && unidad2.value == "kilometro1") {
    resultado = numero / 1000;
    txtResultado.innerHTML =
      numero + " Metro(s) equivalen a " + resultado + " kilómetro(s)";
  }
  //Calculo de metro a centimetros
  if (unidad1.value == "metro1" && unidad2.value == "centimetro1") {
    resultado = numero * 100;
    txtResultado.innerHTML =
      numero + " Metro(s) equivalen a " + resultado + " centímetros(s)";
  }

  //Calculo de centimetro a centimetro
  if (unidad1.value == "centimetro1" && unidad2.value == "cecntimero1") {
    resultado = numero * 1;
    txtResultado.innerHTML =
      numero + " Centímetro(s) equivalen a " + resultado + " centímetro(s)";
  }
  //Calculo de centimetro a metro
  if (unidad1.value == "centimetro1" && unidad2.value == "metro1") {
    resultado = numero / 100;
    txtResultado.innerHTML =
      numero + " Centímetro(s) equivalen a " + resultado + " metro(s)";
  }
  //Calculo de centimetro a kilometro
  if (unidad1.value == "centimetro1" && unidad2.value == "kilometro1") {
    resultado = numero / 100000;
    txtResultado.innerHTML =
      numero + " Centímetro(s) equivalen a " + resultado + " kilométro(s)";
  }

  // INICIO DE CALCULO DE VOLUMEN
  //Calculo de litro a litro
  if (unidad1.value == "litro" && unidad2.value == "litro") {
    resultado = numero * 1;
    txtResultado.innerHTML =
      numero + " Litro(s) equivalen a " + resultado + " litro(s)";
  }
  //Calculo de litro a mililitro
  if (unidad1.value == "litro" && unidad2.value == "mililitro") {
    resultado = numero * 1000;
    txtResultado.innerHTML =
      numero + " Litro(s) equivalen a " + resultado + " mililitro(s)";
  }

  //Calculo de mililitro a mililitro
  if (unidad1.value == "mililitro" && unidad2.value == "mililitro") {
    resultado = numero * 1;
    txtResultado.innerHTML =
      numero + " Mililitro(s) equivalen a " + resultado + " mililitro(s)";
  }
  //Calculo de mililitro a litro
  if (unidad1.value == "mililitro" && unidad2.value == "litro") {
    resultado = numero / 1000;
    txtResultado.innerHTML =
      numero + " Mililitro(s) equivalen a " + resultado + " litro(s)";
  }

  // INICIO DE CALCULO DE TEMPERATURA
  //Calculo de celcius a celcius
  if (unidad1.value == "celsius" && unidad2.value == "celsius") {
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " grados Celsius(s) equivalen a " + resultado + " grados celcius(s)";
  }
  //Calculo de celcius a Fahrenheit
  if (unidad1.value == "celsius" && unidad2.value == "fahrenheit") {
    resultado = numero * 9 / 5 + 32;
    txtResultado.innerHTML = numero + " grados Celsius(s) equivalen a " + resultado + " grados fahrenheit(s)";
  }

  //Calculo de celcius a kelvin
  if (unidad1.value == "celsius" && unidad2.value == "kelvin") {
    resultado = numero + 273.15;
    txtResultado.innerHTML = numero + " grados Celsius(s) equivalen a " + resultado + " grados kelvin(s)";
  }


  //Calculo de kelvin a kelvin
  if (unidad1.value == "kelvin" && unidad2.value == "kelvin") {
    resultado = numero * 273.15;
    txtResultado.innerHTML = numero + " grados Celsius(s) equivalen a " + resultado + " grados celcius(s)";
  }
  //Calculo de celcius a Fahrenheit
  if (unidad1.value == "kelvin" && unidad2.value == "fahrenheit") {
    resultado = ((numero - 273.15) * 9 / 5) + 32;
    txtResultado.innerHTML = numero + " grados Celsius(s) equivalen a " + resultado + " grados fahrenheit(s)";
  }

  //Calculo de celcius a kelvin
  if (unidad1.value == "kelvin" && unidad2.value == "celsius") {
    resultado = numero - 273.15;
    txtResultado.innerHTML = numero + " grados Celsius(s) equivalen a " + resultado + " grados kelvin(s)";
  }



  //Calculo de Fahrenheit a Fahrenheit
  if (unidad1.value == "fahrenheit" && unidad2.value == "fahrenheit") {
    resultado = numero * 32;
    txtResultado.innerHTML = numero + " grados Fahrenheit(s) equivalen a " + resultado + " grados fahrenheit(s)";
  }
  //Calculo de Fahrenheit a celsius
  if (unidad1.value == "fahrenheit" && unidad2.value == "celsius") {
    resultado = ((numero-32)*5)/9;
    txtResultado.innerHTML = numero + " grados Fahrenheit(s) equivalen a " + resultado + " grados celsius(s)";
  }

  //Calculo de Fahrenheit a kelvin
  if (unidad1.value == "fahrenheit" && unidad2.value == "kelvin") {
    resultado = ((numero-32)*5)/9 + 273.15;
    txtResultado.innerHTML = numero + " grados Fahrenheit(s) equivalen a " + resultado + " grados kelvin(s)";
  }



  // INICIO DE CALCULO DE VELOCIDAD
  //Calculo de kilometro a kilometro 
  if (unidad1.value == "kilometro" && unidad2.value == "kilometro") {
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " Kilómetro(s)/h equivalen a " + resultado + " kilómetro(s)/s";
  }
  //Calculo de kilometro a metro
  if (unidad1.value == "kilometro" && unidad2.value == "metro") {
    resultado = numero / 3.6;
    txtResultado.innerHTML = numero + " Kilómetro(s)/h equivalen a " + resultado + " metro(s)/s";
  }

  //Calculo de kilometro a milla 
  if (unidad1.value == "kilometro" && unidad2.value == "milla") {
    resultado = numero / 1.609;
    txtResultado.innerHTML = numero + " Kilómetro(s)/h equivalen a " + resultado + " milla(s)/h";
  }

  //Calculo de kilometro a pie
  if (unidad1.value == "kilometro" && unidad2.value == "pie") {
    resultado = numero / 1.097;
    txtResultado.innerHTML = numero + " Kilómetro(s)/h equivalen a " + resultado + " pie(s)/s";
  }


  //Calculo de metro a metro 
  if (unidad1.value == "metro" && unidad2.value == "metro") {
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " Metro(s)/s equivalen a " + resultado + " metro(s)/s";
  }
  //Calculo de metro a kilometro
  if (unidad1.value == "metro" && unidad2.value == "kilometro") {
    resultado = numero * 3.6;
    txtResultado.innerHTML = numero + " Metro(s)/s equivalen a " + resultado + " kilómetro(s)/h";
  }

  //Calculo de metro a milla 
  if (unidad1.value == "metro" && unidad2.value == "milla") {
    resultado = numero * 2.237;
    txtResultado.innerHTML = numero + " Metro(s)/s equivalen a " + resultado + " milla(s)/h";
  }

  //Calculo de metro a pie
  if (unidad1.value == "metro" && unidad2.value == "pie") {
    resultado = numero * 3.281;
    txtResultado.innerHTML = numero + " Metro(s)/s equivalen a " + resultado + " pie(s)/s";
  }


    //Calculo de milla a milla 
    if (unidad1.value == "milla" && unidad2.value == "milla") {
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Milla(s)/h equivalen a " + resultado + " milla(s)/h";
      }
      //Calculo de milla a kilometro
      if (unidad1.value == "milla" && unidad2.value == "kilometro") {
        resultado = numero * 1.609;
        txtResultado.innerHTML = numero + " Milla(s)/h equivalen a " + resultado + " kilómetro(s)/h";
      }
    
      //Calculo de milla a metro 
      if (unidad1.value == "milla" && unidad2.value == "metro") {
        resultado = numero / 2.237;
        txtResultado.innerHTML = numero + " Milla(s)/h equivalen a " + resultado + " metro(s)/s";
      }
    
      //Calculo de milla a pie
      if (unidad1.value == "milla" && unidad2.value == "pie") {
        resultado = numero * 1.467;
        txtResultado.innerHTML = numero + " Milla(s)/h equivalen a " + resultado + " pie(s)/s";
      }



      //Calculo de pie a milla 
    if (unidad1.value == "pie" && unidad2.value == "milla") {
        resultado = numero / 1.467;
        txtResultado.innerHTML = numero + " Pie(s)/s equivalen a " + resultado + " milla(s)/h";
      }
      //Calculo de pie a kilometro
      if (unidad1.value == "pie" && unidad2.value == "kilometro") {
        resultado = numero * 1.097;
        txtResultado.innerHTML = numero + " Pie(s)/s equivalen a " + resultado + " kilómetro(s)/h";
      }
    
      //Calculo de pie a metro 
      if (unidad1.value == "pie" && unidad2.value == "metro") {
        resultado = numero / 3.281;
        txtResultado.innerHTML = numero + " Pie(s)/s equivalen a " + resultado + " metro(s)/s";
      }
    
      //Calculo de pie a pie
      if (unidad1.value == "pie" && unidad2.value == "pie") {
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Pie(s)/s equivalen a " + resultado + " pie(s)/s";
      }
}
