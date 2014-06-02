// This is a solo challenge

// Your mission description:
// Save Jesse from Uncle Jack by killing him
// and giving Jesse a chance to escape.
// 

// Pseudocode
// 
// Create 1 object for the hostage with a name, location and status.
// Create 1 object for the thug with a name, location and status
// Create 1 object for the hero with a name, location, status and enemy
// Create method that moves foward (moveForward)
// Create method that attacks thug (attack)
// Create method that moves Jesse (moveHostage)

// Initial Code

var hostage={
	name: "Jesse",
	age: 21,
	location: "jail cell",
	status: "locked up"
}

var thug={
	name: "Uncle Jack",
	age: 50,
	location: "at gate",
	status: "alive"
}

var hero={
	name: "Walt",
	age: 50,
	location: "outside building",
	status: "waiting",
	enemy: "Uncle Jack"
}

var moveForward = function(){
	hero.status="ready to attack";
	alert("It's time to approach the gate and get ready to attack " + hero.enemy + "!");
}

var attack = function(){
	if (hero.status==="ready to attack"){
		alert(hero.name + " attacks and yells \"Die you filthy animal!\"");
		thug.status="dead"}
	else {
		alert(hero.name + " must move forward before attacking.")
	}
}

var moveHostage = function(){
	if (thug.status==="dead"){
		hostage.location="free";
		alert(hostage.name + " escapes from the jail cell! Hooray!")
	}
	else{
		alert(hero.name + " must attack before " + hostage.name + " can escape.")
	}

}



// Refactored Code

//Create object for hostage
var hostage={
	name: "Jesse",
	location: "jail cell",
}

//Create object for thug
var thug={
	name: "Uncle Jack",
	location: "at gate",
}

//Create object for hero
var hero={
	name: "Walt",
	status: "waiting",
	enemy: "Uncle Jack"
}

//Create function that moves hero forward
var moveForward = function(){
	if (hero.status==="waiting"){
		hero.status="ready to attack";
		console.log(hero.name + " has approached the gate and is ready to attack " + hero.enemy + ".")
	}
	else if (hero.status==="ready to attack"){
		console.log(hero.name + " is already outside the building and ready to attack.")
	}
	else if (hero.status==="already attacked"){
		console.log(hero.name + " has already killed " + hero.enemy + ".")
	}
	else{
		console.log(hostage.name + " has already escaped!")
	}
}

//Create function that attacks enemy
var attack = function(){
	if (hero.status==="ready to attack"){
		console.log(hero.name + " attacks " + hero.enemy + " and growls, \"I am the danger!\"");
		thug.status="dead";
		hero.status="already attacked"
	}
	else if (hero.status==="waiting"){
		console.log(hero.name + " must move forward and attack " + hero.enemy + " before " + hostage.name + " can escape.")
	}
	else if(hero.status==="already attacked"){
		console.log(hero.name + " has already killed " + hero.enemy + ".")
	}
	else{
		console.log(hostage.name + " has already escaped!")
	}
}

//Create function that frees hostage
var freeHostage = function(){
	if (hero.status==="already attacked"){
		hero.status="hero";
		console.log(hostage.name + " escapes from the jail cell! Hooray!")
	}
	else if (hero.status==="waiting"){
		console.log(hero.name + " must move forward and attack " + hero.enemy + " before " + hostage.name + " can escape.")
	}
	else if (hero.status==="ready to attack"){
		console.log(hero.name + " must attack " + hero.enemy + " before " + hostage.name + " can escape.")
	}
	else {
		console.log(hostage.name + " has already escaped!")
	}
}


// Reflection
// 
// The most difficult part of this challenge was writing the pseudocode. Since I generally like to dive in 
// head first and start writing the code, I had to fight the temptation to do that this time. I tried
// my best to focus on the mission description and started from there. 

// After writing the initial code, I ended up making significant changes during the refactoring. I believe 
// we are supposed to focus on cleaning up the code itself and not necessarily changing the external 
// behavior. Nonetheles, I found myself adding several if and else if statements to make the code more 
// usable and comprehensive. 

// Overall, I feel like this challenge was the most helpful for me this week. I enjoyed having
// practice building objects and manipulating them with functions. I also learned a lot about the process
// of writing pseudocode and refactoring.
// 
// 
// 