function hideall() {
	for (var i=1;i<8;i++) {
	document.getElementById("r" + i).style.display = "none";
		}
	document.getElementById("roomsmain").style.display = "none";
	document.getElementById("Portal_Gunmain").style.display = "none";
}

function hideallitem() {
	for (var i=1;i<7;i++) {
	document.getElementById("rt" + i).style.display = "none";
		}
}

function findSelection(field) {
	var i;
    var test = document.getElementsByName(field);
    var sizes = test.length;
    for (i=0; i < sizes; i++) {
            if (test[i].checked==true) {
            return test[i].value;
        }
    }
}
var preimg;
function takes(itnum) {
	hideallitem();
	var room =  findSelection("moving");
	if (room < 1 || room == null) {room = 1}
	
	document.getElementById("rt" + itnum).style.display = "inline-block";
	document.getElementById("img" + room + "a" + itnum).style.display = "none";
	
	if (preimg > 0) {
	document.getElementById("img" + room + "a" + preimg).style.display = "inline-block";}

	return preimg = itnum;
}

function avoidterry() {
	document.getElementById("terry").style.display = "none";

}

function move() {
	var scarryterry = Math.floor(Math.random() * 4) + 4;
	hideall();
	var room =  findSelection("moving");
	document.getElementById("r" + room).style.display = "block";
	if (room == scarryterry) {
		document.getElementById("terry").style.display = "block";
		
		alert("Do not Touch Terry, scare him with the Leser pistol");
	}
}


function portal() {
	document.getElementById("Portal_Gunmain").style.display = "flex";
	document.getElementById("roomsmain").style.display = "none";
}
function walk() {
	document.getElementById("Portal_Gunmain").style.display = "none";
	document.getElementById("roomsmain").style.display = "flex";
}
function takeportal() {
	document.getElementById("portalitem").style.display = "none";
	document.getElementById("portalgunitem").style.display = "inline-block";
}
function takeSyringe() {
	document.getElementById("Syringe").style.display = "inline-block";
}

var summersay = "Go and see your grandba in the Garage";
var ricksay = "Find your mother, sha sha she took the Syringe \nWubba lubba dub dub!!!!!!";
var birdpersonsay = "I can not help you Morty, I am looking for my mega seeds";
var queensay = "Go the hell out of this planet you LITTLE MALE";
var tommysay = "I do not talk to childern, go out of here"; 
var rosexsay = "This is not the time to have sex, I need to help Rick"; 
var plumsay = "What is this thing???? \nRick says Everybody knows what a Plumbus does!!"; 
var meessay = "HIII I am mr. Meeseeks"; 
var losesay = "Scarry Terry killed you, Do you want to play again?";
var winsay = "Okey Morty, Do you want to play again?";

function say(para){
	alert(para);
}
var birdf = false;
function mega() {
	if (findSelection("moving") == 4) {
	alert("Thanks Morty \nLets go to talk to Tommy and find your mom");
	document.getElementById("rt5").style.display = "none";
	document.getElementById("birdid").style.display = "none";
	preimg = 0;
	birdf = true;
	} 
}

function tombird(){
	if (birdf == true) {
		document.getElementById("beth").style.display = "inline-block";
}
	else {alert(tommysay);}
}

function die(aa){
	var con = confirm(aa);
	if (con == true) {
location.reload();
}
}

function helprick() {
	if (findSelection("moving") == 3) {
	document.getElementById("win").style.display = "block";
	document.getElementById("r3").style.display = "none";
	hideallitem()	
	document.getElementById("Syringe").style.display = "none";
	document.getElementById("portalgunitem").style.display = "none";
	alert("Gubba nub nub doo rah kah!!!! \nGo away Morty, I did not need your help!!");
	} 
}

document.querySelectorAll().style.d

