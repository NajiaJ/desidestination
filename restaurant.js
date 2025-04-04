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

const buttons = document.getElementsByClassName("cart");
for(let i = 0; i < buttons.length; i++)
{
    buttons[i].onclick = function(){
    addToCart(buttons[i]);
    };
}

function addToCart(button){
    const rows = button.closest("tr");

    const cell_item = rows.getElementsByTagName("td");

    let name = cell_item[0].textContent.trim();
    let price = cell_item[1].childNodes[0].textContent.trim();
    price = price.replace('$', '').trim();

    cart_items.push({name, price});

    alert('Successfully Added to Cart');
    updateCartSidebar();
    //console.log(cart_items);
}

function updateCartSidebar(){

}

function openCart(){
    document.getElementById('sideBarCart').style.width = '500px';
    const title = document.getElementById('title');
    if (title.style.visibility === "hidden") {
        title.style.visibility = "visible";
    } else {
        title.style.visibility = "hidden";
    }
}

function closeCart(){
    document.getElementById('sideBarCart').style.width = '0px';
}