const user = ["admin", "admin1"];
const pass = ["admin", "admin1"];

var ucount = 0;
var pcount = 0;

var lbtn = document.getElementById('sbmit');

var us;
var pd;

lbtn.onclick= function() {myjs()};

function myjs(){

    us = document.getElementById('uname').value;
    pd = document.getElementById('pwd').value;

    // document.write(us);
    // document.write(pd);

for (let i = 0; i < user.length; i++){
    if(us == user[i]){
        ucount = ucount + 1;
    }

    if(pd == pass[i]){
        pcount = pcount+1;
    }
}

if(ucount>0){
    if(pcount>0){
        location.replace("studcrs.html");
    }

    else{
        alert("Wrong User or Pass");
    }
}

else{
    alert("Wrong User or Pass");
}
}