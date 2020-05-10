var menu_show = false;

function menu_toggle(){
	if(menu_show == false) {
		document.getElementById("nav-bar").style.display = "block";
		menu_show = true;
	} else {
		document.getElementById("nav-bar").style.display = "none";
		menu_show = false;
	}
}
function juju() {
	var scrawnyo = new Audio('Juju on dat beat lyrics in words.mp3');
	scrawnyo.play();
}