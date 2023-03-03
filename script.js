const billInput = document.querySelector("#bill-input");
const customTip = document.querySelector("#custom-tip");
const people = document.querySelector("#people");

const totalResult = document.querySelector("#total-result");
const amountResult = document.querySelector("#amount-result");

const btns = document.querySelectorAll(".btn");
const resetBtn = document.querySelector("#reset");

let billValue;
let tipValue;
let peopleValue;





operations(billValue, tipValue, peopleValue);
billInput.addEventListener("input", function (e) {
    inputLengthControl(e.target, 12);
    billValue = parseInt(e.target.value);
    operations(billValue, tipValue, peopleValue);

});

customTip.addEventListener("input", function (e) {
    inputLengthControl(e.target, 3);
    tipValue = parseInt(e.target.value);
    operations(billValue, tipValue, peopleValue);
});

people.addEventListener("input", function (e) {
    inputLengthControl(e.target, 10);
    peopleValue = parseInt(e.target.value);
    operations(billValue, tipValue, peopleValue);
});



resetBtn.addEventListener("click", function () {
    billInput.value = "";
    customTip.value = "";
    people.value = "";
    totalResult.textContent = "$0.00";
    amountResult.textContent = "$0.00";
    customTip.setAttribute("placeholder", "Custom");
    billValue = "";
    tipValue = "";
    peopleValue = "";

    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
        document.querySelector(".click-element.btn.active").classList.remove("active");
    }

});


for (let btn of btns) {

    btn.addEventListener("click", function (e) {

        // Active Style

        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";



        tipValue = parseInt(e.target.textContent.substring(0, 2));

        if (btn.classList.contains("input")) {
            tipValue = parseInt(e.target.value);
            btn.setAttribute("placeholder", "");
        }
        else {
            document.querySelector(".click-element.btn.input").value = "";
            document.querySelector(".click-element.btn.input").setAttribute("placeholder", "Custom");
        }


        operations(billValue, tipValue, peopleValue);
    });
}


function operations(billValue, tipValue, peopleValue) {
    let amount = (billValue * tipValue / 100) / peopleValue;
    let total = billValue / peopleValue + tipValue;



    if (isNaN(total) || isNaN(amount) || total === Infinity || amount === Infinity) {

        total = 0;
        amount = 0;
    }

    amountResult.textContent = `$${amount.toFixed(2)}`;
    totalResult.textContent = `$${total.toFixed(2)}`;

    if (amountResult.textContent.length > 6 || document.querySelector("#total-result").textContent > 6) {
        amountResult.style.fontSize = "1.1rem";
        totalResult.style.fontSize = "1.1rem";
    }
    else {
        amountResult.style.fontSize = "2rem";
        totalResult.style.fontSize = "2rem";
    }


}


function inputLengthControl(target, value) {
    if (target.value.length > value) {
        target.value = target.value.slice(0, value);
    }
}




