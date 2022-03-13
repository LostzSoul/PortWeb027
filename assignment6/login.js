window.onload = loginLoad;
function loginLoad()
{

	var GOLogin = document.getElementById("myLogin");
    GOLogin.onsubmit = checkLogin;
}

function checkLogin()
{
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	const urlcheck = new URLSearchParams(queryString);
	const userName = urlcheck.get('username');	
	const passName = urlcheck.get('password1');
	var NamePass = document.forms["myLogin"]["username"]
    var WordPass = document.forms["myLogin"]["password"]
	
	if((userName != NamePass.value ) || (passName != WordPass.value) )
	{
		alert("Username หรือ Password ไม่ถูกต้อง");
		return false;
		
	}
	else
	{
		alert("Login สำเร็จ");
	}
}

			