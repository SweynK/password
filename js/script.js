
function shedareba(){
    let paroli1 = document.getElementById("password").value;
    let paroli2 = document.getElementById("repassword").value;
    let length1 = paroli1.length;
    let length2 = paroli2.length;
    console.log(length1);
    // console.log(paroli1, paroli2);

    if(paroli1 == "" & paroli2 == ""){
        console.log("გთხოვთ ჩაწეროთ პაროლი");
        document.getElementById("answer").innerHTML="გხოვთ ჩაწეროთ პაროლი";
        document.getElementById("answer").style.color="#000000";
        document.getElementById("password").style.border="1px solid #ff0000";
        document.getElementById("repassword").style.border="1px solid #ff0000";
    }else if(length1 < 8 & length2 <8){
        console.log("პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან!");
        document.getElementById("answer").innerHTML="პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან!";
        document.getElementById("answer").style.color="#ff0000";
    }
    else if(paroli1 != paroli2 || paroli1 == "" || paroli2 == ""){
        console.log("parolebi aremtxveva ertmanets");
        document.getElementById("answer").innerHTML="პაროლი არემთხვევა ერთმანეთს";
        document.getElementById("answer").style.color="#ff0000";
        document.getElementById("password").style.border="1px solid #000000";
        document.getElementById("repassword").style.border="1px solid #ff0000";
    }else{
        console.log('paroli emtxveva');
        document.getElementById("answer").innerHTML="პაროლი ემთხვევა";
        document.getElementById("answer").style.color="#00ff00";
        document.getElementById("password").style.border="1px solid #000000";
        document.getElementById("repassword").style.border="1px solid #000000";
    }

    



}


