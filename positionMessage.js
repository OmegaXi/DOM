function positionMessage(){
	if(!document.getElementById){
		return false;
	}
	if(!document.getElementById("message")){
		return false;
	}
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "25px";
	elem.style.top = "25px";
	moveElement("message",175,175,10);
	if(!document.getElementById("message2")){
		return false;
	}
	var elem = document.getElementById("message2");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	moveElement("message2",125,25,20);
}
addLoadEvent(positionMessage);