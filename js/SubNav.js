

//Toggle sản phẩm
$(document).ready(function(){
    $('#link-sp').click(function(event){
        event.stopPropagation();
         $("#sub-sanpham").slideToggle("fast");
    });
    $("#sub-sanpham").bind("click", function (event) {
        event.stopPropagation();
    });
    
});

$(document).bind("click", function () {
    $("#sub-sanpham").hide();
});


//Toggle Blog Cần sửa id 
$(document).ready(function(){
    $('#link-blog').click(function(event){
        event.stopPropagation();
         $("#sub-blog").slideToggle("fast");
    });
    $("#sub-blog").bind("click", function (event) {
        event.stopPropagation();
    });
    
});

$(document).bind("click", function () {
    $("#sub-blog").hide();
});

  

// toggle FAQ
$(document).ready(function(){
    $('#link-faq').click(function(event){
        event.stopPropagation();
         $("#sub-FAQS").slideToggle("fast");
    });
    $("#sub-FAQS").bind("click", function (event) {
        event.stopPropagation();
    });
    
});

$(document).bind("click", function () {
    $("#sub-FAQS").hide();
});


// Đây là mở cái này đóng cái kia 

$(document.getElementById('link-sp')).bind("click", function () {
    $("#sub-blog").hide();
    $("#sub-FAQS").hide();
    $(".hd-cart-menu").hide();
    $(".hd-user-container").hide();
});


$(document.getElementById('link-faq')).bind("click", function () {
    $("#sub-sanpham").hide();
    $("#sub-blog").hide();
    $(".hd-cart-menu").hide();
    $("#sub-sanpham").hide();
    $(".hd-user-container").hide();
});

$(document.getElementById('link-blog')).bind("click", function () {
    $("#sub-sanpham").hide();
    $("#sub-FAQS").hide();
    $(".hd-cart-menu").hide();
    $("#sub-sanpham").hide();
    $(".hd-user-container").hide();
});




////////////////Sub nav 2

////////////////////////////////////////////////Sản phẩm 


//Thương hiệu 
$(document).ready(function(){
    $('#link-thuonghieu').click(function(event){
        event.stopPropagation();
         $("#sub-thuonghieu").slideToggle("fast");
    });
    $("#sub-thuonghieu").bind("click", function (event) {
        event.stopPropagation();
    });
    
});

$(document).bind("click", function () {
    $("#sub-thuonghieu").hide();
});
 
$(document.getElementById('link-phukien')).bind("click", function () {
    $("#sub-thuonghieu").hide();
});


// Phụ kiện

$(document).ready(function(){
    $('#link-phukien').click(function(event){
        event.stopPropagation();
         $("#sub-phukien").slideToggle("fast");
    });
    $("#sub-phukien").bind("click", function (event) {
        event.stopPropagation();
    });
    
});

$(document).bind("click", function () {
    $("#sub-phukien").hide();
});
$(document.getElementById('link-thuonghieu')).bind("click", function () {
    $("#sub-phukien").hide();
});

//Chủ đề
$(document).ready(function(){
    $('#link-chude').click(function(event){
        event.stopPropagation();
         $("#sub-chude").slideToggle("fast");
    });
    $("#sub-chude").bind("click", function (event) {
        event.stopPropagation();
    });
    
});

$(document).bind("click", function () {
    $("#sub-chude").hide();
});



////////////////////////////////////////////////FAQs

// Hỗ trợ khách hàng 


$(document).bind("click", function () {
    $("#sub-hotrokhachhang").hide();
});
$(document).ready(function(){
    $('#link-hotrokhachhang').click(function(event){
        event.stopPropagation();
         $("#sub-hotrokhachhang").slideToggle("fast");
    });
    $("#sub-hotrokhachhang").bind("click", function (event) {
        event.stopPropagation();
    });
    
});

$(document).bind("click", function () {
    $("#sub-hotrokhachhang").hide();
});
$(document.getElementById('link-chinhsach')).bind("click", function () {
    $("#sub-hotrokhachhang").hide();
});

// Chính sách

$(document).bind("click", function () {
    $("#sub-chinhsach").hide();
});
$(document).ready(function(){
    $('#link-chinhsach').click(function(event){
        event.stopPropagation();
         $("#sub-chinhsach").slideToggle("fast");
    });
    $("#sub-chinhsach").bind("click", function (event) {
        event.stopPropagation();
    });
    
});

$(document).bind("click", function () {
    $("#sub-chinhsach").hide();
});
$(document.getElementById('link-hotrokhachhang')).bind("click", function () {
    $("#sub-chinhsach").hide();
});



// User Đăng nhập && Đăng ký

$(document).ready(function(){
    $('#btnUserResLog').click(function(event){
        event.stopPropagation();
         $(".hd-user-container").slideToggle("fast");
    });
    $(".hd-user-container").bind("click", function (event) {
        event.stopPropagation();
    });
    
});

$(document).bind("click", function () {
    $(".hd-user-container").hide();
});

$(document.getElementById('btnOpenCart')).bind("click", function () {
    $(".hd-user-container").hide();
    $("#sub-blog").hide();
    $("#sub-FAQS").hide();
    $("#sub-sanpham").hide();
});

//Cart 


$(document).ready(function(){
    $('#btnOpenCart').click(function(event){
        event.stopPropagation();
         $(".hd-cart-menu").slideToggle("fast");
    });
    $(".hd-cart-menu").on("click", function (event) {
        event.stopPropagation();
    });
});

$(document).on("click", function () {
    $(".hd-cart-menu").hide();
});

$(document.getElementById('btnUserResLog')).bind("click", function () {
    $(".hd-cart-menu").hide();
    $("#sub-blog").hide();
    $("#sub-FAQS").hide();
    $("#sub-sanpham").hide();
});












