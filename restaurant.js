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
    price = +price.replace('$', '').trim();

    cart_items.push({name, price});

    alert('Successfully Added to Cart');
    updateCartSidebar();
    //console.log(cart_items);
}

function updateCartSidebar(){
    const cartContents = document.getElementById('cartContents');
    cartContents.innerHTML = ' ';
    cart_items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
        `;
        cartContents.appendChild(div);
    });
}

function openCart(){
    let open_width = document.getElementById('sideBarCart').style.width = '500px';
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