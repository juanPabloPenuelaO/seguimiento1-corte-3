
class Vehiculo {
    constructor(marca, precio, disponibilidad, caracteristicas) {
      this.marca = marca;
      this.precio = precio;
      this.disponibilidad = disponibilidad;
      this.caracteristicas = caracteristicas;
    }
  }
  

  class Alquiler {
    constructor(vehiculo, dias) {
      this.vehiculo = vehiculo;
      this.dias = dias;
    }
  

    calcularCosto() {
      let costo = this.vehiculo.precio * parseInt(this.dias);
      if (this.vehiculo.disponibilidad == false) {
        costo += 10000; 
      }
      return costo;
    }
  }

  const ferrari = new Vehiculo("Ferrari", 50000, true, "rojo");
  const lamborghini = new Vehiculo("Lamborghini", 60000, true, "negro");
  const ford = new Vehiculo("Ford", 25000, true, "blanco");

  let eleccion = prompt("Seleccione un vehículo\n1. Ferrari\n2. Lamborghini\n3. Ford\n4. salir");
  
  let vehiculoElegido;
  switch (eleccion) {
    case "1":
      vehiculoElegido = ferrari;
      break;
    case "2":
      vehiculoElegido = lamborghini;
      break;
    case "3":
      vehiculoElegido = ford;
      break;
      case "4": alert("Hasta luego!!")
    default:
      alert("no elegiste un carro");
      break;
  }
  
  if (vehiculoElegido) {
    let dias = parseInt(prompt("Por cuántos días desea alquilar el " + vehiculoElegido.marca + "?"));
    if (!isNaN(dias)) {
      let alquiler = new Alquiler(vehiculoElegido, dias);
      let costo = alquiler.calcularCosto();
      alert("El costo del alquiler es: " + costo);
    } else {
      alert("Ingrese un número válido para los días de alquiler");
    }
  }
  
