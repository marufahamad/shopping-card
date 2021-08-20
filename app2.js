function inputButton(inputId, isAdd, price) {
    const iphonePlus = document.getElementById(inputId + '-number');
    let Number = iphonePlus.value;
    if (isAdd == true) {
        iphonePlus.value = parseInt(Number) + 1;
    }
    else if (Number > 0) {
        iphonePlus.value = parseInt(Number) - 1;
    }
    Number = iphonePlus.value;
    const productInput = document.getElementById(inputId + '-price');
    const productPrice = productInput.innerText;
    const newProductPrice = Number * price;
    productInput.innerText = newProductPrice;
    // console.log(productPrice);
    updateTotal();
}

function getTotal(inputId) {
    const productTotal = document.getElementById(inputId + '-price').innerText;
    return productTotal;
}


function updateTotal() {
    const iphoneTotal = getTotal('iphone');
    const caseTotal = getTotal('case');

    const subtotal = parseFloat(iphoneTotal) + parseFloat(caseTotal);
    const tax = subtotal / 10;
    const total = subtotal + tax;

    document.getElementById('sub-total-amount').innerText = subtotal;
    document.getElementById('total-tax').innerText = tax;
    document.getElementById('total-amount').innerText = total;

}





document.getElementById('iphone-plus').addEventListener('click', function () {
    /*  
     const iphonePlus = document.getElementById('iphone-number');
     let iphoneNumber = iphonePlus.value;
     iphonePlus.value = parseInt(iphoneNumber) + 1;
      */
    inputButton('iphone', true, 1219);

})

document.getElementById('iphone-minus').addEventListener('click', function () {
    inputButton('iphone', false, 1219);
})


document.getElementById('case-plus').addEventListener('click', function () {
    inputButton('case', true, 59);
})

document.getElementById('case-minus').addEventListener('click', function () {
    inputButton('case', false, 59);
})