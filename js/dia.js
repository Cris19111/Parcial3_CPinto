document.getElementById("btnDia").addEventListener("click", function() {
    
    let num = parseInt(document.getElementById("numDia").value);

    if (isNaN(num) || num < 1 || num > 365) {
        document.getElementById("resultado").innerHTML =
            "<div>Ingrese un número entre 1 y 365.</div>";
        return;
    }


    let fecha = new Date(2025, 0, num);  
    let dia = fecha.getDate();
    let mes = fecha.toLocaleString("es-ES", { month: "long" });


    document.getElementById("resultado").innerHTML =
        `<div ">El día corresponde al <b>${dia} de ${mes}</b>.</div>`;
});
