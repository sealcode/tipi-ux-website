document.getElementById("gdynia-map").style.display = "none";
document.getElementById("warszawa-map").style.display = "none";
document.getElementById("poznan-map").style.display = "block";

var gdynia=document.getElementById("gdynia");
var warszawa=document.getElementById("warszawa");
var poznan=document.getElementById("poznan");

function showGdynia() {
	document.getElementById("gdynia-map").style.display = "block";
	document.getElementById("warszawa-map").style.display = "none";
	document.getElementById("poznan-map").style.display = "none";
}

function showWarszawa() {
	document.getElementById("warszawa-map").style.display = "block";
	document.getElementById("gdynia-map").style.display = "none";
	document.getElementById("poznan-map").style.display = "none";
}

function showPoznan() {
	document.getElementById("poznan-map").style.display = "block";
	document.getElementById("gdynia-map").style.display = "none";
	document.getElementById("warszawa-map").style.display = "none";
}

gdynia.onclick = showGdynia;
warszawa.onclick = showWarszawa;
poznan.onclick = showPoznan;