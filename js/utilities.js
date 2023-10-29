/**
 * Esta función te permite hacer un reset de los campos selecciónados por el usuario.
 * No se retorna nada. recuerca que algunos valores se hace el reset a 0, otros a 1
 */
export function reset(billInput, customPercentageBtn, peopleInput) {

    billInput.value = '0';
    customPercentageBtn.value = '1';
    peopleInput.value = '1';
}


/**
 * Esta función te permite calcular el tip(propina) que se recibirá
 * por cada persona.
 * @returns el monto de tip por persona.
 */
export function calcularTip(bill, tip, people) {

    const tipTotal = (bill * tip) / 100;
    const cantidadTip = tipTotal / people;

    return cantidadTip;
}

/**
 * Calcula el total a pagar por cada persona, incluyendo el tip que
 * le corresponde.
 * @returns el monto total por persona.
 */
export function calcularTotal(bill, tip, people) {

    const cantidadDePropina = bill * ( tip / 100 );
    const totalPersona = (bill + cantidadDePropina) / people;

    return totalPersona;    
}


/**
 * Ejecutar tanto la función calcularTip() y la función 
 * calcularTotal(), luego retornar un array, teniendo en la posición 0 
 * el retorno de calcularTip() y en la posición 1 el retorno de calcularTotal()
 * @returns array [] con dos valores.
 */
export function calcularTodo(bill, tip, people) {

    const tipTotal = calcularTip(bill, tip);
    const totalPersona = calcularTodo(bill, tip, people);

    return [tipTotal, totalPersona];
}


/**
 * Valida si el valor de un campo es 0 o no, si lo es retorna true, si no, retorna false
 */
export function esCero (input) {

    if (value < 1) { 
        return true
    }
    return false
}


/**
 * Añade la clase "active" al elemento.
 * @param { Node } input - un elemento input de html.
 * puedes investigar sobre : uso de classList en los elementos DOM. añadir, remover.
 */
export function claseActivo(input) {

    if (!input || !(input instanceof Node)) {
        throw new Error("Ingrese un dato correcto.");
      }
      input.classList.add("active");
}