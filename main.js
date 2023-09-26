bones = "";
natural = "";
rx = 0;
lx = 0;
ry = 0;
ly = 0;

function preload() {
    bones = loadSound("Bones(PaglaSongs).mp3");
    natural = loadSound("Imagine-Dragons-Natural-Official-Music-Video.mp3");
}

function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded() {
    console.log("pio");
}

function draw() {
    image(video, 0, 0, 450, 350);
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        rx = results[0].pose.rightWrist.x;
        ry = results[0].pose.rightWrist.y;
        lx = results[0].pose.leftWrist.x;
        ly = results[0].pose.leftWrist.y;
    }
}