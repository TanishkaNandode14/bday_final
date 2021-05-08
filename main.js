function preload()
{
}

function setup()
{
    canvas = createCanvas(730, 380);              
    canvas.position(387, 300);
    video = createCapture(VIDEO);
    video.hide();
    loadImage('confetti.jpg');

    tint_color = "";
}

function draw()
{
    image(video, 100, 0, 530, 380);
    
    //1 circle on the left
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(47, 120, 56);

    //2 circle on the left
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(47, 265, 56);

    //1 circle on the left
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(680, 120, 56);

    //2 circle on the left
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(680, 265, 56);


    //1 square on the left
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect( 20, 20, 56, 56, 20);

    //2 square on the left
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect( 20, 165, 56, 56, 20);

    //3 square on the left
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect( 20, 305, 56, 56, 20);

    //1 square on the right
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect( 650, 20, 56, 56, 20);

    //2 square on the right
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect( 650, 165, 56, 56, 20);

    //3 square on the right
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect( 650, 305, 56, 56, 20);


    tint(tint_color);    
}

function take_snapshot()
{
    save('tint#you.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

function wow()
{

}

