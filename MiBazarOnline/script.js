document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Guarda la preferencia del usuario en localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Carga la preferencia de tema guardada al cargar la página
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Calculador de Compras (para estimación rápida)
    const calculatorInputs = document.querySelectorAll('.purchase-calculator input[type="number"]');
    const totalPriceSpan = document.getElementById('total-price');

    function calculateTotal() {
        let total = 0;
        calculatorInputs.forEach(input => {
            const quantity = parseInt(input.value);
            const price = parseFloat(input.dataset.price);
            if (!isNaN(quantity) && quantity > 0) {
                total += quantity * price;
            }
        });
        totalPriceSpan.textContent = total.toFixed(2); // Muestra el total con 2 decimales
    }

    // Agrega el "event listener" a todos los inputs de número en el calculador
    calculatorInputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });

    // Realiza el cálculo inicial al cargar la página
    calculateTotal();

    // Botón básico "Agregar al Carrito" (solo para demostración - no agrega a un carrito real)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemPrice = parseFloat(event.target.dataset.price);
            alert(`El producto se ha "agregado" al carrito (esto es solo una demostración).`);
            // En una aplicación real, acá agregarías esto a un array del carrito
            // y actualizarías un ícono o total del carrito en otro lugar.
        });
    });
});