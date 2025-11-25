function convertirDia(num) {
    let fecha = new Date(2025, 0, num); // 0 = enero, día = num
    let dia = fecha.getDate();
    let mes = fecha.toLocaleString("es-ES", { month: "long" });

    return `${dia} de ${mes}`;
}

document.getElementById("btnDia").addEventListener("submit", function (e) {
    e.preventDefault();
    dia = document.getElementById("diaForm").value;
    document.getElementById("resultado").innerHTML = `{convertirDia(dia)}`;
