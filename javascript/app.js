var cities = ["gdynia", "warszawa", "krakow", "katowice", "poznan", "lublin"];

function hide_all() {
	cities
		.map(function(element) {
			return element + "-map";
		})
		.forEach(function(id) {
			document.getElementById(id).style.display = "none";
		});
}

function ShowCityFactory(city) {
	return function() {
		hide_all();
		document.getElementById(city + "-map").style.display = "block";
	};
}

// elementy o id np. "gdynia" dostają własną zmieną, nie trzeba robić selektorów

cities.forEach(function(city) {
	window[city].onclick = ShowCityFactory(city);
});

hide_all();
ShowCityFactory("poznan")();
