function friend(){
    let num = parseInt(document.getElementById("num").value);
    let msg;

    if(num  < 13){
        msg = ("1 kms");
    }
    else if(num  >= 13 && num <=18){
        msg = ("5 kms");
    }
    else{
        msg = ("YOU CAN HAVE FRIENDS FROM ANYWHERE");
    }

    document.getElementById("res").innerHTML = msg;
}