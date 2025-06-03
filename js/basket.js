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





/*-----Фильтры регулировка цены-----*/

 const minPriceInput = document.getElementById('minPrice');
            const maxPriceInput = document.getElementById('maxPrice');
            const minSlider = document.getElementById('minSlider');
            const maxSlider = document.getElementById('maxSlider');
            const sliderTrack = document.querySelector('.price-filter__slider-track');

            // Установка начальных значений
            let minPrice = 0;
            let maxPrice = 100000;
            let minVal = 0;
            let maxVal = 100000;

            // Обновление позиции ползунков и цветной области
            function updateSlider() {
              sliderTrack.style.left = (minVal / maxPrice * 100) + '%';
              sliderTrack.style.right = 100 - (maxVal / maxPrice * 100) + '%';
            }

            // Обработчики для ползунков
            minSlider.addEventListener('input', function () {
              minVal = parseInt(this.value);
              if (minVal > maxVal) {
                minVal = maxVal;
                this.value = minVal;
              }
              minPriceInput.value = minVal;
              updateSlider();
            });

            maxSlider.addEventListener('input', function () {
              maxVal = parseInt(this.value);
              if (maxVal < minVal) {
                maxVal = minVal;
                this.value = maxVal;
              }
              maxPriceInput.value = maxVal;
              updateSlider();
            });

            // Обработчики для полей ввода
            minPriceInput.addEventListener('input', function () {
              minVal = parseInt(this.value) || 0;
              if (minVal < minPrice) minVal = minPrice;
              if (minVal > maxVal) minVal = maxVal;
              minSlider.value = minVal;
              updateSlider();
            });

            maxPriceInput.addEventListener('input', function () {
              maxVal = parseInt(this.value) || maxPrice;
              if (maxVal > maxPrice) maxVal = maxPrice;
              if (maxVal < minVal) maxVal = minVal;
              maxSlider.value = maxVal;
              updateSlider();
            });

            // Инициализация
            updateSlider();





            