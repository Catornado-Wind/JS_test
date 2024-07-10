// add alert and prompt
alert("Hello World");
let name = prompt("Enter your name: ");
if(name){
	alert("Hello " + name);
	document.getElementById("greeting").textContent = "Hello " + name;
}
else{
	alert("No name?");
	document.getElementById("greeting").textContent = "Hello no name";
}

// prompt for info
let info = prompt("Tell us about yourself");
document.getElementById("info").textContent = info;

// get date and time
let now = new Date();
let dateStr = now.toLocaleDateString();
let timeStr = now.toLocaleTimeString();
document.getElementById("datetime").innerHTML = "Date: <b>" + dateStr + "</b><br>"
document.getElementById("datetime").innerHTML += "Time: <b>" + timeStr + "</b><br>"