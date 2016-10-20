//Katharine LoScalzo
//18 October 2016
//Creative Coding Midterm - "Emo Cat"

//Emo Cat will ask the user a series of questions, to which the user replies either "Yes", "No", "Of Course", or "Never. Emo Cat's emotions will change based off the user's answers. 

//10/20 Update -- Sound has been added!!

var questionIndex = 0;
var numQuestions = 8; //number of cases/q's
var xPos = 0;
var yPos = 0;
var sizeX = 600;
var sizeY = 440;
//update - audio variables
var yesMeow;
var noMeow;
var ofcMeow;
var neverMeow;

function preload() {
    yesMeow = loadSound("assets/yes_meow.wav");
    noMeow = loadSound("assets/no_meow.wav");
    ofcMeow = loadSound("assets/ofc_meow.wav");
    neverMeow = loadSound("assets/never_meow.wav");
}

function setup() {
    createCanvas(600, 500);
    background(204, 255, 255);

    //light pink repeating borders
    for (var i = 0; i < 3; i++) {

        //creates colored and sized borders, fills between
        strokeWeight(8);
        stroke(255, 182, 193);
        fill(204, 255, 255);

        //location and size of internal boxes
        xPos = xPos + (17);
        yPos = yPos + (17);
        sizeX = sizeX - (35);

        rect(xPos, yPos, sizeX, sizeY);
    }

    //Emo Cat figure
    strokeWeight(1);
    stroke(0);
    fill(255, 205, 138);

    ellipse(width / 2 - 25, height / 2 + 165, 30, 20); //left foot
    ellipse(width / 2 + 25, height / 2 + 165, 30, 20); //right foot

    fill(255, 225, 150);
    ellipse(width / 2, height / 2 + 90, 100, 150); //body

    fill(255, 205, 138);
    triangle(255, 240, 288, 210, 245, 185); //left ear
    triangle(345, 240, 307, 210, 347, 180); //right ear

    fill(255, 225, 150);
    ellipse(width / 2, height / 2, 90, 90); //head

    fill(0, 255, 0);
    ellipse(width / 2 - 15, height / 2 - 7, 10, 20); //left eye
    ellipse(width / 2 + 15, height / 2 - 7, 10, 20); //right eye

    fill(0);
    ellipse(width / 2 - 15, height / 2 - 7, 3, 20); //left eye pupil
    ellipse(width / 2 + 15, height / 2 - 7, 3, 20); //right eye pupil

    fill(255, 182, 193);
    triangle(width / 2, height / 2 + 17, width / 2 + 7, height / 2 + 10, width / 2 - 7, height / 2 + 10); //nose

    //left arm
    fill(255, 205, 138);
    triangle(width / 2 - 50, height / 2 + 80, width / 2 - 30, height / 2 + 120, width / 2 - 40, height / 2 + 45);

    //right arm  
    triangle(width / 2 + 50, height / 2 + 80, width / 2 + 30, height / 2 + 120, width / 2 + 40, height / 2 + 45);

    line(width / 2 - 15, height / 2 + 12, width / 2 - 60, height / 2 + 5); //top left whisker
    line(width / 2 + 15, height / 2 + 12, width / 2 + 60, height / 2 + 5); //top right whisker

    line(width / 2 - 15, height / 2 + 17, width / 2 - 60, height / 2 + 15); //middle left whisker
    line(width / 2 + 15, height / 2 + 17, width / 2 + 60, height / 2 + 15); //middle right whisker

    line(width / 2, height / 2 + 17, width / 2, height / 2 + 26); //line under nose

    fill(255);
    rect(width / 2 - 242, 60, 480, 115); //text box
    textSize(25);
    fill(0);
    text("Click me for a new question!", 100, 105);
    text("Let's see if I like your answers . . .", 100, 143);

    //text in textbox
    textSize(25);
    fill(0);
    //text is drawn from bottom left
    //text(string, xPos, yPos)

    textSize(16);
    fill(0);
    //text is drawn from bottom left
    //text(string, xPos, yPos)
    text("Select UP for 'Yes' and DOWN for 'No'", 160, 460);
    text("LEFT for 'Of Course!' and RIGHT for 'Never!'", 135, 480);

}

function mousePressed() {

    if (questionIndex < numQuestions) {
        questionIndex += 1;
    } else {
        questionIndex = 0;
    }
}

function keyReleased() {

    //'Yes' Option
    if (keyCode == UP_ARROW) {

        //audio
        ofcMeow.stop();
        neverMeow.stop();
        noMeow.stop();

        yesMeow.setVolume(0.3);
        yesMeow.play();


        strokeWeight(1);
        arc(width / 2, height / 2 + 26, 19, 19, 0, PI, CHORD);

        fill(255, 225, 150);
        ellipse(width / 2, height / 2 + 90, 100, 150); //body

        fill(255, 225, 150);
        ellipse(width / 2, height / 2, 90, 90); //head

        fill(0, 255, 0);
        ellipse(width / 2 - 15, height / 2 - 7, 10, 20); //left eye
        ellipse(width / 2 + 15, height / 2 - 7, 10, 20); //right eye

        fill(0);
        ellipse(width / 2 - 15, height / 2 - 7, 3, 20); //left eye pupil
        ellipse(width / 2 + 15, height / 2 - 7, 3, 20); //right eye pupil

        fill(255, 182, 193);
        triangle(width / 2, height / 2 + 17, width / 2 + 7, height / 2 + 10, width / 2 - 7, height / 2 + 10); //nose

        fill(0, 255, 0);
        strokeWeight(1);
        ellipse(width / 2 - 15, height / 2 - 7, 10, 20); //left eye
        ellipse(width / 2 + 15, height / 2 - 7, 10, 20); //right eye
        fill(0);
        ellipse(width / 2 - 15, height / 2 - 7, 3, 20); //left eye pupil
        ellipse(width / 2 + 15, height / 2 - 7, 3, 20); //right eye pupil
        strokeWeight(1);

        line(width / 2 - 15, height / 2 + 12, width / 2 - 60, height / 2 + 5); //top left whisker
        line(width / 2 + 15, height / 2 + 12, width / 2 + 60, height / 2 + 5); //top right whisker

        line(width / 2 - 15, height / 2 + 17, width / 2 - 60, height / 2 + 15); //middle left whisker
        line(width / 2 + 15, height / 2 + 17, width / 2 + 60, height / 2 + 15); //middle right whisker

        line(width / 2, height / 2 + 17, width / 2, height / 2 + 26); //line under nose

        //mouth coverup
        fill(255, 0, 0);
        arc(width / 2, height / 2 + 25, 20, 20, 0, PI, CHORD)

        //left arm coverup
        stroke(204, 255, 255);
        fill(204, 255, 255);
        triangle(width / 2 - 50, height / 2 + 70, width / 2 - 105, height / 2 - 34, width / 2 - 40, height / 2 + 43);

        //right arm coverup
        triangle(width / 2 + 50, height / 2 + 70, width / 2 + 105, height / 2 - 34, width / 2 + 40, height / 2 + 43);

        //left arm
        stroke(0);
        fill(255, 205, 138);
        triangle(width / 2 - 50, height / 2 + 70, width / 2, height / 2 + 100, width / 2 - 40, height / 2 + 45);

        //right arm  
        triangle(width / 2 + 50, height / 2 + 70, width / 2, height / 2 + 100, width / 2 + 40, height / 2 + 45);

        stroke(0);
        //happy pattern
        strokeWeight(1);
        fill(255, 255, 0);
        ellipse(130, 265, 80, 80);
        ellipse(470, 465, 30, 30);
        ellipse(150, 415, 10, 10);
        ellipse(100, 225, 60, 60);
        ellipse(430, 365, 50, 50);
        ellipse(130, 265, 80, 80);
        ellipse(500, 205, 80, 80);
        ellipse(540, 325, 10, 10);
        ellipse(45, 475, 30, 30);
    }

    //--------------------------------------------

    //'NO' Option    
    if (keyCode == DOWN_ARROW) {

        //audio
        ofcMeow.stop();
        neverMeow.stop();
        yesMeow.stop();

        noMeow.setVolume(0.3);
        noMeow.play();

        //Emo Cat figure
        strokeWeight(1);
        fill(255, 205, 138);
        ellipse(width / 2 - 25, height / 2 + 165, 30, 20); //left foot
        ellipse(width / 2 + 25, height / 2 + 165, 30, 20); //right foot

        fill(255, 225, 150);
        ellipse(width / 2, height / 2 + 90, 100, 150); //body

        fill(255, 205, 138);
        triangle(255, 240, 288, 210, 245, 185); //left ear
        triangle(345, 240, 307, 210, 347, 180); //right ear

        fill(255, 225, 150);
        ellipse(width / 2, height / 2, 90, 90); //head

        fill(255, 0, 0);
        ellipse(width / 2 - 15, height / 2 - 7, 8.5, 20); //left eye
        ellipse(width / 2 + 15, height / 2 - 7, 8.5, 20); //right eye

        fill(0);
        ellipse(width / 2 - 15, height / 2 - 7, 1.8, 20); //left eye pupil
        ellipse(width / 2 + 15, height / 2 - 7, 1.8, 20); //right eye pupil

        fill(255, 182, 193);
        triangle(width / 2, height / 2 + 17, width / 2 + 7, height / 2 + 10, width / 2 - 7, height / 2 + 10); //nose

        //left arm
        fill(255, 205, 138);
        triangle(width / 2 - 50, height / 2 + 70, width / 2 - 90, height / 2 - 15, width / 2 - 40, height / 2 + 45);

        //right arm  
        triangle(width / 2 + 50, height / 2 + 70, width / 2 + 90, height / 2 - 15, width / 2 + 40, height / 2 + 45);

        line(width / 2 - 15, height / 2 + 12, width / 2 - 60, height / 2 + 5); //top left whisker
        line(width / 2 + 15, height / 2 + 12, width / 2 + 60, height / 2 + 5); //top right whisker

        line(width / 2 - 15, height / 2 + 17, width / 2 - 60, height / 2 + 15); //middle left whisker
        line(width / 2 + 15, height / 2 + 17, width / 2 + 60, height / 2 + 15); //middle right whisker

        line(width / 2, height / 2 + 17, width / 2, height / 2 + 26); //line under nose    

        //angry/shocked mouth
        fill(255, 0, 0);
        arc(width / 2, height / 2 + 30, 8, 8, 3, PI - PI / 5, CHORD);

        //angry pattern
        stroke(0);
        fill(255, 0, 0);
        ellipse(130, 265, 80, 80);
        ellipse(470, 465, 30, 30);
        ellipse(150, 415, 10, 10);
        ellipse(100, 225, 60, 60);
        ellipse(430, 365, 50, 50);
        ellipse(130, 265, 80, 80);
        ellipse(500, 205, 80, 80);
        ellipse(540, 325, 10, 10);
        ellipse(45, 475, 30, 30);
    }

    //--------------------------------------------

    //'OF COURSE' Option
    function ofCourse() {

        //audio
        yesMeow.stop();
        neverMeow.stop();
        noMeow.stop();

        ofcMeow.setVolume(0.3);
        ofcMeow.play();

        fill(255, 225, 150);
        ellipse(width / 2, height / 2 + 90, 100, 150); //body

        fill(255, 225, 150);
        ellipse(width / 2, height / 2, 90, 90); //head

        fill(0, 255, 0);
        ellipse(width / 2 - 15, height / 2 - 7, 10, 20); //left eye
        ellipse(width / 2 + 15, height / 2 - 7, 10, 20); //right eye

        fill(255, 182, 193);
        triangle(width / 2, height / 2 + 17, width / 2 + 7, height / 2 + 10, width / 2 - 7, height / 2 + 10); //nose

        fill(255, 255, 0);
        ellipse(width / 2 - 15, height / 2 - 7, 4, 20); //left eye pupil
        ellipse(width / 2 + 15, height / 2 - 7, 4, 20); //right eye pupil

        //left arm coverup
        stroke(204, 255, 255);
        fill(204, 255, 255);
        triangle(width / 2 - 50, height / 2 + 70, width / 2 - 105, height / 2 - 34, width / 2 - 40, height / 2 + 43);

        //right arm coverup
        triangle(width / 2 + 50, height / 2 + 70, width / 2 + 105, height / 2 - 34, width / 2 + 40, height / 2 + 43);

        stroke(0);
        line(width / 2 - 15, height / 2 + 12, width / 2 - 60, height / 2 + 5); //top left whisker
        line(width / 2 + 15, height / 2 + 12, width / 2 + 60, height / 2 + 5); //top right whisker

        line(width / 2 - 15, height / 2 + 17, width / 2 - 60, height / 2 + 15); //middle left whisker
        line(width / 2 + 15, height / 2 + 17, width / 2 + 60, height / 2 + 15); //middle right whisker

        line(width / 2, height / 2 + 17, width / 2, height / 2 + 26); //line under nose

        //mouth
        fill(255, 0, 0);
        arc(width / 2, height / 2 + 20, 24, 24, 0, PI, CHORD);

        //left arm
        stroke(0);
        fill(255, 205, 138);
        triangle(width / 2 - 50, height / 2 + 70, width / 2, height / 2 + 30, width / 2 - 40, height / 2 + 45);

        //right arm  
        triangle(width / 2 + 50, height / 2 + 70, width / 2, height / 2 + 30, width / 2 + 40, height / 2 + 45);

        fill(255, 20, 147);
        ellipse(470, 465, 30, 30);
        fill(0, 0, 255);
        ellipse(150, 415, 10, 10);
        fill(180, 10, 40);
        ellipse(100, 225, 60, 60);
        fill(65, 105, 225);
        ellipse(430, 365, 50, 50);
        fill(0, 255, 0);
        ellipse(130, 265, 80, 80);
        fill(255, 165, 0);
        ellipse(500, 205, 80, 80);
        fill(138, 43, 226);
        ellipse(540, 325, 10, 10);
        fill(0, 255, 255);
        ellipse(45, 475, 30, 30);
        fill(255, 0, 0);

        strokeWeight(1);
        stroke(0);
        fill(0);
        textSize(25);
        text("YAY!", 104, height / 2 + 22);
    }

    if (keyCode == LEFT_ARROW) {
        ofCourse();
    }

    //--------------------------------------------

    //'NEVER' Option
    function neverEver() {

        //audio
        ofcMeow.stop();
        yesMeow.stop();
        noMeow.stop();

        neverMeow.setVolume(0.3);
        neverMeow.play();


        fill(255, 225, 150);
        ellipse(width / 2, height / 2 + 90, 100, 150); //body

        fill(255, 225, 150);
        ellipse(width / 2, height / 2, 90, 90); //head

        fill(0);
        ellipse(width / 2 - 15, height / 2 - 7, 10, 20); //left eye
        ellipse(width / 2 + 15, height / 2 - 7, 10, 20); //right eye

        fill(255, 182, 193);
        triangle(width / 2, height / 2 + 17, width / 2 + 7, height / 2 + 10, width / 2 - 7, height / 2 + 10); //nose

        fill(255, 255, 0);
        ellipse(width / 2 - 15, height / 2 - 7, 4, 20); //left eye pupil
        ellipse(width / 2 + 15, height / 2 - 7, 4, 20); //right eye pupil

        //left arm coverup
        stroke(204, 255, 255);
        fill(204, 255, 255);
        triangle(width / 2 - 50, height / 2 + 70, width / 2 - 105, height / 2 - 34, width / 2 - 40, height / 2 + 43);

        //right arm coverup
        triangle(width / 2 + 50, height / 2 + 70, width / 2 + 105, height / 2 - 34, width / 2 + 40, height / 2 + 43);

        //left arm
        stroke(0);
        fill(255, 205, 138);
        triangle(width / 2 - 50, height / 2 + 70, width / 2 + 37, height / 2 + 80, width / 2 - 40, height / 2 + 45);

        //right arm  
        triangle(width / 2 + 50, height / 2 + 70, width / 2 - 37, height / 2 + 80, width / 2 + 40, height / 2 + 45);

        //mouth
        line(width / 2 - 9, height / 2 + 26, width / 2 + 9, height / 2 + 26)
        fill(255, 225, 150);
        stroke(255, 225, 150);
        arc(width / 2, height / 2 + 28, 20, 20, 0, PI, CHORD);

        stroke(0);
        line(width / 2 - 15, height / 2 + 12, width / 2 - 60, height / 2 + 5); //top left whisker
        line(width / 2 + 15, height / 2 + 12, width / 2 + 60, height / 2 + 5); //top right whisker

        line(width / 2 - 15, height / 2 + 17, width / 2 - 60, height / 2 + 15); //middle left whisker
        line(width / 2 + 15, height / 2 + 17, width / 2 + 60, height / 2 + 15); //middle right whisker

        line(width / 2, height / 2 + 17, width / 2, height / 2 + 26); //line under nose

        fill(0);
        ellipse(470, 465, 30, 30);
        fill(255);
        ellipse(150, 415, 10, 10);
        fill(255);
        ellipse(100, 225, 60, 60);
        fill(255);
        ellipse(430, 365, 50, 50);
        fill(0);
        ellipse(130, 265, 80, 80);
        fill(0);
        ellipse(500, 205, 80, 80);
        fill(0);
        ellipse(540, 325, 10, 10);
        fill(0);
        ellipse(45, 475, 30, 30);
        fill(255, 0, 0);

        strokeWeight(1);
        stroke(0);
        fill(255);
        textSize(25);
        text("GRR!", 99, height / 2 + 22);
    }
        if (keyCode == RIGHT_ARROW) {
            neverEver();
        }
}

function draw() {

    switch (questionIndex) {

        case 1:
            strokeWeight(1);
            stroke(0);
            fill(255);
            rect(width / 2 - 242, 60, 480, 115);
            fill(0);
            textSize(25);
            text("Do you know my name?", 130, 125);
            break;

        case 2:
            strokeWeight(1);
            stroke(0);
            fill(255);
            rect(width / 2 - 242, 60, 480, 115);
            fill(0);
            textSize(25);
            text("Am I the cutest cat you've seen?", 130, 125);
            break;

        case 3:
            strokeWeight(1);
            stroke(0);
            fill(255);
            rect(width / 2 - 242, 60, 480, 115);
            fill(0);
            textSize(25);
            text("Have you ever owned a cat?", 130, 125);
            break;

        case 5:
            strokeWeight(1);
            stroke(0);
            fill(255);
            rect(width / 2 - 242, 60, 480, 115);
            fill(0);
            textSize(25);
            text("Do you like my pretty eyes?", 130, 125);
            break;

        case 4:
            strokeWeight(1);
            stroke(0);
            fill(255);
            rect(width / 2 - 242, 60, 480, 115);
            fill(0);
            textSize(25);
            text("Do you like cats?", 130, 125);
            break;

        case 5:
            strokeWeight(1);
            stroke(0);
            fill(255);
            rect(width / 2 - 242, 60, 480, 115);
            fill(0);
            textSize(25);
            text("Are your eyes green too?", 130, 125);
            break;

        case 6:
            strokeWeight(1);
            stroke(0);
            fill(255);
            rect(width / 2 - 242, 60, 480, 115);
            fill(0);
            textSize(25);
            text("Will you be my best friend?", 130, 125);
            break;

        case 7:
            strokeWeight(1);
            stroke(0);
            fill(255);
            rect(width / 2 - 242, 60, 480, 115);
            fill(0);
            textSize(25);
            text("Can you give me some tuna?", 130, 125);
            break;

        case 8:
            strokeWeight(1);
            stroke(0);
            fill(255);
            rect(width / 2 - 242, 60, 480, 115);
            fill(0);
            textSize(25);
            text("Thanks for answering my Q's! This has", 80, 105);
            text(" been QUITE the emotional rollercoaster!", 76, 143);
            break;
    }
}