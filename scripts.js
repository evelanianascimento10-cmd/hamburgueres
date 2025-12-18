const list = document.querySelector('ul')

const newFirstButton = document.querySelector('#first-button')
const newFirstButton2 = document.querySelector('#second-button')
const newFirstButton3 = document.querySelector('#third-button')
const newFirstButton4 = document.querySelector('#fourth-button')

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    return newValue
}

function firstButton(productsArray) {
    newlist = ''
productsArray.forEach((product) => {
   newlist += 
   `
       
        <li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>
 `
})

list.innerHTML = newlist

}

function buttonMap() {
    const newPraces = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

}))
   
    firstButton(newPraces)
}


function firstButtontwo(){
    const singlePrice = menuOptions.reduce((acc, value) => {
        return acc + value.price
    }, 0)
  
    
    textContent = `
    <li>
        <p class="total-price">O valor total dos produtos é R$ ${formatCurrency(singlePrice.toFixed(2))}</p>
    </li>
    `
    list.innerHTML = textContent
}


function firstButtonFilter(){
    const filterVegan = menuOptions.filter(product => {
        if (product.vegan === true){
            return true
        }
    })
   

    firstButton (filterVegan)
}
    
  
 



newFirstButton.addEventListener('click', () => firstButton (menuOptions))
newFirstButton2.addEventListener('click', buttonMap)
newFirstButton3.addEventListener('click', firstButtontwo)
newFirstButton4.addEventListener('click', firstButtonFilter)


