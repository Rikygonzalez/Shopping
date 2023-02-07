function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('card');
    
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productDescription = document.createElement('p');
        productDescription.innerText = product.description;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productDescription);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './Image/bt_add_to_cart.svg');

        const btnAdd = document.createElement('button');
        btnAdd.classList.add('buy')
        btnAdd.innerText = 'Comprar'
    
        productInfoFigure.appendChild(productImgCart);
        productInfoFigure.appendChild(btnAdd)

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        mainSection.appendChild(productCard);
    }
};

renderProducts(productList);




// const api = "https://api.escuelajs.co/api/v1/products/"

// window
//     .fetch(api)
//     .then((response) => response.json())
//     .then(responseJson => {
//         console.log(responseJson);
//     })

function categorias(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('carousel-item');
    
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.categoria.images);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('carousel-item__details');
    
        const productInfoDiv = document.createElement('div');
    
        const productDescription = document.createElement('p');
        productDescription.innerText = product.categoria.name;
    
        productInfoDiv.appendChild(productDescription);
    
        const productInfoFigure = document.createElement('figure');
    

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        carouselCategorias.appendChild(productCard);
    }
};

categorias(productList);