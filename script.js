const seeAll = document.querySelector("#seeAll");
const seeDiscounts = document.querySelector("#seeDiscounts");
const seeTotalSum = document.querySelector("#seeTotalSum");
const seeVegetarian = document.querySelector("#seeVegetarian");

const list = document.querySelector('ul')
const resultSumEWithDiscount = document.querySelector('#total_price_with_discount')

// forEach ->> Mostrar todos os produtos

let myLi = ''

const showAll = (productsArray) => {

    myLi = ''

    productsArray.forEach(product => {

        myLi += `
            <li>
                <img src=${product.src} />
                <p>${product.name}</p>
                <p class="item_price">R$ ${product.price}</p>
            </li>
        `
    });

    list.innerHTML = myLi

    resultSumEWithDiscount.style.display = 'none'
}

// MAP ->> dar 10% de desconto para todos os produtos

const showDiscount = () => {
    const newPrices = menuOptions.map(product => ({
        ...product,
        price: product.price * .9
    }))

    showAll(newPrices)
}

// REDUCE ->> Somar e dar a diferença do valor com e sem desconto de todos os produtos

const totalSum = () => {
    myLi = ''

    const totalPrice = menuOptions.reduce((acc, product) => {
        return acc + product.price
    }, 0)
    const fullDiscountedPrice = menuOptions.reduce((acc, product) => {
        return acc + product.price * .9
    }, 0)
    
    list.innerHTML = myLi

    resultSumEWithDiscount.style.display = 'block'
    resultSumEWithDiscount.innerHTML = `
        A soma total dos produtos fica em R$ ${totalPrice}<br> 
        Com desconto de 10% você pagará um total de R$ ${fullDiscountedPrice}
    `
}

// Filter ->> Filtrar para somente os produtos veganos

const vegetarianFilter = () => {
    const vegetarians = menuOptions.filter (product => {
        return product = product.vegan === true
    })

    showAll(vegetarians)
}

seeAll.addEventListener('click', () => showAll(menuOptions))
seeDiscounts.addEventListener('click', showDiscount)
seeTotalSum.addEventListener('click', totalSum)
seeVegetarian.addEventListener('click', vegetarianFilter)