var canvas = new fabric.Canvas("myCanvas");

width = 30;
height = 30;
var player_object;
var block_object;

playerX = 100;
playerY = 100;

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_object);
    })
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        block_object = Img;
        block_object.scaleToWidth(150);
        block_object.scaleToHeight(150);
        block_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_object);
    })
}

// Hulk's Face

function hulk_face() {
    newImage(hulk_face.png);
}

// Hulk's Body

function hulk_body() {
    newImage(hulk_body.png);
}

// Hulk's Left Hand

function hulk_left_hand() {
    newImage(hulk_left_hand.png);
}

// Hulk's Right Hand

function hulk_right_hand() {
    newImage(hulk_right_hand.png);
}

// Hulk's Legs Hand

function hulk_legs() {
    newImage(hulk_legs.png);
}

// ---
// ---
// ---

// Ironman's Face

function iron_face() {
    newImage(ironman_face.png);
}

// Ironman's Body

function iron_body() {
    newImage(ironman_body.png);
}

// Ironman's Left Hand

function iron_left_hand() {
    newImage(ironman_left_hand.png);
}

// Ironman's Right Hand

function iron_right_hand() {
    newImage(ironman_right_hand.png);
}

// Ironman's Legs Hand

function iron_legs() {
    newImage(ironman_legs.png);
}

// ---
// ---
// ---

// Spiderman's Face

function spi_face() {
    newImage(spi_face.png);
}

// Spiderman's Body

function spi_body() {
    newImage(spiderman_body.png);
}

// Spiderman's Left Hand

function spi_left_hand() {
    newImage(spiderman_left_hand.png);
}

// Spiderman's Right Hand

function spi_right_hand() {
    newImage(spiderman_right_hand.png);
}

// Spiderman's Legs Hand

function spi_legs() {
    newImage(spiderman_legs.png);
}

// ---
// ---
// ---

// Mr America's Left Hand

function cap_left_hand() {
    newImage(captain_america_left_hand.png);
}

// Thor's Face

function tho_face() {
    newImage(thor_face.png);
}

// Thor's Left Hand

function tho_left_hand() {
    newImage(thor_left_hand.png);
}

// Thor's Right Hand

function tho_right_hand() {
    newImage(thor_right_hand.png);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("A key has been pressed! The code is " + keyPressed);
//For p and shift
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and Shift has been pressed together!");

        height = height + 10;
        width = width + 10;

        document.getElementById("height").innerHTML = height;
        document.getElementById("width").innerHTML = width;
    }
//For m and shift
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and Shift has been pressed together!");

        height = height - 10;
        width = width - 10;

        document.getElementById("height").innerHTML = height;
        document.getElementById("width").innerHTML = width;
    }
//For Up
    if (keyPressed == '38') {
        up();
        console.log("Up has been Pressed!");
    }
//For Down
    if (keyPressed == '40') {
        down();
        console.log("Down has been Pressed!");
    }
//For Left
    if (keyPressed == '37') {
        left();
        console.log("Left has been Pressed!");
    }
//For Right
    if (keyPressed == '39') {
        right();
        console.log("Right has been Pressed!");
    }

}

function up() {
    if (playerY >= 0) {
        playerY = playerY - height;
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down() {
    if (playerY < 500) {
        playerY = playerY + height;
        canvas.remove(player_object);
        playerUpdate();
    }
}

function left() {
    if (playerX > 0) {
        playerX = playerX - width;
        canvas.remove(player_object);
        playerUpdate();
    }
}

function right() {
    if (playerX < 850) {
        playerX = playerX + width;
        canvas.remove(player_object);
        playerUpdate();
    }
}