song = "";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
}

function preload(){
    song = loadSound("unlock-me-amapiano-music-149058.mp3");
    song = loadSound("midnight-cruiser-capturez-main-version-02-45-8757.mp3");
}