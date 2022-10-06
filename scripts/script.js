// JavaScript Document
console.log("hi");

const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        const filter = e.target.dataset.filter;
        console.log(filter);
        storeProducts.forEach((product) => {
            if (filter === 'all') {
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

search.addEventListener("keyup", filterProducts);
function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    productName.forEach(function (product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}

// Ik heb dit kunnen doen door middel van de volgende youtube video / tutroial : https://www.youtube.com/watch?v=kkih4C80QTk&t=1387s