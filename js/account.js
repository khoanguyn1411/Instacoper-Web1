function changepassword() 
    {
        var txtoldpassword = document.getElementById("txtoldpassword").value;
        var txtnewpassword = document.getElementById("txtnewpassword").value;
        var txtconfirmpassword = document.getElementById("txtconfirmpassword").value;

        if(txtoldpassword ==""){
            alert("Mật khẩu cũ bị trống");
            return;
        }
        else if(txtnewpassword ==""){
            alert("Mật khẩu mới bị trống");
            return;
        }
        else if(txtconfirmpassword ==""){
            alert("Xác nhận mật khẩu bị trống");
            return;
        }
        else{
            alert("Thành công!");
        } 
    }