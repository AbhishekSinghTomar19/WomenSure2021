var fnameV, lnameV, locationV, emailV, phoneV, goodV, reviewV, yesnoV, submitV;

function readForm() {
    fnameV = document.getElementById("fname").value;
    lnameV = document.getElementById("lname").value;
    locationV = document.getElementById("location").value;
    emailV = document.getElementById("email").value;
    phoneV = document.getElementById("phone").value;
    goodV = document.getElementById("good").value;
    yesnoV = document.getElementById("yesno").value;
    reviewV = document.getElementById("review").value;
    console.log(fnameV,lnameV,locationV,emailV, phoneV, goodV, yesnoV, reviewV);
}

document.getElementById("submit").onclick = function(){
    readForm();

    firebase
        .database()
        .ref("feedback/" + phoneV)
        .set(
            {
                fname : fnameV,
                lname: lnameV,
                location: locationV,
                email: emailV,
                phone: phoneV,
                good: goodV,
                yesno: yesnoV,
                review: reviewV,

            }
    );
    alert("Thankyou for your valuable feedback !");
    document.getElementById("fname").value ="";
    document.getElementById("lname").value="";
    document.getElementById("location").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("good").value="";
    document.getElementById("yesno").value="";
    document.getElementById("review").value="";
};