let fName = "";
let lName = "";
let pNo = "";
let email = "";
let arr = "";
let w = "sim 1";

//array for dummy contacts
var conAll = [
	
];

var list = "<ul>";

//fetch all saved contacts
function pullContacts() {
	conAll.sort();
	for (var i = 0; i < conAll.length; i++) {
		list = list + '<li><a href="#" style="color: #FFF;"><div id="list_content"><span style="float: right; margin-right: 20px; width: 30px;"><img onclick="call('+conAll[i][3]+')" src="call.png" style="width: 12px; height: 12px; padding-left: 30px;"><br /><em style="font-family: monospace; font-size: 10px;">'+conAll[i][4]+'</em></span><span onclick="showDetails('+i+')">'+conAll[i][0]+ ' '+conAll[i][1]+ ' <br /><em style="font-size: 12px; margin-top: 3px;">'+conAll[i][3]+'</em></span></div><img id="icon" src="user-icon.png"></a></li>';
	}
	list = list + '</ul>';
	document.getElementById("list").innerHTML = list;
}

//dummy calling function
function call (x) {
	alert("Calling +234"+x+" now....");
}

//show details of the clicked contact from the list
function showDetails(x) {
	//put NIL if email add is empty
	if (conAll[x][2] == "")
		conAll[x][2] = "NIL";
	var details = "Full Name: "+conAll[x][0]+" "+conAll[x][1]+"\n";
	details = details + "Email: "+conAll[x][2]+"\n";
	details = details + "Phone: "+conAll[x][3]+"\n";
	details = details + "Location: "+conAll[x][4]+"\n";
	alert(details);

}

//close interface for adding new contactc and display saved contacts
function showContacts() {
	document.getElementById("phone").style.display = "block";
	document.getElementById("phone-container").style.display = "none";
	pullContacts();
}

//show interface for adding new contact
function addContact() {
	document.getElementById("phone").style.display = "none";
	document.getElementById("phone-container").style.display = "block";
}

//saving new contact function
function saveContact() {
	fName = document.getElementById("fName").value;
	lName = document.getElementById("lName").value;
	email = document.getElementById("email").value;
	pNo = document.getElementById("pNo").value;
	arr = document.getElementById("tosave").value;

	//check if the phone number input box is not empty
	if (pNo != "") {

		//selece where to save new contact
		if (arr == "sim 1")
			w = "sim 1";
		else if (arr == "sim 2")
			w = "sim 2";
		else 
			w = "gmail";

		//save new contact into array for use
		conAll.push([fName, lName, email, pNo, w]);

		//clear input boxes for saving new contact
		clear();
	}

	//console.log(conAll);
}


//clear all form input boxes after submitting
function clear() {
	document.getElementById("fName").value = "";
	document.getElementById("lName").value = "";
	document.getElementById("email").value = "";
	document.getElementById("pNo").value = "";
}

//function to search with x as parameter.... x is the passed in value
function sortContact(x) {

	if (x == "") 
		pullContacts();

	else {
		list = "<ul>";
		for (var i = 0; i < conAll.length; i++) {
			if (conAll[i][0].toLowerCase() == x.toLowerCase() || conAll[i][1].toLowerCase() == x.toLowerCase() || conAll[i][3] == x) {
				list = list + '<li><div id="list_content"><span style="float: right; margin-right: 20px; width: 30px;"><img src="call.png" style="width: 12px; height: 12px; padding-left: 30px;"><br /><em style="font-family: monospace; font-size: 10px;">'+conAll[i][4]+'</em></span><span>'+conAll[i][0]+ ' '+conAll[i][1]+ ' <br /><em style="font-size: 12px; margin-top: 3px;">'+conAll[i][3]+'</em></span></div><img id="icon" src="user-icon.png"></li>';
			}
		}
		list = list + '</ul>';
		document.getElementById("list").innerHTML = list;
	}
}