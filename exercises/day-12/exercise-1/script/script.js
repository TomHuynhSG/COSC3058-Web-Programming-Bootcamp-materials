document.addEventListener('DOMContentLoaded', function () {
    // Fill in your code here


    function CalculateItemsValue() {
        // Fill in your code here


        
    }


    document.querySelectorAll('.quantityInput').forEach(function (input) {
        input.addEventListener('keyup', CalculateItemsValue);
    });
});