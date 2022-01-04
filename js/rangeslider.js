const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".output-num input"),
progress = document.querySelector(".rangeslider-price .progress");

let priceGap = 200000;
let VND = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });


rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }
        else{
            priceInput[0].value = VND.format(minVal);
            priceInput[1].value = VND.format(maxVal);
            progress.style.left = (minVal/rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal/rangeInput[1].max) * 100 + "%";
        }
       

    });
});



