document.getElementById("gdynia-map").style.display = "none";
document.getElementById("warszawa-map").style.display = "none";
document.getElementById("krakow-map").style.display = "none";
document.getElementById("katowice-map").style.display = "none";
document.getElementById("poznan-map").style.display = "block";

var gdynia=document.getElementById("gdynia");
var warszawa=document.getElementById("warszawa");
var poznan=document.getElementById("poznan");
var krakow=document.getElementById("krakow");
var katowice=document.getElementById("katowice");

function showGdynia() {
	document.getElementById("katowice-map").style.display = "none";
	document.getElementById("gdynia-map").style.display = "block";
	document.getElementById("warszawa-map").style.display = "none";
	document.getElementById("poznan-map").style.display = "none";
	document.getElementById("krakow-map").style.display = "none";
}

function showWarszawa() {
	document.getElementById("katowice-map").style.display = "none";
	document.getElementById("warszawa-map").style.display = "block";
	document.getElementById("gdynia-map").style.display = "none";
	document.getElementById("poznan-map").style.display = "none";
	document.getElementById("krakow-map").style.display = "none";
}

function showPoznan() {
	document.getElementById("katowice-map").style.display = "none";
	document.getElementById("poznan-map").style.display = "block";
	document.getElementById("gdynia-map").style.display = "none";
	document.getElementById("warszawa-map").style.display = "none";
	document.getElementById("krakow-map").style.display = "none";
}

function showKrakow() {
	document.getElementById("katowice-map").style.display = "none";
	document.getElementById("krakow-map").style.display = "block";
	document.getElementById("poznan-map").style.display = "none";
	document.getElementById("gdynia-map").style.display = "none";
	document.getElementById("warszawa-map").style.display = "none";
}

function showKatowice() {
	document.getElementById("katowice-map").style.display = "block";
	document.getElementById("krakow-map").style.display = "none";
	document.getElementById("poznan-map").style.display = "none";
	document.getElementById("gdynia-map").style.display = "none";
	document.getElementById("warszawa-map").style.display = "none";
}

gdynia.onclick = showGdynia;
warszawa.onclick = showWarszawa;
poznan.onclick = showPoznan;
krakow.onclick = showKrakow;
katowice.onclick = showKatowice;