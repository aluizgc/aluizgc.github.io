
let x = [];
let y = [];
let fourierY;
let fourierX;

let tempo = 0;
let caminho = [];


function setup() {
    createCanvas(600, 400);
    let angulo = 0;
    for (let i = 0; i < 100; i++) {
        angulo = map(i,0,100,0,TWO_PI)
        y[i] = 70*cos(angulo);
        x[i] = 70*sin(angulo);
    }
    fourierY = dft(y);
    fourierX = dft(x);
}

function epiciclos(x,y,rotacao,fourier) {
    for (let i = 0; i < fourier.length; i++) {
        let prevx = x;
        let prevy = y;
        let freq = fourier[i].freq;
        let raio = fourier[i].amp;
        let fase = fourier[i].fase;
        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, raio * 2);
        x += raio * cos(freq * tempo + fase + rotacao);
        y += raio * sin(freq * tempo + fase + rotacao);

        stroke(255);
        line(prevx, prevy, x, y);
    }
    return createVector(x,y);
}

function draw() {
    background(0);

    let vx = epiciclos(300,50,0,fourierX);
    let vy = epiciclos(50,200,HALF_PI,fourierY);
    let v = createVector(vx.x, vy.y);
    let x = 0;
    let y = 0;

    caminho.unshift(v);
    line(vx.x, vx.y, v.x,v.y);
    line(vy.x, vy.y, v.x,v.y);
    beginShape();
    noFill();
    for (let i = 0; i < caminho.length; i++) {
        vertex(caminho[i].x, caminho[i].y);
    }
    endShape();

    const dt = TWO_PI / fourierY.length;
    tempo += dt;
    if (caminho.length > 500) {
        caminho.pop();
    }

}