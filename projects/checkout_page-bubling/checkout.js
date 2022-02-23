
const total = document.querySelector(".total")
const tax = document.querySelector(".tax")
const shipping = document.querySelector(".shipping")
const netTotal = document.querySelector(".net-total")

const container = document.querySelector("#products-preview")

container.addEventListener("click", function (e) {

    if (e.target.classList.contains("plus")) {
        let quantity = e.target.parentElement.children[1]
        quantity.innerText = +quantity.innerText + 1

        let priceTotal = e.path[3].children[1].lastElementChild
        let price = e.path[3].children[1].children[1].children[0].children[0].innerText

        priceTotal.innerText = (+quantity.innerText * +price).toFixed(2)

    }
    else if (e.target.classList.contains("minus")) {
        let quantity = e.target.parentElement.children[1]
        quantity.innerText = +quantity.innerText - 1

        if (quantity.innerText == 0) e.path[3].remove()

        let priceTotal = e.path[3].children[1].lastElementChild
        let price = e.path[3].children[1].children[1].children[0].children[0].innerText

        priceTotal.innerText = (+quantity.innerText * +price).toFixed(2)
    }

    else if (e.target.classList.contains("remove-product")) {
        let productBox = e.path[3]
        productBox.remove()
    }
    updateBill()
})

function updateBill() {

    let sum = 0
    const priceTotal = document.querySelectorAll(".product-line-price")

    priceTotal.forEach(price => {
        sum += (+price.innerText)
    })
    total.innerText = (sum).toFixed(2)
    tax.innerText = ((+total.innerText) * 18 / 100).toFixed(2)

    shipping.innerText = (total.innerText !== "0.00") ? 15 : 0
    netTotal.innerText = (+total.innerText + +tax.innerText + +shipping.innerText).toFixed(2)


}
updateBill()

const addButton = document.querySelector("#add")
const productDiv = document.querySelector(".products")

addButton.addEventListener("click", () => {
    let bagAdded = false
    for (let item of productDiv.children) {
        if (item.id == "bag") bagAdded = true
    }

    if (bagAdded) return
    productDiv.innerHTML += `
    <div id="bag" class="product">
                        <img src="img/photo1.png" alt="">
                        <div class="product-info">
                            <h2>Vintage Backbag</h2>
                            <div class="product-price">
                                <p><strong>25.98</strong> <span class="line-through">34.99</span></p>
                            </div>
                            <div class="quantity-controller">
                                <button class="minus">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <p class="product-quantity">1</p> 
                                <button class="plus">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="product-removal">
                                <button class="remove-product">
                                    Remove
                                </button>
                            </div>
                            <div class="product-line-price">25.98</div>

                        </div>
                    </div>`

})

// function element(name, price, oldPrice, imageURL){
//     return (
        
//     )
// }




