//funciones de validación de formulario

function buyProduct(cardId, productName, price) {
    const quantityInput = document.getElementById(`quantity-${cardId}`);
    const statusDiv = document.getElementById(`status-${cardId}`);
    const quantity = parseInt(quantityInput.value);
    
    // Validaciones
    if (!quantity || quantity < 1) {
        showStatus(statusDiv, 'Por favor ingresa una cantidad válida (mínimo 1)', 'error');
        return;
    }
    
    if (quantity > 10) {
        showStatus(statusDiv, 'Cantidad máxima permitida: 10 unidades', 'error');
        return;
    }
    
    // Calcular total
    const total = (price * quantity).toFixed(2);
    
    // Mostrar estado de procesamiento
    showStatus(statusDiv, `Procesando compra de ${quantity} x ${productName}...`, 'success');
    
    // Aquí integrarías con tu sistema de pagos
    setTimeout(() => {
        showStatus(statusDiv, `¡Compra exitosa! ${quantity} x ${productName} - Total: $${total}`, 'success');
        
        // Aquí podrías redirigir a checkout, actualizar carrito, etc.
        console.log('Datos de compra:', {
            productId: cardId,
            productName: productName,
            quantity: quantity,
            unitPrice: price,
            total: total
        });
    }, 2000);
}

function showStatus(statusElement, message, type) {
    statusElement.textContent = message;
    statusElement.className = `status-message status-${type}`;
    statusElement.style.display = 'block';
    
    if (type === 'success' && message.includes('exitosa')) {
        setTimeout(() => {
            statusElement.style.display = 'none';
        }, 4000);
    }
}