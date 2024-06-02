buyButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart() {
    // تنفيذ الإجراءات التي تود تنفيذها عند النقر على زر "أضف إلى السلة"
    alert('تمت إضافة المنتج إلى السلة!');
}

const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('شكرًا لشرائك المنتج!');
    });
});