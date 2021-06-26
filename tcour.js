var my = document.getElementById('my');

var cour;

var ki = document.getElementById('ki');
var ki1 = document.getElementById('ki1');
var ki2 = document.getElementById('ki2');



function kl() {
    cour = document.getElementById('xd').value;

    var node = document.createElement("li");
    var textnode = document.createTextNode(cour);

    node.appendChild(textnode);
    my.appendChild(node);

}

function del() {

    my.removeChild(my.childNodes[1]);

}

ki.addEventListener("click", function() {
    location.replace("ques.html");
  });

  ki1.addEventListener("click", function() {
    location.replace("ques.html");
  });

  ki2.addEventListener("click", function() {
    location.replace("ques.html");
  });
