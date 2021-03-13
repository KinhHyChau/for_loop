let database = [
	{
		username: "royalbank",
		password: "good"
	},
    {
		username: "scotia",
		password: "fine"
	},
    {
		username: "cibc",
		password: "great"
	}
];

let newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
]; 

let usernameprompt = prompt("What is your name?");
let passwordprompt = prompt("What is your password");

let isUserValid = function(user, pass){
    // for (var i=0; i<database.length; i++){
	// 	if (user === database[i].username && pass === database[i].password){
	for (i of database)	{
        if (user === i.username && pass === i.password){
            return true;
        } 
    }
    return false;
}

let signin = function (user, pass){
	if (isUserValid(user, pass)){
		console.log(newsfeed)	
		for (i of newsfeed) {
			document.write(i.username + ': ' + i.timeline + '<br>')
		}
	} else{
		alert("You enter wrong U or P");
	}
}
signin(usernameprompt, passwordprompt);
