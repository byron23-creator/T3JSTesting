function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    let result = 0;

    switch (inputUnit) {
        case "gallones":
            result = inputValue * 3.78541; 
            document.getElementById("result").innerText = `${inputValue} galones son ${result.toFixed(2)} litros.`;
            break;
        case "litros":
            result = inputValue / 3.78541; 
            document.getElementById("result").innerText = `${inputValue} litros son ${result.toFixed(2)} galones.`;
            break;
        case "botellas":
            result = inputValue * 0.5; 
            document.getElementById("result").innerText = `${inputValue} botellas son ${result.toFixed(2)} litros.`;
            break;
        default:
            document.getElementById("result").innerText = "Unidad no válida.";
            break;
    }
}