function genopt() {
    let code = '';
    let opt = '0123456789';

    for (let i = 0; i < 6; i++) {
        let store = opt.charAt(Math.floor(Math.random() * 10));
        code += store;
    }

    // Display the generated OTP
    document.getElementsByClassName('genopt_code')[0].innerHTML = code;
    alert(code); 
}

function refresh() {
    genopt(); 
}


function submit(){
    let email=document.getElementsByClassName('email')[0].value;
    let password=document.getElementsByClassName('password')[0].value;

    if(email == "1234@gmail.com" && password == "1234")
        window.location.href="apna_bank.html";
    

}