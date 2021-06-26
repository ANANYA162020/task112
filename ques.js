// var allQuestions = [{
//     "The tree sends downroots from its branches to the soil is know as:",
//     ["Oak", "Pine", "Banyan", "Palm"],
//     2
//   }, {
//     question: "Electric bulb filament is made of",
//     options: ["Copper", "Aluminum", "lead", "Tungsten"],
//     answer: 3
//   }, {
//     question: "Non Metal that remains liquid at room temprature is",
//     options: ["Phophorous", "Bromine", "Clorine","Helium"],
//     answer: 1
//   },{
//     question: "Which of the following is used in Pencils ?",
//     options: ["Graphite", "Silicon", "Charcoal", "Phosphorous"],
//     answer: 0
//   }, {
//     question: "Chemical formula of water ?",
//     options: ["NaA1O2", "H2O", "Al2O3", "CaSiO3"],
//     answer: 1
//   },{
//     question: "The gas filled in electric bulb is ?",
//     options: ["Nitrogen", "Hydrogen", "Carbon Dioxide", "Oxygen"],
//     answer: 0
//   },{
//     question: "Whashing soda is the comman name for",
//     options: ["Sodium Carbonate", "Calcium Bicarbonate", "Sodium Bicarbonate", "Calcium Carbonate"],
//     answer: 0
//   },{
//     question: "Which gas is not known as green house gas ?",
//     options: ["Methane", "Nitrous oxide", "Carbon Dioxide", "Hydrogen"],
//     answer: 3
//   },{
//     question: "The hardest substance availabe on earth is",
//     options: ["Gold", "Iron", "Diamond", "Platinum"],
//     answer: 2
//   },{
//     question: "Used as a lubricant",
//     options: ["Graphite", "Silica", "Iron Oxide", "Diamond"],
//     answer: 0
//     }];

var allQuestions = ["The tree sends downroots from its branches to the soil is know as:", "Electric bulb filament is made of"];

var jk = document.getElementById('jk');
var id = document.getElementById('lk');

var cour;
var cour1;

function kj() {
    cour = document.getElementById('ques').value;
    cour1= document.getElementById('ans').value;

    var node = document.createElement("li");
    var textnode = document.createTextNode(cour);

    var node1 = document.createElement("li");
    var textnode1 = document.createTextNode(cour1);

    node.appendChild(textnode);
    jk.appendChild(node);

    node1.appendChild(textnode1);
    lk.appendChild(node1);

}

function del() {

    jk.removeChild(jk.childNodes[1]);

    lk.removeChild(lk.childNodes[1]);

}