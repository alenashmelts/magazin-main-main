document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для чекбокса "Выбрать все"
    const selectAll = document.getElementById('selectAll');
    selectAll.addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('.item-checkbox input');
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });

    // Обработчики для кнопок изменения количества
    const quantityControls = document.querySelectorAll('.quantity-control');
    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.minus');
        const plusBtn = control.querySelector('.plus');
        const quantity = control.querySelector('.quantity');
        
        minusBtn.addEventListener('click', function() {
            let value = parseInt(quantity.textContent);
            if (value > 1) {
                quantity.textContent = value - 1;
                updateTotalItems();
            }
        });
        
        plusBtn.addEventListener('click', function() {
            let value = parseInt(quantity.textContent);
            quantity.textContent = value + 1;
            updateTotalItems();
        });
    });

    // Функция обновления общего количества товаров
    function updateTotalItems() {
        const quantities = document.querySelectorAll('.quantity');
        let total = 0;
        quantities.forEach(q => {
            total += parseInt(q.textContent);
        });
        document.getElementById('totalItems').textContent = total;
    }
});