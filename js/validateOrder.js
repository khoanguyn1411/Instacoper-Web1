
// FUNCTION CHOOSE PAYMENT METHOD

var btnCard = document.getElementById("btnCard");
var btnCOD = document.getElementById("btnCOD"); 

var detailCard = document.getElementById("detailCard");
var detailCOD = document.getElementById("detailCOD");

var icCard = document.getElementById("icCard");
var icCOD = document.getElementById("icCOD");

btnCard.addEventListener("click",function(){
    if(detailCard.style.display === "block"){
        detailCard.style.display = "none";
        icCard.style.border = "0.75px solid black";

    }
    else{
        detailCard.style.display = "block";
        detailCOD.style.display = "none";
        icCard.style.border = "4px solid #F54253";
        icCOD.style.border = "0.75px solid black";

    }
})
btnCOD.addEventListener("click",function(){
    if(detailCOD.style.display === "block"){
        detailCOD.style.display = "none";
        icCOD.style.border = "0.75px solid black";
    }
    else{
        detailCOD.style.display = "block";
        detailCard.style.display = "none";
        icCOD.style.border = "4px solid #F54253";
        icCard.style.border = "0.75px solid black";

    }
})


// FUNCTION VALIDATE USER INFO

var txtName = document.getElementById("txtName");
var txtPhone = document.getElementById("txtPhone");
var txtAddress = document.getElementById("txtAddress");
var selectProvince = document.getElementById("selectProvince");
var selectDistrict = document.getElementById("selectDistrict");
var selectWard = document.getElementById("selectWard");

var txtErrorName = document.getElementById("txtErrorName");
var txtErrorPhone = document.getElementById("txtErrorPhone");
var txtErrorAddress = document.getElementById("txtErrorAddress");
var txtErrorProvince = document.getElementById("txtErrorProvince");
var txtErrorDistrict = document.getElementById("txtErrorDistrict");
var txtErrorWard = document.getElementById("txtErrorWard");

var btnOrder = document.getElementById("btnOrder");


txtName.addEventListener("input",function(){
    if(txtName.value===""){
        txtErrorName.style.display = "block";
        return false;
    }
    else{
        txtErrorName.style.display = "none";
         return true;
    }
});

txtPhone.addEventListener("input",function(){
    if(txtPhone.value===""){
        txtErrorPhone.style.display = "block";
        return false;
    }
    else{
        txtErrorPhone.style.display = "none";
         return true;
    }
});

txtAddress.addEventListener("input",function(){
    if(txtAddress.value===""){
        txtErrorAddress.style.display = "block";
        return false;
    }
    else{
        txtErrorAddress.style.display = "none";
         return true;
    }
});

btnOrder.addEventListener("click",function validation(){   
    isClicked = true; 
    function validateName(){
        if(txtName.value===""){
            txtErrorName.style.display = "block";
            return false;
        }
        else{
            txtErrorName.style.display = "none";
            return true;
        }
    }
    
    function validatePhone(){
        if(txtPhone.value===""){
            txtErrorPhone.style.display = "block";
            return false;
        }
        else{
            txtErrorPhone.style.display = "none";
            return true;
        }
    }
    
    function validateAddress(){
        if(txtAddress.value ===""){
            txtErrorAddress.style.display = "block";
            return false;
        }
        else{
            txtErrorAddress.style.display = "none";
            return true;
        }
    }
    
    function validateProvince(){
        if(selectProvince.value ==="0"){
            txtErrorProvince.style.display = "block";
            return false;
        }
        else{
            txtErrorProvince.style.display = "none";
            return true;
        }
    }
    
    function validateDistrict(){
        if(selectDistrict.value==="0"){
            txtErrorDistrict.style.display = "block";
            return false;
        }
        else{
            txtErrorDistrict.style.display = "none";
            return true;
        }
    }
    
    function validateWard(){
        if(selectWard.value==="0"){
            txtErrorWard.style.display = "block";
            return false;
        }
        else{
            txtErrorWard.style.display = "none";
            return true;
        }
    }

    validateName();
    validatePhone();
    validateAddress();
    validateProvince();
    validateWard();
    validateDistrict();

    if(validateName() && validatePhone() && validateAddress() 
    && validateProvince() && validateWard()  && validateDistrict()
    ){
        alert("Đặt hàng thành công!");
        window.location.replace("index.html");
    }
})








