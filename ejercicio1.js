class Cliente {
  constructor(cedula, nombre, correo, celular) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.correo = correo;
    this.celular = celular;
  }
}


const clientes = [];

function agregarCliente() {
  const cedula = prompt('Ingrese la cédula del cliente:');
  const nombre = prompt('Ingrese el nombre del cliente:');
  const correo = prompt('Ingrese el correo del cliente:');
  const celular = prompt('Ingrese el celular del cliente:');
  const cliente = new Cliente(cedula, nombre, correo, celular);
  clientes.push(cliente);
  console.log('Cliente agregado con éxito!');
}

class Barbero {
  constructor(nombre, celular) {
    this.nombre = nombre;
    this.celular = celular;
  }
}


const barberos = [];


function agregarBarbero() {
  const nombre = prompt('Ingrese el nombre del barbero:');
  const celular = prompt('Ingrese el celular del barbero:');
  const barbero = new Barbero(nombre, celular);
  barberos.push(barbero);
  console.log('Barbero agregado con éxito!');
}


class Servicio {
  constructor(barbero, cliente, fecha, hora, servicio, costo) {
    this.barbero = barbero;
    this.cliente = cliente;
    this.fecha = fecha;
    this.hora = hora;
    this.servicio = servicio;
    this.costo = costo;
  }
}


const servicios = [];


function pedirCita() {
  const nombreBarbero = prompt('Ingrese el nombre del barbero:');
  const barbero = barberos.find((b) => b.nombre === nombreBarbero);
  if (!barbero) {
    alert('El barbero no existe.');
    return;
  }
  const cedulaCliente = prompt('Ingrese la cédula del cliente:');
  const cliente = clientes.find((c) => c.cedula === cedulaCliente);
  if (!cliente) {
    alert('El cliente no existe.');
    return;
  }
  const fecha = prompt('Ingrese la fecha del servicio:');
  const hora = prompt('Ingrese la hora del servicio:');
  const servicio = prompt('Ingrese el servicio que tomará el cliente:');
  const costo = alert(`El precio del corte es de 20000`);
  const nuevoServicio = new Servicio(barbero, cliente, fecha, hora, servicio, costo);
  servicios.push(nuevoServicio);
  console.log(`Cita registrada con éxito. El costo del servicio es ${costo}`);
}



let a = true;
while(a=true){
  let menu = prompt(`Elija la operacion \n\n1. Registrar cliente \n2. Registrar barbero \n3. Reservar cita \n4.Salir `);
  switch (menu) {
    case '1':
      agregarCliente();
      break;
    case '2':
      agregarBarbero();
      break;
      case `3`:
          pedirCita();
          break;
          case `4`:
            alert("Hasta luego, vuelva pronto!!")
              a=false;
  }
}