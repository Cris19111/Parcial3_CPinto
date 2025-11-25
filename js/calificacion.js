document.getElementById("calcularBtn").addEventListener("click", function(e) {
    e.preventDefault(); 

    let p1 = parseFloat(document.getElementById("parcial1").value);
    let p2 = parseFloat(document.getElementById("parcial2").value);
    let p3 = parseFloat(document.getElementById("parcial3").value);

    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        document.getElementById("resultado").innerHTML =
            "<div >Debes llenar todos los campos.</div>";
        return;
    }
    if (p1 < 0 || p1 > 100 || p2 < 0 || p2 > 100 || p3 < 0 || p3 > 100) {
        document.getElementById("resultado").innerHTML =
            "<div >Las notas deben estar entre 0 y 100.</div>";
        return;
    }

    let promedioParciales = ((p1 + p2 + p3) / 300) * 60;


    function minimoRequerido(metaFinal) {
        let falta = metaFinal - promedioParciales;
        let minimo = (falta / 40) * 100; 
        return minimo;
    }

    let metas = {
        "A (90+)": minimoRequerido(90),
        "B (80+)": minimoRequerido(80),
        "C (70+)": minimoRequerido(70),
        "D (60+)": minimoRequerido(60),
        "F (<60)": 0
    };

    let salida = `
        <div class="alert alert-info">
            <h4>Resultados</h4>
            <p><b>Promedio de parciales (60%):</b> ${promedioParciales.toFixed(2)}</p>
            <hr>
            <h5>Notas mínimas necesarias en el examen final (40%):</h5>
            <ul>
    `;

    for (let grado in metas) {
        let req = metas[grado];

        if (req > 100) {
            salida += `<li><b>${grado}:</b> IM-POSIBLE (necesitas ${(req/40*100).toFixed(2)} puntos)</li>`;
        } else if (req <= 0) {
            salida += `<li><b>${grado}:</b> Ya asegurado</li>`;
        } else {
            salida += `<li><b>${grado}:</b> Necesitas al menos ${(req/40*100).toFixed(2)} puntos</li>`;
        }
    }

    salida += "</ul></div>";

    document.getElementById("resultado").innerHTML = salida;
});
