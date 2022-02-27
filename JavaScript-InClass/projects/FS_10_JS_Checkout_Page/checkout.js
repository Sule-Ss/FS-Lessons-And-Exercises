const taxRate = 0.18;
const shippingPrice =15.0;

/* ---- Oturum İşlemleri ------- */
/* 
localStorage    : Tarayıcı kapatılsa dahi clear yapılmadığı sürece silinmez.
ssessionStorage : Tarayıcı kapatıldığında veriler silinir.
*/
/* 
localStorage.getItem() // ekrana verileri çekmek için 
localStorage.setItem() //Ekrana çekilen veriler üzerinde oynama yapma(silme, ekleme vs..)
 */

/* window.addEventListener("load", ()=>{
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);

    sessionStorage.setItem("taxRate", taxRate);
    sessionStorage.setItem("shippingPrice", shippingPrice);

}) */

//! Capturing

let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (e) =>{
    let quantityP = e.target.parentElement.parentElement.querySelector("#product-quantity");
    console.log(quantityP);
    // console.log(e.target);
    //! minus buttons (target hedef elemente götürür)
    if (e.target.classList.contains("fa-minus") || e.target == quantityP.parentElement.firstElementChild) {
        if (quantityP.innerText > 1) {
            quantityP.innerText--;
            //calculateProductTotal
            //calculateCartTotal
        }
        else{
            if(confirm("Product will be removed!")){
                quantityP.parentElement.parentElement.parentElement.remove();
                //calculateCartTotal
            }
        }
        // console.log("minusBtn clicked");
    }

    //! plus buttons
    else if(e.target.className == "fas fa-plus" || e.target == quantityP.parentElement.lastElementChild){
        quantityP.innerText++;
         //calculateProductTotal
         //calculateCartTotal


        // console.log("plusBtn clicked");
    }

    //! remove buttons
    else if(e.target.className == "remove-product"){
        quantityP.parentElement.parentElement.parentElement.remove();
        //calculateCartTotal


        // e.target.parentElement.parentElement.remove();
        // console.log("removeBtn clicked");

    }

    else{
        console.log(e.target);
    }
})