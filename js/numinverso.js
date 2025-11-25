document.getElementById("btnInvertir").addEventListener("click", function(e) {
    e.preventDefault();
    const valorNumInverso = document.getElementById("valorInv").value || "";
    
    let inverso = "";
    for (let i = valorNumInverso.length - 1; i >= 0; i--) {
        inverso += valorNumInverso[i];
    }

    if (inverso === "") {
        document.getElementById("resultadoInverso").textContent = "Ingrese un valor para invertir.";
    } else {
        document.getElementById("resultadoInverso").textContent = "El número inverso es: " + inverso;
    }
});