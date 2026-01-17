// Arrays in JavaScript

const arr_numbers = [1, 2, 3, 4, 5];
const arr_mixed = [1, "two", 3, "four", true, { name: "el name" }];
const arr_strings = ["a", "b", "c", "d", "e"];
const some_element = arr_strings[3];
// console.log("Primer elemento del arreglo:", some_element);

// // agregar elemento
arr_strings.push('f')
// console.log(arr_strings)

// // modificar elemento
arr_strings[arr_strings.length - 1] = "omega"
arr_strings[1] = 'beta'
// console.log(arr_strings)

// // eliminar ultimo elemento
arr_strings.pop()
// // eliminar primer elemento
// arr_strings.shift()
// arr_strings.splice(0, 3)
// console.log(arr_strings)


// console.log("arr_strings:", arr_strings);


