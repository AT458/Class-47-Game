var gameState = 0;
var startButton, startButtonImg;
var key1, key1Img;
var key2, key2Img;
var key3, key3Img;
var key4, key4Img;
var key5, key5Img;
var key6, key6Img;
var key7, key7Img;
var key8, key8Img;
var key9, key9Img;
var key0, key0Img;
var yourAnswer;
var correctAnswer;
var score = 0;
var hour, minute, second;
var qsecond, perm = false;
var q2, q2Img;
var q4, q4Img;
var correctSound, wrongSound;

function preload() {
    startButtonImg = loadImage("Images/Start Button.png");
    key1Img = loadImage("Images/1.png");
    key2Img = loadImage("Images/2.png");
    key3Img = loadImage("Images/3.png");
    key4Img = loadImage("Images/4.png");
    key5Img = loadImage("Images/5.png");
    key6Img = loadImage("Images/6.png");
    key7Img = loadImage("Images/7.png");
    key8Img = loadImage("Images/8.png");
    key9Img = loadImage("Images/9.png");
    key0Img = loadImage("Images/0.png");
    q2Img = loadImage("Images/Q2 - Triangle.png");
    q4Img = loadImage("Images/Q4 - Rectangle.png");

    correctSound = loadSound("Sounds/Correct.mp3");
    wrongSound = loadSound("Sounds/Wrong.mp3");
}

function setup() {
    createCanvas(windowWidth - 25, windowHeight - 25);

    startButton = createSprite(windowWidth/2, windowHeight/2 + 100, 20, 20);
    startButton.addImage("startButton", startButtonImg);

    key1 = createSprite(30, windowHeight/2, 20, 20);
    key1.addImage("key1", key1Img);
    key1.scale = 0.45;

    key2 = createSprite(105, windowHeight/2, 20, 20);
    key2.addImage("key2", key2Img);
    key2.scale = 0.45;

    key3 = createSprite(180, windowHeight/2, 20, 20);
    key3.addImage("key3", key3Img);
    key3.scale = 0.45;

    key4 = createSprite(255, windowHeight/2, 20, 20);
    key4.addImage("key4", key4Img);
    key4.scale = 0.45;

    key5 = createSprite(330, windowHeight/2, 20, 20);
    key5.addImage("key5", key5Img);
    key5.scale = 0.45;

    key6 = createSprite(405, windowHeight/2, 20, 20);
    key6.addImage("key6", key6Img);
    key6.scale = 0.45;

    key7 = createSprite(480, windowHeight/2, 20, 20);
    key7.addImage("key7", key7Img);
    key7.scale = 0.45;

    key8 = createSprite(555, windowHeight/2, 20, 20);
    key8.addImage("key8", key8Img);
    key8.scale = 0.45;

    key9 = createSprite(630, windowHeight/2, 20, 20);
    key9.addImage("key9", key9Img);
    key9.scale = 0.45;

    key0 = createSprite(705, windowHeight/2, 20, 20);
    key0.addImage("key0", key0Img);
    key0.scale = 0.45;

    q2 = createSprite(windowWidth/2, windowHeight/2 + 150, 20, 20);
    q2.addImage("q2", q2Img);
    q2.scale = 0.5;

    q4 = createSprite(windowWidth/2, windowHeight/2 + 150, 20, 20);
    q4.addImage("q4", q4Img);
    q4.scale = 0.5;

    hour = 0;
    minute = 0;
    second = 0;
    qsecond = 0;
}

function draw() {
    background(0);

    if (gameState === 1 || gameState === 2 || gameState === 3 || gameState === 4 || gameState === 5) {
        fill("white");
        textSize(30);
        text(hour + ":" + minute + ":" + second, windowWidth/2 + 450, windowHeight/2 - 250);

        if (frameCount % 30 === 0) {
            second = second + 1;
            qsecond = qsecond + 1;
        }
    
        if (second === 60) {
            minute = minute + 1;
            second = 0;
        }
    
        if (minute === 60) {
            hour = hour + 1;
            minute = 0;
        }
    }

    if (gameState === 0) {
        fill("red");
        textSize(50);
        text("Math Game", windowWidth/2 - 130, windowHeight/2 - 250)

        startButton.visible = true;

        if (mousePressedOver(startButton) && mouseDown("left")) {
            gameState = 1;
        }

        key1.visible = false;
        key2.visible = false;
        key3.visible = false;
        key4.visible = false;
        key5.visible = false;
        key6.visible = false;
        key7.visible = false;
        key8.visible = false;
        key9.visible = false;
        key0.visible = false;
        q2.visible = false;
        q4.visible = false;
    }

    if (gameState === 1) {
        startButton.visible = false;

        fill("white");
        textSize(20);
        text("Question 1: 3x + 5 = 29, what is x?", windowWidth/2 - 150, windowHeight/2 - 250);

        key1.visible = true;
        key2.visible = true;
        key3.visible = true;
        key4.visible = true;
        key5.visible = true;
        key6.visible = true;
        key7.visible = true;
        key8.visible = true;
        key9.visible = true;
        key0.visible = true;
        q2.visible = false;
        q4.visible = false;

        if (mousePressedOver(key1) && mouseWentDown("left")) {
            yourAnswer = 1;
            gameState = 2;
            qsecond = 0;
            wrongSound.play();
        }
        if (mousePressedOver(key2) && mouseWentDown("left")) {
            yourAnswer = 2;
            gameState = 2;
            qsecond = 0;
            wrongSound.play();
        }
        if (mousePressedOver(key3) && mouseWentDown("left")) {
            yourAnswer = 3;
            gameState = 2;
            qsecond = 0;
            wrongSound.play();
        }
        if (mousePressedOver(key4) && mouseWentDown("left")) {
            yourAnswer = 4;
            gameState = 2;
            qsecond = 0;
            wrongSound.play();
        }
        if (mousePressedOver(key5) && mouseWentDown("left")) {
            yourAnswer = 5;
            gameState = 2;
            qsecond = 0;
            wrongSound.play();
        }
        if (mousePressedOver(key6) && mouseWentDown("left")) {
            yourAnswer = 6;
            gameState = 2;
            qsecond = 0;
            wrongSound.play();
        }
        if (mousePressedOver(key7) && mouseWentDown("left")) {
            yourAnswer = 7;
            gameState = 2;
            qsecond = 0;
            wrongSound.play();
        }
        if (mousePressedOver(key8) && mouseWentDown("left")) {
            yourAnswer = 8;
            gameState = 2;
            qsecond = 0;
            correctSound.play();
        }
        if (mousePressedOver(key9) && mouseWentDown("left")) {
            yourAnswer = 9;
            gameState = 2;
            qsecond = 0;
            wrongSound.play();
        }
        if (mousePressedOver(key0) && mouseWentDown("left")) {
            yourAnswer = 0;
            gameState = 2;
            qsecond = 0;
            wrongSound.play();
        }

        correctAnswer = 8;

        if (yourAnswer === correctAnswer) {
            score = score + 1;
            yourAnswer = 0;
        }
    }

    if (gameState === 2) {
        startButton.visible = false;
        q2.visible = true;
        q4.visible = false;

        fill("white");
        textSize(20);
        text("Question 2: If the area of a triangle is 34cm and the height 10 cm, what is the base?", windowWidth/2 - 400, windowHeight/2 - 250);

        if (qsecond >= 3) {
            perm = true;
        }
        
        if (mousePressedOver(key1) && mouseWentDown("left") && perm === true) {
            yourAnswer = 1;
            gameState = 3;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key2) && mouseWentDown("left") && perm === true) {
            yourAnswer = 2;
            gameState = 3;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key3) && mouseWentDown("left") && perm === true) {
            yourAnswer = 3;
            gameState = 3;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key4) && mouseWentDown("left") && perm === true) {
            yourAnswer = 4;
            gameState = 3;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key5) && mouseWentDown("left") && perm === true) {
            yourAnswer = 5;
            gameState = 3;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key6) && mouseWentDown("left") && perm === true) {
            yourAnswer = 6;
            gameState = 3;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key7) && mouseWentDown("left") && perm === true) {
            yourAnswer = 7;
            gameState = 3;
            qsecond = 0;
            perm = false;
            correctSound.play();
        }
        if (mousePressedOver(key8) && mouseWentDown("left") && perm === true) {
            yourAnswer = 8;
            gameState = 3;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key9) && mouseWentDown("left") && perm === true) {
            yourAnswer = 9;
            gameState = 3;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key0) && mouseWentDown("left") && perm === true) {
            yourAnswer = 0;
            gameState = 3;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }

        correctAnswer = 7;

        if (yourAnswer === correctAnswer) {
            score = score + 1;
            yourAnswer = 0;
        }
    }

    if (gameState === 3) {
        startButton.visible = false;
        q2.visible = false;
        q4.visible = false;

        fill("white");
        textSize(20);
        text("Question 3: 9x + 23 = 50, what is x?", windowWidth/2 - 150, windowHeight/2 - 250);

        if (qsecond >= 3) {
            perm = true;
        }

        if (mousePressedOver(key1) && mouseWentDown("left") && perm === true) {
            yourAnswer = 1;
            gameState = 4;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key2) && mouseWentDown("left") && perm === true) {
            yourAnswer = 2;
            gameState = 4;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key3) && mouseWentDown("left") && perm === true) {
            yourAnswer = 3;
            gameState = 4;
            qsecond = 0;
            perm = false;
            correctSound.play();
        }
        if (mousePressedOver(key4) && mouseWentDown("left") && perm === true) {
            yourAnswer = 4;
            gameState = 4;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key5) && mouseWentDown("left") && perm === true) {
            yourAnswer = 5;
            gameState = 4;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key6) && mouseWentDown("left") && perm === true) {
            yourAnswer = 6;
            gameState = 4;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key7) && mouseWentDown("left") && perm === true) {
            yourAnswer = 7;
            gameState = 4;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key8) && mouseWentDown("left") && perm === true) {
            yourAnswer = 8;
            gameState = 4;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key9) && mouseWentDown("left") && perm === true) {
            yourAnswer = 9;
            gameState = 4;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key0) && mouseWentDown("left") && perm === true) {
            yourAnswer = 0;
            gameState = 4;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }

        correctAnswer = 3;

        if (yourAnswer === correctAnswer) {
            score = score + 1;
            yourAnswer = 0;
        }
    }

    if (gameState === 4) {
        startButton.visible = false;
        q2.visible = false;
        q4.visible = true;

        fill("white");
        textSize(20);
        text("Question 4: If the perimeter of a rectangle is 46cm and the breadth is 20cm, what is the length?", windowWidth/2 - 400, windowHeight/2 - 250);

        if (qsecond >= 3) {
            perm = true;
        }

        if (mousePressedOver(key1) && mouseWentDown("left") && perm === true) {
            yourAnswer = 1;
            gameState = 5;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key2) && mouseWentDown("left") && perm === true) {
            yourAnswer = 2;
            gameState = 5;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key3) && mouseWentDown("left") && perm === true) {
            yourAnswer = 3;
            gameState = 5;
            qsecond = 0;
            perm = false;
            correctSound.play();
        }
        if (mousePressedOver(key4) && mouseWentDown("left") && perm === true) {
            yourAnswer = 4;
            gameState = 5;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key5) && mouseWentDown("left") && perm === true) {
            yourAnswer = 5;
            gameState = 5;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key6) && mouseWentDown("left") && perm === true) {
            yourAnswer = 6;
            gameState = 5;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key7) && mouseWentDown("left") && perm === true) {
            yourAnswer = 7;
            gameState = 5;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key8) && mouseWentDown("left") && perm === true) {
            yourAnswer = 8;
            gameState = 5;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key9) && mouseWentDown("left") && perm === true) {
            yourAnswer = 9;
            gameState = 5;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key0) && mouseWentDown("left") && perm === true) {
            yourAnswer = 0;
            gameState = 5;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }

        correctAnswer = 3;

        if (yourAnswer === correctAnswer) {
            score = score + 1;
            yourAnswer = 0;
        }
    }

    if (gameState === 5) {
        startButton.visible = false;
        q2.visible = false;
        q4.visible = false;

        fill("white");
        textSize(20);
        text("Question 5: If a = 1, b = 3 and c = 6, what is a+b+c - a(b+c)?", windowWidth/2 - 300, windowHeight/2 - 250);

        if (qsecond >= 3) {
            perm = true;
        }

        if (mousePressedOver(key1) && mouseWentDown("left") && perm === true) {
            yourAnswer = 1;
            gameState = 6;
            qsecond = 0;
            perm = false;
            correctSound.play();
        }
        if (mousePressedOver(key2) && mouseWentDown("left") && perm === true) {
            yourAnswer = 2;
            gameState = 6;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key3) && mouseWentDown("left") && perm === true) {
            yourAnswer = 3;
            gameState = 6;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key4) && mouseWentDown("left") && perm === true) {
            yourAnswer = 4;
            gameState = 6;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key5) && mouseWentDown("left") && perm === true) {
            yourAnswer = 5;
            gameState = 6;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key6) && mouseWentDown("left") && perm === true) {
            yourAnswer = 6;
            gameState = 6;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key7) && mouseWentDown("left") && perm === true) {
            yourAnswer = 7;
            gameState = 6;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key8) && mouseWentDown("left") && perm === true) {
            yourAnswer = 8;
            gameState = 6;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key9) && mouseWentDown("left") && perm === true) {
            yourAnswer = 9;
            gameState = 6;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }
        if (mousePressedOver(key0) && mouseWentDown("left") && perm === true) {
            yourAnswer = 0;
            gameState = 6;
            qsecond = 0;
            perm = false;
            wrongSound.play();
        }

        correctAnswer = 1;

        if (yourAnswer === correctAnswer) {
            score = score + 1;
            yourAnswer = 0;
        }
    }

    if (gameState === 6) {
        key1.visible = false;
        key2.visible = false;
        key3.visible = false;
        key4.visible = false;
        key5.visible = false;
        key6.visible = false;
        key7.visible = false;
        key8.visible = false;
        key9.visible = false;
        key0.visible = false;
        q2.visible = false;
        q4.visible = false;

        startButton.visible = false;

        fill("white");
        textSize(30);
        text("Score: " + score + "/5", windowWidth/2 - 100, windowHeight/2);

        fill("white");
        textSize(30);
        text("Press R to play again", windowWidth/2 - 170, windowHeight/2 - 100);

        if (keyDown("r")) {
            gameState = 0;
            score = 0;
            second = 0;
            minute = 0;
            hour = 0;
            perm = false;
        }

        fill("white");
        textSize(30);
        text(hour + ":" + minute + ":" + second, windowWidth/2 - 50, windowHeight/2 + 100);

        fill("white");
        textSize(30);
        text("Answers: Q1. 8, Q2. 7, Q3. 3, Q4. 3, Q5. 1", windowWidth/2 - 300, 100);
    }

    drawSprites();
}