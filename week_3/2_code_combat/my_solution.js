// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Rescue Mission
// move down x2
// move right x1
// move up x2
// move right x2
// move down x1
// attack enemy x1

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// Grab the Mushroom
// move up x1
// move right x1
// move left x1
// move up x1
// attack enemy x1
 
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
 
// Drink Me
// attack enemy x1
// move right x1
// move down x1
// move up x1
// move right x1
// attack enemy x1 
 
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Guards
// move right x1
// bust down door
// move right x1
// say "Hey there!"
// move left x2
// say "Attack!"
// move right x1
// say "Follow me."
// move right x2
// move up x1
// move right x1
// say "Hey there!"
// move down x1
// move right x1
// move up x1
// move right x1

this.moveRight();
this.bustDownDoor();

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// It's a Trap
// move down x2
// say "Hey there!"
// move up x2

this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

//Break the Prison
//if name is "William" return true
//if name is "Krogg" return false
//if name is "Lucas" return true
//if name is "Brack" return false
//if name is "Gort" return false
//if name is "Marcus" return true
//if name is "Robert" return true
//if name is "MARCUS" return false
//if name is "Gordon" return true

if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
if(name === "Marcus")
    return true;
if(name === "Robert")
    return true;
if(name === "MARCUS")
    return false;
if(name === "Gordon")
    return true

// Taunt
// say "Hey!"
// say "You there, ogre!"
// say "You suck!"
// say "You're worthless!"

this.say("Hey!");
this.say("You there, ogre!");
this.say("You suck!");
this.say("You're worthless!");

// Cowardly Taunt
// move to (63, 20)
// say "Hey there!"
// move to (70, 10)

this.moveXY(63, 20);
this.say("Hey there!");
this.moveXY(70, 10)

// Commanding Followers
// move to (49,66)
// move to (60,63)
// move to (75,63)
// say "Follow me!"
// move to (68,46)
// say "Attack the ogres!"

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

this.say("Follow me!");
this.moveXY(68,46);
this.say("Attack the ogres!");


//Mobile Artillery
// move to (30,26)
// attack (46,5)
// move to (52,38)
// attack (67,52)
// attack (61,49)
// attack (48,66)
// attack (50,54)

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

this.moveXY(52, 38);
this.attackXY(67, 52);
this.attackXY(61, 49);
this.attackXY(48, 66);
this.attackXY(50, 54);

 
// Reflection:
// Write your reflection here.

// The "this" keyword refers the object that owns the current code.
// In the case of functions, "this" refers to the object that owns
// the function. I'm still wrapping my head around the concept of 
// "this" and how it is used in constructor functions. I'm comfortable
// with using the keyword, but I'm not sure if I entirely understand
// the definition of it. I'll have to do some more reading on the concept.

// The () basically allows you to call a specific method. Without the 
// parenthesis, the method would not execute. If there are arguments to 
// pass in, then you would put those within the ().

// The semicolon marks the end of an expression. 

// This exercise was helpful in teaching me how to understand the use 
// of the "this" keyword. I was able to understand how the functions
// were called and how to pass arguments into the methods. 

// I found the process of writing pseudocode both helpful and tedious.
// I prefer learning by experimentation so I was tempted to just jump
// in and start writing code, but when I stopped to write pseudocode I
// actually found myself stepping back and looking at the big picture. 
// This is great practice for when we start writing bigger programs and
// longer code that requires us to look at the big picture. 

// This game was a nice change of pace from our other challenges, but I
// think I prefer exercises where we're required to write out the functions. 
// It helps me to understand how to write the functions and methods in
// addition to calling them. I plan on completing some JS exercises
// online to spend more time practicing JS. 