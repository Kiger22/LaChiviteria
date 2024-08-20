// Array de Productos
const PRODUCTS = [
  {
    name: 'Chivito Clásico',
    price: 5.00,
    stars: 4,
    ingredients: 'Lechuga, Tomate, Jamón, Huevo Frito, Mayonesa',
    Family: 'Chivito',
    image: '/assets/chivito.png'
  },
  {
    name: 'Chivito Canadiense',
    price: 5.50,
    stars: 5,
    ingredients: 'Lechuga, Tomate, Jamón, Panceta, Queso, Huevo Frito, Mayonesa',
    Family: 'Chivito',
    image: '/assets/chivitox2.png'
  },
  {
    name: 'Chivito al Pan',
    price: 4.50,
    stars: 4,
    ingredients: 'Lechuga, Tomate, Jamón, Queso, Huevo Frito, Mayonesa',
    Family: 'Chivito',
    image: '/assets/chivito2.png'
  },
  {
    name: 'Chivito con Panceta',
    price: 6.00,
    stars: 5,
    ingredients: 'Lechuga, Tomate, Jamón, Panceta, Queso, Huevo Frito, Salsa Golf',
    Family: 'Chivito',
    image: '/assets/chivito_panceta.png'
  },
  {
    name: 'Hamburguesa Clásica',
    price: 3.50,
    stars: 3,
    ingredients: 'Lechuga, Tomate, Hamburguesa, Queso, Ketchup, Mostaza',
    Family: 'Hamburguesa',
    image: '/assets/Hamburguesa.png'
  },
  {
    name: 'Hamburguesa Doble',
    price: 4.50,
    stars: 4,
    ingredients: 'Lechuga, Tomate, Doble Hamburguesa, Doble Queso, Ketchup, Mostaza',
    Family: 'Hamburguesa',
    image: '/assets/hamburguesa_doble.png'
  },
  {
    name: 'Hamburguesa con Bacon',
    price: 5.00,
    stars: 4,
    ingredients: 'Lechuga, Tomate, Hamburguesa, Bacon, Queso, Salsa Barbacoa',
    Family: 'Hamburguesa',
    image: '/assets/hamburguesa_bacon.png'
  },
  {
    name: 'Hamburguesa con Huevo',
    price: 4.80,
    stars: 4,
    ingredients: 'Lechuga, Tomate, Hamburguesa, Queso, Huevo Frito, Mayonesa',
    Family: 'Hamburguesa',
    image: '/assets/hamburguesa_huevo.png'
  },
  {
    name: 'Pancho Clásico',
    price: 2.50,
    stars: 3,
    ingredients: 'Salchicha, Pan, Ketchup, Mostaza',
    Family: 'Pancho',
    image: '/assets/pancho_clasico.png'
  },
  {
    name: 'Pancho con Queso',
    price: 2.50,
    stars: 4,
    ingredients: 'Salchicha, Pan, Queso Fundido, Ketchup, Mostaza',
    Family: 'Pancho',
    image: '/assets/pancho_queso.png'
  },
  {
    name: 'Pancho con Panceta',
    price: 3.00,
    stars: 4,
    ingredients: 'Salchicha, Pan, Panceta, Ketchup, Mostaza, Mayonesa',
    Family: 'Pancho',
    image: '/assets/pancho_panceta.png'
  },
  {
    name: 'Pancho Completo',
    price: 3.50,
    stars: 4,
    ingredients: 'Salchicha, Pan, Queso, Panceta, Salsa Golf',
    Family: 'Pancho',
    image: '/assets/pancho_completo.png'
  },
  {
    name: 'Pizza Margarita',
    price: 7.00,
    stars: 5,
    ingredients: 'Tomate, Queso Mozzarella, Albahaca, Aceite de Oliva',
    Family: 'Pizza',
    image: '/assets/pizza_margarita.png'
  },
  {
    name: 'Pizza Pepperoni',
    price: 7.50,
    stars: 5,
    ingredients: 'Tomate, Queso Mozzarella, Pepperoni, Orégano',
    Family: 'Pizza',
    image: '/assets/pizza_pepperoni.png'
  },
  {
    name: 'Pizza Cuatro Quesos',
    price: 8.00,
    stars: 5,
    ingredients: 'Queso Mozzarella, Queso Azul, Queso Parmesano, Queso Provolone',
    Family: 'Pizza',
    image: '/assets/pizza_cuatro_quesos.png'
  },
  {
    name: 'Pizza Napolitana',
    price: 7.50,
    stars: 4,
    ingredients: 'Tomate, Queso Mozzarella, Anchoas, Aceitunas, Orégano',
    Family: 'Pizza',
    image: '/assets/pizza_napolitana.png'
  },
  {
    name: 'Pizza Hawaiana',
    price: 7.00,
    stars: 3,
    ingredients: 'Tomate, Queso Mozzarella, Jamón, Piña',
    Family: 'Pizza',
    image: '/assets/pizza_hawaiana.png'
  },
  {
    name: 'Chivito Vegetariano',
    price: 5.50,
    stars: 4,
    ingredients: 'Lechuga, Tomate, Huevo Frito, Queso, Salsa de Yogurt',
    Family: 'Chivito',
    image: '/assets/chivito_vegetariano.png'
  },
  {
    name: 'Hamburguesa Vegetariana',
    price: 4.50,
    stars: 4,
    ingredients: 'Lechuga, Tomate, Hamburguesa de Garbanzos, Queso, Salsa de Yogurt',
    Family: 'Hamburguesa',
    image: '/assets/hamburguesa_vegetariana.png'
  },
  {
    name: 'Pancho Vegetariano',
    price: 2.80,
    stars: 3,
    ingredients: 'Salchicha Vegetariana, Pan, Ketchup, Mostaza',
    Family: 'Pancho',
    image: '/assets/pancho_vegetariano.png'
  }
];

// conjunto de familias de productos
const FAMILIES = [
  'Hamburguesa',
  'Chivito',
  'Pancho',
  'Pizza',
  'Ensalada'
];

// Sección de Productos
const products = document.querySelector(".products");

const printProduct = (Products) => {

  products.innerHTML = ""; // Limpiar productos anteriores
  for (const Product of Products) {
    const divProduct = document.createElement("div");

    const divImgProduct = document.createElement("div");
    const imgProduct = document.createElement("img");

    const divInfoProduct = document.createElement("div");
    const nameProduct = document.createElement("h2");
    const ingredientsProduct = document.createElement("p");
    const priceProduct = document.createElement("h3");
    const divStarsProduct = document.createElement("div");
    const cestaImg = document.createElement("img");

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("div");
      star.className = "Star";

      if (Product.stars >= i) {
        star.classList.add("Rellena");
      }

      divStarsProduct.append(star);
    }

    imgProduct.src = Product.image;
    nameProduct.textContent = Product.name;
    ingredientsProduct.textContent = Product.ingredients;
    priceProduct.textContent = `${Product.price} €`;
    const imgSrc1 = "/assets/bolsa-de-la-compra.png";
    const imgSrc2 = "/assets/bolsa-de-la-compra-menos.png";
    cestaImg.src = imgSrc1

    divImgProduct.append(imgProduct);
    divInfoProduct.append(nameProduct);
    divInfoProduct.append(ingredientsProduct);
    divInfoProduct.append(priceProduct);

    divProduct.append(divImgProduct);
    divProduct.append(divInfoProduct);
    divProduct.append(divStarsProduct);
    divProduct.append(cestaImg);
    products.append(divProduct);

    divProduct.className = "cardProduct ";
    imgProduct.className = "Image";
    nameProduct.className = "Name";
    priceProduct.className = "Price";
    cestaImg.className = "cestaCompra";

    ingredientsProduct.className = "Ingredients";
    divStarsProduct.classList.add("Stars");
    divStarsProduct.classList.add("flex-container");

    //cambio imagen de cesta

    cestaImg.addEventListener("click", () => {
      if (cestaImg.src.includes(imgSrc1)) {
        cestaImg.src = imgSrc2;
        cestaImg.style.opacity = 0.3;
      } else {
        cestaImg.src = imgSrc1;
        cestaImg.style.opacity = 1;
      }
    });

  }
}
printProduct(PRODUCTS);


//aside de filtros

const aside = document.querySelector(".Services");
const selectFamily = document.querySelector('.select');
const article = document.querySelector(".Cards-Serv");

let selectedFamily = '';
let maxPrice = Infinity;


const createFilterFamily = () => {

  const selectFamily = document.querySelector('.select');
  selectFamily.id = "familyService";
  selectFamily.className = "select";

  const Option = document.createElement("option");
  Option.disabled = true;
  Option.value = "";
  Option.defaultSelected = true;
  Option.textContent = "Elije que comer";
  selectFamily.appendChild(Option);

  for (const family of FAMILIES) {
    const option = document.createElement("option");
    option.textContent = family;
    option.className = 'family';
    option.value = family;
    selectFamily.appendChild(option);
  }

  selectFamily.addEventListener("change", (e) => {
    selectedFamily = e.target.value;
    applyCombinedFilters();
  });

};
createFilterFamily();


const createFilterPrice = () => {

  const labelPrice = document.createElement("label");
  labelPrice.className = "labelPrice flex-container";

  const inputPrice = document.createElement("input");
  inputPrice.id = "inputPrice";
  inputPrice.type = "number";
  inputPrice.className = "inputPrice";
  inputPrice.placeholder = "Precio";
  inputPrice.step = 2;
  inputPrice.min = 0;
  inputPrice.max = 20;
  labelPrice.append(inputPrice);

  const buttonPrice = document.createElement("button");
  buttonPrice.id = "buttonPrice";
  buttonPrice.className = "inButton";
  buttonPrice.textContent = "Buscar";
  buttonPrice.type = "button";
  labelPrice.append(buttonPrice);

  buttonPrice.addEventListener('click', () => {
    maxPrice = parseFloat(inputPrice.value) || Infinity;
    applyCombinedFilters();
  });

  aside.insertBefore(labelPrice, selectFamily);
};
createFilterPrice();


const applyCombinedFilters = () => {
  const FILTERED = PRODUCTS.filter(product => {
    return (selectedFamily === '' || product.Family === selectedFamily) &&
      (product.price <= maxPrice);
  });

  if (FILTERED.length === 0) {
    const randomProducts = PRODUCTS.sort(() => 0.5 - Math.random()).slice(0, 3);

    const message = document.createElement("h3");
    message.id = "message";
    message.textContent = "No se encontraron productos con los filtros introducidos. Aquí tienes algunos productos sugeridos:";
    aside.insertBefore(message, article);

    printProduct(randomProducts);

  } else {
    printProduct(FILTERED);

  }
};


const createCleanButton = () => {

  const buttonClean = document.createElement("button");
  buttonClean.id = "buttonClean";
  buttonClean.className = "inButton";
  buttonClean.textContent = "Limpiar búsqueda";
  buttonClean.type = "button";

  buttonClean.addEventListener('click', () => {
    selectedFamily = '';
    maxPrice = Infinity;

    const selectFamily = document.querySelector("#familyService");
    selectFamily.value = '';

    const inputPrice = document.querySelector("#inputPrice");
    inputPrice.value = '';

    const message = document.querySelector("#message");
    message.textContent = "";


    printProduct(PRODUCTS);
  });

  aside.insertBefore(buttonClean, article);
};
createCleanButton();