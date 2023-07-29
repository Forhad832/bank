document.getElementById("loginBtn").addEventListener("click", function(){
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    if(email === 'forhad@gmail.com' && pass === 'forhad'){
        window.location.assign("bank.html");
        console.log(email,pass);
    }else{
        alert("hacker baba");
    }
});



