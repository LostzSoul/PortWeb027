window.onload = pageLoad;
function pageLoad()
{
	var formRegis = document.getElementById("myForm");
    formRegis.onsubmit = validateForm;
}

function validateForm()
{
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

    var OnePass = document.forms["myForm"]["password1"]
    var twoPass = document.forms["myForm"]["password2"]
    var texterr = document.getElementById("errormsg");

    if( OnePass.value != twoPass.value)
    {   
        texterr.textContent = "รหัสไม่ถูกต้อง";
       // texterr.innerHTML = "รหัสไม่ถูกต้อง";
        return false;
    }
    else 
    {   
        alert("Register สำเร็จ");
    }
    
}