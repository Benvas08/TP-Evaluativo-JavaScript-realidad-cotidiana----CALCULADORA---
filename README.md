# 🧮 Calculadora Inteligente con Historial

**Autor:** Vasques Perrone Benjamin Ezequiel
**Trabajo:** TP Integrador – JavaScript aplicado a una realidad cotidiana


## 📘 Descripción del programa

Este proyecto simula una **calculadora inteligente por consola**, desarrollada en **JavaScript** utilizando **Node.js** y el módulo `readline-sync` para la entrada de datos.
Permite al usuario realizar operaciones matemáticas básicas, almacenar los resultados en un historial y visualizar la información de la calculadora de forma dinámica.

El programa modela una **situación cotidiana** (uso de una calculadora) aplicando los conceptos fundamentales de la programación en JavaScript:
variables, objetos, funciones, arrays, control de flujo y estructuras repetitivas.

---

## ⚙️ Funcionamiento general

1. Al iniciar, la calculadora muestra un **menú principal** con tres opciones:

   * `1` → Realizar una operación (+, -, *, /)
   * `2` → Ver historial de operaciones realizadas
   * `3` → Apagar la calculadora

2. Si el usuario elige realizar una operación, debe:

   * Ingresar el tipo de operación (`suma`, `resta`, `multiplicacion`, `division`) o su símbolo.
   * Ingresar los dos números sobre los cuales operará.
   * El sistema calcula el resultado mediante una **función tradicional** que invoca el método `calcular()` del **objeto literal `calculadora`**.

3. Cada resultado se **almacena en un array de historial** dentro del objeto, que luego puede visualizarse con la opción 2.

4. El programa usa **estructuras de control** (`if/else`, `switch`, `do...while`) y validaciones con bucles `while` para asegurar que el usuario solo ingrese datos válidos.

5. Finalmente, el usuario puede decidir si desea realizar otra acción o finalizar el programa.

---

## 🧩 Conceptos aplicados (según los requisitos)

| Concepto                       | Implementación                                                                      |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| **Variables y tipos de datos** | string, number, boolean, null                                                       |
| **Objeto literal**             | `calculadora` con propiedades, método `calcular()` y `mostrarInfo()` que usa `this` |
| **Array**                      | `historial` almacena las operaciones realizadas                                     |
| **Recorrido con forEach()**    | En la función `mostrarHistorial()`                                                  |
| **Función tradicional**        | `realizarOperacion(tipo, a, b)`                                                     |
| **Función flecha**             | `mostrarResultado()` y `mostrarHistorial()`                                         |
| **Control de flujo**           | `if/else`, `switch`, `do...while`, operador ternario                                |
| **Validación con while**       | Controla entradas válidas en menús y operaciones                                    |

---

## 🚀 Ejecución

1. Instalar dependencias:

   ```bash
   npm install readline-sync
   ```

2. Ejecutar el programa:

   ```bash
   node tp_integrador_js_vasques.js
   ```

3. Interactuar con el menú siguiendo las instrucciones en pantalla.

---

## 💾 Ejemplo de salida

```
========== MENU DE OPCIONES ==========
1. Realizar operacion (+, -, *, /)
2. Ver historial
3. Apagar calculadora
=====================================

>>> Ingrese una opcion (1-3): 1
>>  Ingrese tipo de operacion [suma(+), resta(-), multiplicacion(*), division(/)]: +
>>  Ingrese el primer numero: 8
>>  Ingrese el segundo numero: 4
>>>  Resultado: - 12 -
```

---
