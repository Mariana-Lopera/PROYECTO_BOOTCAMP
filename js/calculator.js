const rendimcombustibdata = {
    "range1": { // 1000cc - 1400cc
        gasolina: 50, // km/gal
        diesel: 60,   // km/gal
        gas: 55,       // km/gal
    },
    "range2": { // 1401cc - 1800cc
        gasolina: 40, // km/gal
        diesel: 50,   // km/gal
        gas: 44,       // km/gal
    },
    "range3": { // 1801cc - 2500cc
        gasolina: 30, // km/gal
        diesel: 40,   // km/gal
        gas: 35     // km/gal
    },
    "range4": { // 2501cc o más
        gasolina: 25, // km/gal
        diesel: 35,   // km/gal
        gas: 30 ,      // km/gal
    },
    "range5": { // Eléctrico
        gasolina: 0,
        diesel: 0,
        gas: 0,
        elc: 6 
    }
};

const constantesemision = {
    //Cada constante equivale a KG de CO2 por un galon de dicho combustible
    gasolina: 10,  
    diesel: 12,   
    gas: 8,        
    electric: 0      
};

function actualrendim(){
    const cilindraje = document.getElementById("cilindra").value;
    const rendim = rendimcombustibdata[cilindraje];
    const selecgasol = document.getElementById("typefuel");
    const tiposCargaDiv = document.getElementById("tiposcarga");

    document.getElementById("gasovalor").textContent = rendim.gasolina;
    document.getElementById("diesvalor").textContent = rendim.diesel;
    document.getElementById("gasvalor").textContent = rendim.gas;
    document.getElementById("elecvalor").textContent = rendim.elc

    if (cilindraje === "range5") {
                selecgasol.value = "4";
                selecgasol.disabled = true;
                tiposCargaDiv.style.display = "block";

                // Update display for electric
            } else {
                selecgasol.disabled = false;
                tiposCargaDiv.style.display = "none";
                // Update display for non-electric


            }
}

document.addEventListener('DOMContentLoaded', function() {
            actualrendim();
        })

function calculCO2(){
    const cldraje = document.getElementById("cilindra").value;
    const tipgas = document.getElementById("typefuel").value;
    const kilom = parseFloat(document.getElementById("kims").value);
    const passe = parseInt(document.getElementById("personas").value);

    if (!kilom || kilom <= 0 || !passe || passe <= 0) {
        alert("Por favor ingrese valores válidos para kilómetros y pasajeros.");
        return;
    }
    
    let emisiondiaria;
    let emisionanual;
    let emisionporpasajero;

    if (tipgas === "4"){
        const rendimcom = rendimcombustibdata[cldraje].elc;

        const tipocar = document.getElementById("cargatype").value;

        const constantescarga = {
            "1":0.4,
            "2":0.05,
            "3":0.02
        };

        const constant =constantescarga[tipocar]

        const kwhpordia = kilom/rendimcom
        emisiondiaria = (kwhpordia*constant) + 2.5;
        emisionporpasajero = emisiondiaria/passe;
        emisionanual = emisiondiaria*365

    }else  {
        let rendimcom;
        let constant;

        if (tipgas === "1"){
            rendimcom = rendimcombustibdata[cldraje].gasolina;
            constant = constantesemision.gasolina;
        } else if (tipgas === "2"){
            rendimcom = rendimcombustibdata[cldraje].diesel;
            constant = constantesemision.diesel;
        } else if (tipgas === "3"){
            rendimcom = rendimcombustibdata[cldraje].gas;
            constant = constantesemision.gas;
        }

        const galonespordia = kilom/rendimcom;
        emisiondiaria = (galonespordia*constant);
        emisionporpasajero = (emisiondiaria/passe);
        emisionanual = (emisiondiaria*365);

    }    
    
    document.getElementById("CO2diario").textContent = emisiondiaria.toFixed(4);
    document.getElementById("CO2anual").textContent = emisionanual.toFixed(4);
    document.getElementById("CO2pasajero").textContent = emisionporpasajero.toFixed(10);
    document.getElementById("results").style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
    // Hide the charging types div initially
    document.getElementById("tiposcarga").style.display = "none";
    document.getElementById("results").style.display = "none";
    actualrendim(); // Initialize the form
});



