
    
    
    
    document.addEventListener('DOMContentLoaded', function() {
        const quantityInputs = document.querySelectorAll('input[type="number"]');
        const removeButtons = document.querySelectorAll('.remove-btn');

        function updateCartTotal() {
            let total = 0;
            const cartRows = document.querySelectorAll('tbody tr');
            cartRows.forEach(row => {
                const priceElement = row.querySelector('td:nth-child(2)').innerText.replace('đ', '');
                const quantityElement = row.querySelector('input[type="number"]').value;
                const totalElement = row.querySelector('td:nth-child(4)');
                const price = parseFloat(priceElement.replace(/\./g, ''));
                const quantity = parseInt(quantityElement);
                const rowTotal = price * quantity;
                totalElement.innerText = rowTotal.toLocaleString('vi-VN') + 'đ';
                total += rowTotal;
            });
            document.querySelector('.cart-total p').innerText = total.toLocaleString('vi-VN') + 'đ';
        }

        quantityInputs.forEach(input => {
            input.addEventListener('change', updateCartTotal);
        });

        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.closest('tr').remove();
                updateCartTotal();
            });
        });

        updateCartTotal();
    });

