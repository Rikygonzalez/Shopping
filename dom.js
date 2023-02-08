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



// function categorias(arr) {
//     for (product of arr) {
//         const productCard = document.createElement('div');
//         productCard.classList.add('carousel-item');
    
//         const productImg = document.createElement('img');
//         productImg.setAttribute('src', product.categoria.images);
    
//         const productInfo = document.createElement('div');
//         productInfo.classList.add('carousel-item__details');
    
//         const productInfoDiv = document.createElement('div');
    
//         const productDescription = document.createElement('p');
//         productDescription.innerText = product.categoria.name;
    
//         productInfoDiv.appendChild(productDescription);
    
//         const productInfoFigure = document.createElement('figure');
    

//         productInfo.appendChild(productInfoDiv);
//         productInfo.appendChild(productInfoFigure);
    
//         productCard.appendChild(productImg);
//         productCard.appendChild(productInfo);
    
//         carouselCategorias.appendChild(productCard);
//     }
// };

// categorias(productList);


const api = 'https://api.storerestapi.com'

window
    .fetch(`${api}/products`)
// procesar la respuesta y convertirla a JSON
    .then((respuesta) => respuesta.json())
// JSON --> DATA --> renderizar info al browser
    .then((responseJson) => {
        responseJson.data.forEach((item) => {
            console.log(item);

            const productCard = document.createElement('div');
            productCard.classList.add('carousel-item');
            
            const productImg = document.createElement('img');
            productImg.setAttribute('src', item.image);
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('carousel-item__details');
        
            const productInfoDiv = document.createElement('div');

            const productTitle = document.createElement('p');
            productTitle.innerText = item.title;
            const productDescription = document.createElement('p');
            productDescription.innerText = item.description;
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + item.price;
        
            productInfoDiv.appendChild(productTitle);
            productInfoDiv.appendChild(productDescription);
            productInfoDiv.appendChild(productPrice);
        
            const productInfoFigure = document.createElement('figure');
        
    
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
        
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
    
        
            otro.appendChild(productCard)
        });
    })
    .catch(err => {
        console.log(err);
    })

    window
    .fetch(`${api}/categories`)
// procesar la respuesta y convertirla a JSON
    .then((respuesta) => respuesta.json())
// JSON --> DATA --> renderizar info al browser
    .then((responseJson) => {
        responseJson.data.forEach((item) => {
            console.log(item);

            const productCard = document.createElement('div');
            productCard.classList.add('carousel-item');
            
            const productImg = document.createElement('img');
            productImg.setAttribute('src', item.image);
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('carousel-item__details');
        
            const productInfoDiv = document.createElement('div');

            const productName = document.createElement('p');
            productName.innerText = item.name;
            const productDescription = document.createElement('p');
            productDescription.innerText = item.products[0];
        
            productInfoDiv.appendChild(productName);
            productInfoDiv.appendChild(productDescription);
        
            const productInfoFigure = document.createElement('figure');
        
    
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
        
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
    
        
            carouselCategorias.appendChild(productCard)
        });
    })
    .catch(err => {
        console.log(err);
    })
