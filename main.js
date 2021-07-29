console.log("ml5 version:",ml5.version);

noseX= 0;
noseY= 0;
difference=0;
leftWrist= 0;
rightWrist=0;
color_= "#000000";
text_= "Hello World";
 
function preload(){

}

function setup(){
    canvas= createCanvas(380,380);
    canvas.position(700,210);
    video= createCapture(VIDEO);
    video.size(380,420);
    video.position(0,250);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    background("#969A97");
    stroke(color_);
    fill(color_);
    textSize(difference);
    text(text_,noseX,noseY);
}

function modelLoaded(){
    console.log("posenet is loaded :D")
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
        noseX= result[0].pose.nose.x;
        noseY= result[0].pose.nose.y;
        leftWrist= result[0].pose.leftWrist.x;
        rightWrist= result[0].pose.rightWrist.x;
        difference= abs(floor(leftWrist-rightWrist));
    }
}
function add_word(){
text_= document.getElementById("word_input").value;
color_= document.getElementById("color_input").value;
console.log(text,color);
}