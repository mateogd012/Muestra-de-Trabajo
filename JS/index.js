/*Declaración de variables */
let total = 0;
const costoServicio = 102;

const ivaResidencial = 0.21;
const ivaIndustrial = 0.27;

const precioCentro = 5.8;
const precioZur = 5.4;
const precioOeste = 5.35;
const precioNorte = 5.6;

/*Función del calculo */

function calcular() {
    validateForm()
    const kWh = document.getElementById('kWh').value;
    const zona = document.getElementById('domicilio').value;
/*Calculo Residencial*/
    if(document.getElementById('radio-1').checked) {
        if(zona == "Distrito-Centro"){
            total = costoServicio + (kWh * precioCentro) * (1 + ivaResidencial);
        }
        if(zona == "Distrito-Zur"){
            total = costoServicio + (kWh * precioZur) * (1 + ivaResidencial);
        }
        if(zona == "Distrito-Oeste"){
            total = costoServicio + (kWh * precioOeste) * (1 + ivaResidencial);
        }
        if(zona == "Distrito-Norte"){
                total = costoServicio + (kWh * precioNorte) * (1 + ivaResidencial);
        }
/*Calculo Industrial */
    }else {
        if(zona == "Distrito-Centro"){
            total = costoServicio + (kWh * precioCentro) * (1 + ivaIndustrial);
        }
        if(zona == "Distrito-Zur"){
            total = costoServicio + (kWh * precioZur) * (1 + ivaIndustrial);
        }
        if(zona == "Distrito-Oeste"){
            total = costoServicio + (kWh * precioOeste) * (1 + ivaIndustrial);
        }
        if(zona == "Distrito-Norte"){
            total = costoServicio + (kWh * precioNorte) * (1 + ivaIndustrial);
        }
    }

    return document.getElementById('resultado').innerHTML = total.toFixed(2);

}

/*Validación del formulario*/
function validateForm() {
    if (!(document.getElementById('radio-1').checked) && !(document.getElementById('radio-2').checked)) {
        alert("Seleccione tipo de usuario");
        return;
    }


    if(document.getElementById('domicilio').value == 'default') {
        alert("Seleccione un distrito");
        return;
    }
    

    if(document.getElementById('kWh').value <= 0) {
        alert("Ingrese un valor de consumo valido");
        return;
    }
    return;

}