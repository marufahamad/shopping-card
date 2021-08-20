function updateNumber(item, isIncreasing, price) {
    const number = document.getElementById(item + '-number');
    let numberCount = number.value;
    if (isIncreasing == true) {
        numberCount = parseFloat(numberCount) + 1;
    }
    else if (numberCount > 0) {
        numberCount = parseFloat(numberCount) - 1;
    }
    number.value = numberCount;
    // update total amount
    const totalAmount = document.getElementById(item + '-price');
    totalAmount.innerText = price * numberCount;
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = productInput.value;
    return productNumber;
}

function calculateTotal() {
    const iphoneTotal = getInputValue('iphone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = iphoneTotal + caseTotal;
    const tax = subTotal * 0.1;
    const total = subTotal + tax;

    document.getElementById('sub-total-amount').innerText = subTotal;
    document.getElementById('total-tax').innerText = tax;
    document.getElementById('total-amount').innerText = total;

}


// phone increase decrease events
document.getElementById('iphone-plus').addEventListener('click', function () {
    updateNumber('iphone', true, 1219);
});

document.getElementById('iphone-minus').addEventListener('click', function () {
    updateNumber('iphone', false, 1219);
});

//case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateNumber('case', true, 59);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateNumber('case', false, 59);
});


