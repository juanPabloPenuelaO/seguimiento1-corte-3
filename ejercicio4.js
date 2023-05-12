class Tren {
    constructor(capacidadTotal, precioTiquete) {
      this.capacidadTotal = capacidadTotal;
      this.asientosDisponibles = capacidadTotal;
      this.asientosReservados = 0;
      this.precioTiquete = precioTiquete;
    }
  
    verificarDisponibilidad() {
      return this.asientosDisponibles;
    }
  
    reservarAsiento() {
      if (this.asientosDisponibles > 0) {
        this.asientosDisponibles--;
        this.asientosReservados++;
        return true;
      } else {
        return false;
      }
    }
  }
  
  class Usuario {
    constructor(nombre, edad, correoElectronico, formaDePago) {
      this.nombre = nombre;
      this.edad = edad;
      this.correoElectronico = correoElectronico;
      this.formaDePago = formaDePago;
    }
  }
  
  class Tiquete {
    constructor(numeroAsiento, precio, horaSalida, estacionOrigen, estacionDestino) {
      this.numeroAsiento = numeroAsiento;
      this.precio = precio;
      this.horaSalida = horaSalida;
      this.estacionOrigen = estacionOrigen;
      this.estacionDestino = estacionDestino;
    }
  }
  
  function mostrarMenu() {
    const opcion = prompt(`Seleccione una opción:
    1. Verificar disponibilidad
    2. Reservar asientos
    3. Salir`);
    switch (opcion) {
      case '1':
        alert(`Hay ${tren.verificarDisponibilidad()} asientos disponibles`);
        mostrarMenu();
        break;
      case '2':
        realizarReserva();
        mostrarMenu();
        break;
      case '3':
        alert('Gracias por utilizar nuestro servicio de reservas');
        break;
      default:
        alert('Opción no válida. Por favor seleccione una opción válida');
        mostrarMenu();
    }
  }
  
  function realizarReserva() {
    const disponibilidad = tren.verificarDisponibilidad();
    if (disponibilidad > 0) {
      const confirmacion = confirm(`Hay ${disponibilidad} asientos disponibles. ¿Desea reservar uno?`);
      if (confirmacion) {
        tren.reservarAsiento();
        alert('Reserva exitosa');
        const numeroAsiento = tren.capacidadTotal - tren.asientosDisponibles;
        const tiquete = new Tiquete(numeroAsiento, tren.precioTiquete, '09:00', 'Estación A', 'Estación B');
        console.log('Tiquete:', tiquete);
      } else {
        alert('Reserva cancelada');
      }
    } else {
      alert('No hay asientos disponibles');
    }
  }
  
  const capacidadTotal = 50
  const precioTiquete = alert("El precio del tiquete es de $10.000")
  const tren = new Tren(Number(capacidadTotal), Number(precioTiquete));
  
  const nombre = prompt('Ingrese su nombre:');
  const edad = prompt('Ingrese su edad:');
  const correoElectronico = prompt('Ingrese su correo electrónico:');
  const formaDePago = prompt('Ingrese la forma de pago:');
  const usuario = new Usuario(nombre, Number(edad), correoElectronico, formaDePago);
  
  mostrarMenu();