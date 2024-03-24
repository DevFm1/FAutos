document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const financingAmountInput = document.getElementById('financingAmount');
    const monthsSelect = document.getElementById('months');
    const monthlyPaymentAmount = document.getElementById('monthlyPaymentAmount');
  
    calculateButton.addEventListener('click', function () {
        const enganche = parseFloat(financingAmountInput.value);
        const meses = parseInt(monthsSelect.value);
  
        if (isNaN(enganche) || isNaN(meses)) {
            alert('Por favor ingrese un enganche válido y selecciona los meses.');
            return;
        }
        const precioAuto = 309000; // Precio total del auto
        if (enganche > precioAuto) {
          alert('Enganche mayor al precio del auto. Por favor ingrese un enganche válido.');
          return;
        }
        if(enganche<(precioAuto*0.10)){
          alert('Enganche demasiado bajo. Por favor ingrese un enganche más alto.');
          return;
        }
        const montoFinanciar = precioAuto - enganche;
        const tasaInteresMensual = 5/ 100;
        const numerador = tasaInteresMensual * montoFinanciar*Math.pow((1+tasaInteresMensual), meses);
        const denominador = Math.pow(1 + tasaInteresMensual, meses)-1;
        const pagoMensual = numerador / denominador;
  
        monthlyPaymentAmount.textContent = `$${pagoMensual.toFixed(2)}`;
    });
    
  });
  