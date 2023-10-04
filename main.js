
function s(){
x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2v_EK6mFf/model.json',modelLoaded)
}
function modelLoaded(){
console.log("modelLoaded");
x.classify(GetResult);
}
function GetResult(error,result){
if (error) {
console.log(error);
}
else{
console.log(result);
r=Math.floor(Math.random()*255)+1;
g=Math.floor(Math.random()*255)+1;
b=Math.floor(Math.random()*255)+1;
document.getElementById("a").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("h").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("h").innerHTML="I Can Hear - "+result[0].label;
document.getElementById("a").innerHTML="Accuracy - "+(result[0].confidence*100).toFixed(2)+"%";

i=document.getElementById("a1");
q=document.getElementById("a2");


if (result[0].label=="Dog Barking") {
i.src="giphy.gif";
q.src="download.png";

}
else if(result[0].label=="Cat Meowing"){
    i.src="cat.gif";
    q.src="dog.png";
    
}
else if(result[0].label=="banging"){
    i.src="aliens-01.png";
    q.src="aliens-02.png";
    
}
else {


    i.src="aliens-01.png";
    q.src="aliens-02.png";
    
}
}}