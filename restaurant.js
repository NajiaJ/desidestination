function dashMenu(){
    const menu = document.querySelector('.navi');
    menu.classList.toggle('show');
    const title = document.getElementById('title');
    const menu_icon = document.getElementsByClassName('menu-icon');
    if (title.style.visibility === "hidden") {
        title.style.visibility = "visible";
    } else {
        title.style.visibility = "hidden";
    }
}

const cart_items = [];

document.getElementById("cart").onclick = function(){
    addToCart();
}

function addToCart(){
    alert('Successfully Added to Cart');
}