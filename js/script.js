
document.getElementById("calcularBtn").addEventListener("click", function(e) {
    e.preventDefault(); 

    
    let p1 = parseFloat(document.getElementById("parcial1").value);
    let p2 = parseFloat(document.getElementById("parcial2").value);
    let p3 = parseFloat(document.getElementById("parcial3").value);
    let sem = parseFloat(document.getElementById("semestral").value);

    
    if (isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(sem)) {
        document.getElementById("resultado").innerHTML =
            "<div'>Debes llenar todos los campos.</div>";
        return;
    }


    let promedioParciales = ((p1 + p2 + p3) / 300) * 60;


    let final40 = (sem / 100) * 40;

    let notaFinal = promedioParciales + final40;



    function minimoRequerido(meta) {
        let puntosNecesarios = meta - promedioParciales;
        let minimoFinal = (puntosNecesarios / 40) * 100;
        return minimoFinal;
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
            <p><b>Aporte del final (40%):</b> ${final40.toFixed(2)}</p>
            <p><b>Nota final:</b> ${notaFinal.toFixed(2)}</p>
            <hr>
            <h5>Notas mínimas necesarias en el examen final:</h5>
            <ul>
    `;

    for (let grado in metas) {
        let req = metas[grado];
        if (req > 100) {
            salida += `<li><b>${grado}:</b> IM-POSIBLE (necesitas ${req.toFixed(2)}%)</li>`;
        } else if (req <= 0) {
            salida += `<li><b>${grado}:</b> Ya asegurado</li>`;
        } else {
            salida += `<li><b>${grado}:</b> Necesitas mínimo ${req.toFixed(2)}%</li>`;
        }
    }

    salida += "</ul></div>";

    document.getElementById("resultado").innerHTML = salida;
});




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
        document.getElementById("resultadoInverso").textContent = "El numero inverso es: " + inverso;
    }
});
