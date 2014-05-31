// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Grace Yim
//  2. Whitney 


// 0. "YOU SIGNED... WHO?!"

var client1 = {
    name:"Bryan Cranston",
    age: 55,
    quote: "I am the danger!"}  
    
var client2 = {
    name:"Tom Cruise",
    age: 72,
    quote: "Show me the money!"}
    
// 1. "Here they Come!"

var client3 = {
    name:"Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!",
}

var client4 = {
    name:"Kristen Bell",
    age:33,
    quote: "Do you wanna build a snowman?"
}

var client5 = { 
    name:"Jim Carrey",
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!"
}

var clients =  new Array(client1, client2, client3, client4, client5); //synonyms: clients = [client1, client2, client3, client4, client5]

// 2. "TIME IS MONEY!"

function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
}

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 3. "SHOW 'EM OFF!"

for (i=0; i<clients.length; i++){
    alert(clients[i].name + " is " + clients[i].age + " and said \"" + clients[i].quote +"\"");
}

// 4. "But wait, there's more!"

client5.showQuote=function(){
    return this.quote;
} 

// 5.  ** BONUS **

for(i=0; i<clients.length; i++) {
    clients[i].movieStar = true;
}

//  6.  Your Reflection:

// We initially had some trouble understanding the challenge
// and determining the best way to track our client information. 
// Once we got started though, we did a good job of working 
// together and asking the instructor for help when we needed it. 

// We specifically needed help building constructor functions and
// printing out properties from objects within arrays. 

// I think I'll need to spend more time studying functions, arrays
// and object literals in JS. Also, since I'm confusing JS and Ruby, 
// I need to spend time comparing the different syntax, methods,
// properties, operations, etc. 

// I learned how to build constructor functions and how to use loops 
// in JS. I enjoyed working with Whitney and figuring out new ways of
// building functions, arrays and object literals. 

// After working through a couple of this week's challenges, I'm
// starting to feel more comfortable with JS, but I'm still not
// confident in my skills. 

// I found the entire session enjoyable, but challenging.
// It was great to be able to apply the JS skills I've learned,
// but I wasn't always confident of the choices I was making. I'm
// hoping that will get better with time as I get more comfortable
// with writing JS code. 
