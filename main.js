  video = "";
  status="";
  function preload() {
    video = loadImage ('dog_cat.jpg');

}


  function setup () {
 
     canvas =createCanvas ( 380 , 380);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(380,380)
     video.hide
     objectDetector =ml5.objectDetector('cocossd'  , modelLoaded);
     document.getElementById("status").innerHTML = "status : detecting Objects";

 }
 function draw () {
     image( video, 0,0,380,380);
     if (status   !="")
     {
       r = random(255);
       g = random(255);
       b = random(255);
       objectDetector.detect(vvideo,gotResults);
       for(i=0; i<objects.length; i++)
       {
         document.getElementById("status").innerHTML =  "Status : Object Detected";
         document.getElementById("number_of_objects").innerHTML =  "baby found" + objects.length;

         fill(r,g,b);
         persent = floor(objects[i].confidence * 100);
         text (objects[i].label + "" +persent +"%", objects[i].x +15, objects[i].y + 15);
         noFill();
         stroke(r,g,b);
         rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height);
       }

     }
     fill("#FF0000");
     text("dog" , 45, 75);
     noFill();
     stroke("#FF0000");
     rect(30, 60,450,350);

     fill("#FF0000") ;
     text("Cat" , 320 , 120);
     noFill();
     stroke("#FF0000");
     rect(300,90,270,320);

 }
 function modelLoaded() {
   console.log("Model Loaded!")
   status=true;
   objectDetector.detct(video, gotResult);
 }

 function gotResult(error,results) {
   if (error){
     console.log(error);
   }
   console.log(results)

 }

