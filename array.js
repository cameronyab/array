

//                0   1  2  3  4 
let circleSizes =[50,75,30,45,82]

let circleIndex=0;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    fill(255, 255, 255);
    ellipse(width/2, height/2, circleSizes [circleIndex])

}
function mousePressed(){
    circleIndex++

    if (circleIndex == circleSizes.length){
        circleIndex= 0;
    }
}