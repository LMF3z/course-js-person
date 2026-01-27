// declarar una funcion que reciba grados centigrados a farenhait
function convertirCelsiusAFarenhait(gradosC) {
    let gradosF = (gradosC * 9/5) + 32;
    return gradosF
}
const nuevosGrados = convertirCelsiusAFarenhait(100)
// console.log("Grados en Farenhait: " + nuevosGrados);