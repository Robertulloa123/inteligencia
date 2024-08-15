document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculateBtn').addEventListener('click', function() {
        const numElements = parseInt(document.getElementById('numElements').value);
        const resultContainer = document.getElementById('resultContainer');

        if (isNaN(numElements) || numElements < 1) {
            alert('Por favor, ingrese un número válido mayor a 0.');
            return;
        }

        const fibonacciSeries = calculateFibonacci(numElements);
        displayResults(fibonacciSeries);
    });

    document.getElementById('clearBtn').addEventListener('click', function() {
        document.getElementById('numElements').value = '';
        document.getElementById('resultContainer').innerHTML = '';
    });

    document.getElementById('exitBtn').addEventListener('click', function() {
        window.close(); // Esto funciona solo en algunos navegadores y entornos.
    });

    function calculateFibonacci(n) {
        const series = [];
        let a = 0, b = 1;

        for (let i = 0; i < n; i++) {
            series.push(a);
            [a, b] = [b, a + b];
        }

        return series;
    }

    function displayResults(series) {
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = ''; // Limpiar resultados anteriores

        series.forEach(number => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.textContent = number;
            resultContainer.appendChild(resultItem);
        });
    }
});
