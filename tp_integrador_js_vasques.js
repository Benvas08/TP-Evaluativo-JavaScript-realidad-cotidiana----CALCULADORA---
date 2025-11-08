// ======================================================
// TP Integrador - JavaScript Aplicado a una Realidad Cotidiana
// Tema: Calculadora Inteligente con Historial
// Autor: Vasques
// ======================================================

// Importamos readline-sync para usar entrada por teclado
const readline = require("readline-sync");

// ---------- 2. VARIABLES Y TIPOS DE DATOS (Requisito: 4 tipos) ----------
let operacionSeleccionada = "";     // string: Almacena el tipo de operacion
let numero1 = 0;                    // number: Primer operando
let continuar = true;               // boolean: Controla el bucle do...while
let resultado = null;               // null: Almacena el resultado de la operacion (Inicialmente nulo)
// Nota: 'undefined' podría ocurrir si no inicializamos una variable 'let' sin asignacion.

// ---------- 2. OBJETO LITERAL PRINCIPAL (Requisito: Propiedades y método con 'this') ----------
const calculadora = {
    marca: "SmartCalc 3000",
    encendida: true,
    // 2. ARRAY (Relacionado con la tematica)
    historial: [],

    // Método con 'this' para calcular diferentes operaciones
    calcular: function (tipo, a, b) {
    // La correccion: Usar casos separados o agrupar sin el operador ||
    switch (tipo) {
    // CONTROL DE FLUJO: switch (agrupando casos)
        case "suma":
        case "1":
        case "+":
            return a + b;
        case "resta":
        case "2":
        case "-":
            return a - b;
        case "multiplicacion":
        case "3":
        case "*":
            return a * b;
        case "division":
        case "4":
        case "/":
         // CONTROL DE FLUJO: Operador ternario (Requisito)
            return b !== 0 ? a / b : "Error: Division por cero";
        default:
            return "Operacion no valida";
    }
    },

    // Método para mostrar informacion general del objeto (usa 'this.marca')
    mostrarInfo: function () {
        console.log(`\n🤖 Calculadora ${this.marca} - Estado: ${this.encendida ? "ENCENDIDA" : "APAGADA"}\n`);
    }
};

// ---------- 2. FUNCIÓN TRADICIONAL (con parametros y return) ----------
function realizarOperacion(tipo, a, b) {
    // Llama al método del objeto y retorna el resultado
    return calculadora.calcular(tipo, a, b);
}

// ---------- 2. FUNCIÓN FLECHA (con retorno implícito) ----------
const mostrarResultado = (res) => console.log(`\n >>>  Resultado: - ${res} -`);

// ---------- FUNCIÓN FLECHA PARA MOSTRAR HISTORIAL (usa forEach) ----------
const mostrarHistorial = () => {
    console.log("\n📜 HISTORIAL DE OPERACIONES:");
    // CONTROL DE FLUJO: if/else (Requisito)
    if (calculadora.historial.length === 0) {
        console.log("Aun no hay operaciones registradas.");
    } else {
    // 2. ARRAY: Recorrido con forEach()
        calculadora.historial.forEach((item, i) => {
        console.log(`${i + 1}. ${item}`);
    });
    }
    console.log("------------------------------------------------");
};



// ---------- INICIO DEL PROGRAMA ----------
console.log("\n----- Bienvenido a la Calculadora Inteligente 🤖 -----\n");
calculadora.mostrarInfo();

// ---------- MENÚ PRINCIPAL (CONTROL DE FLUJO: do...while) ----------
// do...while asegura que el menu se ejecute al menos una vez
do {
    console.log("\n========== MENU DE OPCIONES ==========");
    console.log("1. Realizar operacion (+, -, *, /)");
    console.log("2. Ver historial");
    console.log("3. Apagar calculadora");
    console.log("=====================================");

    let opcion;

    while(true){
        opcion = readline.question(">>> Ingrese una opcion (1-3): ").toLowerCase();
        if (opcion === '1' || opcion === '2' || opcion === '3'){
            // Opcion valida, salimos del bucle
            break;
        } else {
            console.log("\n❌ Opcion no valida. Intente nuevamente.\n");
        }
    }
    // Evaluamos la opcion ingresada
    switch (opcion) {
        case '1': // Realizar operacion
            operacionSeleccionada = readline.question("\n>>  Ingrese tipo de operacion [suma(+), resta(-), multiplicacion(*), division(/)]: ").toLowerCase();
        
            while (true) {
            // Validamos la operacion seleccionada
                if (["suma", "+", "1", "resta", "-", "2", "multiplicacion", "*", "3", "division", "/", "4"].includes(operacionSeleccionada)) {
                    break; // Operacion valida, salimos del bucle
                } else {
                    console.log("\n❌ Operacion no valida. Intente nuevamente.\n");
                    operacionSeleccionada = readline.question(">>  Ingrese tipo de operacion [suma(+), resta(-), multiplicacion(*), division(/)]: ").toLowerCase();
                }
            }

            // Validamos la entrada de numeros de manera mas robusta
            numero1 = Number(readline.question("\n >>  Ingrese el primer numero: "));
            let numero2 = Number(readline.question(" >>  Ingrese el segundo numero: "));

            resultado = realizarOperacion(operacionSeleccionada, numero1, numero2);
            mostrarResultado(resultado);

            // Solo registramos en el historial si la operacion fue exitosa (no es un error de division)
            if (typeof resultado === 'number') {
                calculadora.historial.push(`[${operacionSeleccionada.toUpperCase()}] ${numero1} y ${numero2} = ${resultado.toFixed(2)}`);
            } else {
                calculadora.historial.push(`[ERROR] ${resultado}`);
            }
            break;

        case '2': // Ver historial
            mostrarHistorial();
            break;

        case '3': // Apagar
            // console.log("\n----- Apagando la calculadora... 👋\n");
            // calculadora.mostrarInfo();
            // calculadora.encendida = false;
            continuar = false;
            break;
    }

    // Si no se registra una opcion valida vuelve a intentar hasta que logre responder correctamente
    
    // Preguntar si desea continuar, solo si la calculadora sigue encendida y no se eligio 'Apagar'
    if (continuar) {

    let respuesta;

    // CONTROL DE FLUJO: Uso de if/else implícito en la logica de 'continuar'
        while (true){
            respuesta = readline.question("\n---  Desea realizar otra accion? (si/no): ").toLowerCase();
            // Evaluamos si alguna de las opciones coincide para salir del bucle y ver si continuar o no
            if (respuesta === "no" || respuesta === "n" || respuesta === "0" || respuesta === "si" || respuesta === "s" || respuesta === "1") { 
                continuar = false;
                break;
            } else {
                console.log("Elija una opcion valida: 'si' o 'no'.");
            }
        }

        // Si la respuesta final es "si","s" o "1", continuamos con el programa
        continuar = respuesta === "si" || respuesta === "s" || respuesta === "1";
    }

} while (continuar);

console.log("\n----- Apagando la calculadora... 👋\n");
calculadora.encendida = false;
calculadora.mostrarInfo();

// console.log("\nPrograma finalizado correctamente ✅");