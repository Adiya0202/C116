nose_x=0;
nose_y=0;
right_shoulder_x=0;
right_shoulder_y=0;
left_shoulder_y=0;
left_shoulder_x=0;
function preload(){
    clown_nose= loadImage("https://i.postimg.cc/90KLFG9k/mustache-and-clown-nose-removebg-preview.png");
    halo= loadImage("https://i.postimg.cc/bvD9CG2Y/angel-halo-ring-removebg-preview.png");
    left_shoulder= loadImage("https://i.postimg.cc/CxjcSnxv/Left-arm-angel-wing-removebg-preview.png");
    right_shoulder= loadImage("https://i.postimg.cc/G2pKFMJN/Right-arm-angel-wing-removebg-preview.png")
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
if (results.length > 0){
    console.log(results);
    console.log("the x value of nose is "+results[0].pose.nose.x);
    console.log("the y value of nose is "+results[0].pose.nose.y);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    left_shoulder_x=results[0].pose.leftShoulder.x;
    left_shoulder_y=results[0].pose.leftShoulder.y;
    right_shoulder_x=results[0].pose.rightShoulder.x;
    right_shoulder_y=results[0].pose.rightShoulder.y;
}
}
function modelLoaded(){
    console.log("poseNet model is initialized");
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,nose_x-21,nose_y-18,50,50);
image(halo,nose_x-40,nose_y-150,80,80);
image(left_shoulder,left_shoulder_x-220,left_shoulder_y-60,100,150);
image(right_shoulder,right_shoulder_x+100,right_shoulder_y-60,100,150);
}
function pic_take(){
save("filter_library_pic.png");
}