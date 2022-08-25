//Se definen datos de usuarios existentes dentro del array.
const usu1 = {nomUsuario: "Axel123", passUsuGuardado: "12345"}
const usu2 = {nomUsuario: "Nahuel456", passUsuGuardado: "abcd"}
const usu3 = {nomUsuario: "luciana098", passUsuGuardado: "xyz"}

const listaUsuarios = [usu1, usu2,usu3];  //la lista de usuarios existentes en el array. 


function loguinUsuario(){ //Se crea la funcion general de loguin del sistema

    let ingresoLoguin = Number(prompt("ESTACION VILLA URQUIZA \n \nPor favor escoge la opcion: \n \n1. Ingresar al Sistema con clave Existente \n     (Ingresar Usario y Contraseña)\n \n2. Crear Usuario y Contraseña \n     (Crear nuevo usuario y contraseña)"))  //Se muestra el Usuario posibilidad de ingresar al sistema mediante un Login o crear un nuevo usuario

    if(ingresoLoguin == 1){  // Si el usuario elije opcion 1 entonces:
        let UsuExistNomUsuario = prompt("Ingrese su nombre de usuario") //ingresa nombre usuario 
        let UsuExistPassUsuario = prompt("Ingrese su Clave") //ingresa nombre  contraseña

        //la varaible respuesta sino encuentra valor devuelve un undefined sino devuelve el objeto del usuario encontrado 
        const respuesta = listaUsuarios.find( user => user.nomUsuario == UsuExistNomUsuario && user.passUsuGuardado == UsuExistPassUsuario);
        console.log(respuesta);

            if(respuesta != undefined){// si ambos coinciden da ingreso llamando a la logica.
                alert("Bienvenido de nuevo a ESTACION VILLA URQUIZA: " + UsuExistNomUsuario )
                   
            }else{  // si nombre de usuario y contraseña no coinciden sale del juego  
                alert("Alguno de sus datos es incorrecto, por favor vuelva a intentarlo")
                loguinUsuario();
                
            }
        
    }

    if (ingresoLoguin == 2){ //En el caso que elija en la segunda opcion crear un usuario, se llama directamente a la funcion crearNuevoUsuario. 
        crearNuevoUsuario()
    }
}
       
let total= 0;

function crearNuevoUsuario(){     // Se crea la funcion para crear nuevo usuario.
        
    let ingresoNomUsuario = prompt("Ingrese su Nuevo nombre de Usuario") //solicita nombre de usuario 
    let ingresoPassUsuario = prompt("Ingrese su Nueva Clave")      //solicita nombre de  contraseña
    listaUsuarios.push({nomUsuario: ingresoNomUsuario, passUsuGuardado: ingresoPassUsuario}) //Envia con el metodo push, el nombre de usuario y contraseña para el nuevo loguin
    
    console.log(listaUsuarios);
    alert("Recuerde su nombre de usuario Es : " + ingresoNomUsuario) // recuerda el nombre de usuario creado
    alert( "USUARIO CREADO \n \nBienvenido a ESTACION VILLA URQUIZA \n \nSistema que te permitira pedir sin tener que hacer fila") 
    

    for(const vistaCreacion of listaUsuarios){ //Este for es solo muestra, recorre la lista de usuarios para mostrar el nuevo usuario creado.
        console.log(vistaCreacion.nomUsuario);
        console.log(vistaCreacion.passUsuGuardado);
    }

}

loguinUsuario(); //Se llama a la funcion loguin para comenzar el mismo.

function mostrarMenuyOpcion(){//Se crea una funcion
    let opcion= prompt('Menu disponible \n 1)Milanesa -$200 \n 2)Fiideos -$150 \n 3)Empanadas -$80 \n 0)Salir y ver precio final. Ingrese el numero de la opcion deseada');//Se muestra al usuario las opciones a alegir

    while (opcion <0 || opcion >3 ){ //En caso de no pedir las opciones correctas
        alert('La opcion no es correcta');
        opcion = prompt('Ingresa el numero de la opcion deseada');
    }return opcion
}

let op = mostrarMenuyOpcion(); //Se llama a la funcion
//Se realiza la multiplicacion
while( op!= 0){
    if(op == 1){
        let cantidadMilanesa = prompt('Seleciono Milanesas. \n Ingrese la cantidad de milanesa');
        let precio = cantidadMilanesa * 200;
        alert('El precio por' + cantidadMilanesa + 'milanesas es de' + precio + 'pesos');
        total += precio; 
    }
    if(op == 2){
        let cantidadFideos = prompt('Seleciono Fideos. \n Ingrese la cantidad de fideos');
        let precio = cantidadFideos * 150;
        alert('El precio por' + cantidadFideos + 'fideos es de' + precio + 'pesos');
        total += precio; 
    }
    if(op == 3){
        let cantidadEmpanadas = prompt('Seleciono Empanadas. \n Ingrese la cantidad de empanadas');
        let precio = cantidadEmpanadas * 80;
        alert('El precio por' + cantidadEmpanadas + 'empanadas es de' + precio + 'pesos');
        total += precio;
    }

    op = mostrarMenuyOpcion();
    
}


alert('Operacion finalizada, el precio final es de' + total + 'pesos');
