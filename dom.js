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


const api = 'https://dummyjson.com/'

window
    .fetch('https://dummyjson.com/products')
// procesar la respuesta y convertirla a JSON
    .then((respuesta) => respuesta.json())
// JSON --> DATA --> renderizar info al browser
    .then((responseJson) => {
        responseJson.products.forEach((item) => {
            console.log(item);

            const productCard = document.createElement('div');
            productCard.classList.add('carousel-item');
            
            const productImg = document.createElement('img');
            productImg.setAttribute('src', item.images[0]);
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('carousel-item__details');
        
            const productInfoDiv = document.createElement('div');

            const productTitle = document.createElement('p');
            productTitle.innerText = item.title;
            const productDescription = document.createElement('p');
            productDescription.innerText = item.description;
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + item.price;
            const productRating =document.createElement('p');
            productRating.innerText = '🌟 ' + item.rating;
        
            productInfoDiv.appendChild(productTitle);
            productInfoDiv.appendChild(productDescription);
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productRating);
        
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
    .fetch('https://dummyjson.com/products/categories')
// procesar la respuesta y convertirla a JSON
    .then((respuesta) => respuesta.json())
// JSON --> DATA --> renderizar info al browser
    .then((responseJson) => {
        console.log(responseJson);
        responseJson.forEach((item) => {
            console.log(item);

            const productCard = document.createElement('div');
            productCard.classList.add('carousel-item');
            
            const productImg = document.createElement('img');
            productImg.setAttribute('src', './Image/icon-instagram.svg');
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('carousel-item__details');
        
            const productInfoDiv = document.createElement('div');

            const productName = document.createElement('p');
            productName.innerText = item.toUpperCase() ;
        
            productInfoDiv.appendChild(productName);
        
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
