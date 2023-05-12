class Estudiante {
    constructor(cedula, nombreCompleto, email, genero, celular) {
      this.cedula = cedula;
      this.nombreCompleto = nombreCompleto;
      this.email = email;
      this.genero = genero;
      this.celular = celular;
    }
  }
  
  const listaEstudiantes = [];
  
  let pedirDatosEstudiante = () => {
    const cedula = prompt('¿Cuál es tu cédula?');
    const nombreCompleto = prompt('¿Cuál es tu nombre completo?');
    const email = prompt('¿Cuál es tu email?');
    const genero = prompt('¿Cuál es tu género? \n\nf para femenino \nm para masculino \nnb para no binario');
    const celular = prompt('¿Cuál es tu número de celular?');
  
    const nuevoEstudiante = new Estudiante(cedula, nombreCompleto, email, genero, celular);
    listaEstudiantes.push(nuevoEstudiante);
  
    return nuevoEstudiante;
  };
  
  class Inmueble {
    constructor(nHabitaciones, costo) {
      this.nHabitaciones = nHabitaciones;
      this.costo = costo;
    }
  }
  
  const tipo1 = new Inmueble(5, 200000);
  const tipo2 = new Inmueble(5, 200000);
  
  class Contrato {
    constructor(estudiante, habitacion, numeroContrato, fecha, cantidadMeses) {
      this.estudiante = estudiante;
      this.habitacion = habitacion;
      this.numeroContrato = numeroContrato;
      this.fecha = fecha;
      this.cantidadMeses = cantidadMeses;
    }
  }
  
  let mostrarMenu = () => {
    let opcion = '';
  
    while (opcion !== '3') {
      opcion = prompt(`Bienvenido, escoge la función que deseas \n\n1 reservar habitación \n2 muestrame la cantidad de personas por genero \n3 para salir/borrar registro`);
    
      switch (opcion) {
        case '1':
          let tipoInmueble = prompt('¿Qué tipo de habitación deseas reservar? \n\n1 grande (costo a 200000 por mes) \n2 elegante (costo a 200000 por mes)');
    
          let habitacion;
          if (tipoInmueble === '1') {
            habitacion = tipo1;
            alert(`El costo de la habitación grande es de ${habitacion.costo} por mes.`);
          } else if (tipoInmueble=== '2'){
            habitacion = tipo2;
            alert(`el costo de la habitacion elegante es de ${habitacion.costo} por mes`);
        } else {
        alert('Opción inválida.');
        break;
        }
        const estudiante = pedirDatosEstudiante();
        const numeroContrato = prompt('que numero de contrato deseas reservar? 1-5');
        const fecha = prompt('¿Cuál es la fecha del contrato? con día, mes y año');
        const cantidadMeses = prompt('¿Cuántos meses deseas reservar la habitación?');
    
        const nuevoContrato = new Contrato(estudiante, habitacion, numeroContrato, fecha, cantidadMeses);
        alert(`El precio total de tu habitación es de ${cantidadMeses*habitacion.costo}`);
        alert(`Contrato creado para el estudiante ${nuevoContrato.estudiante.nombreCompleto}.`);
        alert(`La información que quedará en el sistema será tu email ${estudiante.email}, tu numero telefonico ${estudiante.celular}, identificado con la cedula: ${estudiante.cedula}`)
        alert(`disfruta tu habitaciónn!`)
        break;
    
      case '2':
        let generoFemenino = 0;
        let generoMasculino = 0;
        let generoNoBinario = 0;
    
        for (const estudiante of listaEstudiantes) {
          switch (estudiante.genero) {
            case 'f':
              generoFemenino++;
              break;
            case 'm':
              generoMasculino++;
              break;
            case 'nb':
              generoNoBinario++;
              break;
            default:
              break;
          }
        }
    
        alert(`La cantidad de estudiantes por género es: \n\nFemenino: ${generoFemenino} \nMasculino: ${generoMasculino} \nNo binario: ${generoNoBinario}`);
        break;
    
      case '3':
        alert('el registro fue eliminado, buen día!!');
        break;
      default:
        alert('Opción inválida.');
        break;

    }
    
}
};

console.log(mostrarMenu());    