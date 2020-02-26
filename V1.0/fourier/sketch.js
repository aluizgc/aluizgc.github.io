let tempo = 0;
let onda = [];

let slider;

function setup(){
    createCanvas(600,400);
    slider = createSlider(1, 50, 1)
}

function draw(){
    background(0);
    translate(150,200);
    let x = 0;
    let y = 0;

    for (let i = 0; i<slider.value(); i++){
        let prevx = x;
        let prevy = y;
        let n = (i*2)+1;
        let raio = 75*(4/(n*PI));
        stroke(255, 100);
        noFill();
        ellipse(prevx,prevy,raio*2);
        x += raio*cos(n*tempo);
        y += raio*sin(n*tempo);
        
        //fill(255);
        stroke(255);
        line(prevx,prevy,x,y);

        //ellipse(x,y,8);
}
    onda.unshift(y);     
    translate(200,0);
    line(x-200,y,0,onda[0])   
    beginShape();
    noFill();
    for(let i=0; i< onda.length; i++){
        vertex(i,onda[i]);
    }
    endShape();
    tempo += 0.03;
    if (onda.length > 500){
        onda.pop();
    }

}