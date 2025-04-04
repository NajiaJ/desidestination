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

    let existItem = cart_items.find(item => item.name === name);

    if(existItem)
    {
        existItem++;
    }
    else
    {
        cart_items.push({name, price, quantity: 1});
    }

    alert('Successfully Added to Cart');
    updateCartSidebar();
    //console.log(cart_items);
}

function updateCartSidebar(){
    const cartContents = document.getElementById('cartContents');
    cartContents.innerHTML = ' ';
    cart_items.forEach(item => {
        const div = document.createElement('div');
        const quantifyinc = document.createElement('button');
        const quantifydec = document.createElement('button');
        quantifydec.textContent = '-';
        quantifyinc.textContent = '+';

        quantifyinc.onclick = function(){
            item.quantity++;
            updateCartSidebar();
        }

        quantifydec.onclick = function(){
            if(item.quantity > 1)
            {
                item.quantity--;
                updateCartSidebar();
            }
            else if(item.quantity == 1)
            {
                cart_items.splice(cart_items.indexOf(item), 1);
                updateCartSidebar();
            }
        }



        div.classList.add('cart-item');
        div.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)} * ${item.quantity}</span>
        `;
        div.appendChild(quantifydec);
        div.appendChild(quantifyinc);
        cartContents.appendChild(div);
    });
}

function openCart(){
    let open_width = document.getElementById('sideBarCart').style.width = '500px';
    const cart = document.getElementById('sideBarCart');
    const menu = document.querySelector('.navi');
    // menu.classList.toggle('hidden');
    if (cart.style.display === 'block') {
        menu.classList.toggle('hidden');
    } else {
        cart.style.display = 'block';
    }
    menu.classList.toggle('show');
    const title = document.getElementById('title');
    title.style.visibility = "visible";

}

function closeCart(){
    document.getElementById('sideBarCart').style.width = '0px';
    document.getElementById('cartTitle').style.display = 'block';
}

function clearCart(){
    cart_items.length = 0;
    updateCartSidebar();
}