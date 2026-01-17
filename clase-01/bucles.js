const arr_strings = ["a", "b", "c", "d", "e"];

// recorrer arreglos
// for clasico
for (let i = 0; i < arr_strings.length; i++) {
    console.log("for clasico", arr_strings[i]);
}

// // for...of
for (const element of arr_strings) {
    console.log("for...of", element);
}

const palabra_larga = "supercalifragilisticoespialidoso";

for (const element of palabra_larga) {
    console.log("for...of on string", element);    
}