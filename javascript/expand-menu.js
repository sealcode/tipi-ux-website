var navbar = document.getElementById("navbar");
var menu   = document.getElementById("expanded-menu");


/*
document.getElementById("expand-menu").addEventListener("click", () => {
  navbar.classList.toggle("navbar-expanded");
});

*/

$('#expand-menu').click(function() {
	$("#navbar").toggleClass('navbar-expanded');
	//console.log($("#navbar").attr('class'));
});
