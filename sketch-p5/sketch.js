 var canvas;
 var x;
 var r;
 var g;
 var b;
 var n;
 var y;
 
function setup() {  
    canvas = createCanvas(1100, 800);
    canvas.position(200, 15);
    clear();
  // background(51);

}


function draw() {
    
     if (mouseIsPressed) {
        y = n;
      ellipse(mouseX, mouseY, x);
 
     } else if (y === 15 && mouseIsPressed){
     x = n;
     rect(mouseX, mouseY, y, 15);
}
  fill(r, g, b);


}

function mousePressed() {
    // color 1
     $('.color-1').on('click', function() {
         r = 255;  g = 0; b = 0;
        
     });
    // color 2
      $('.color-2').on('click', function() {
         r = 0; g = 255; b = 0;
       
     });
    // color 3
       $('.color-3').on('click', function() {
         r = 0; g = 0; b = 255;
        
     });
    // color 4   
        $('.color-4').on('click', function() {
         r = 255; g = 215; b = 0;
        
     });
    // color 5    
         $('.color-5').on('click', function() {
         r = 68; g = 84; b = 35;
        
     });
    // color6     
          $('.color-6').on('click', function() {
         r = 221; g = 221; b = 221;
        
     });
    // color 7
           $('.color-7').on('click', function() {
         r = 223; g = 69; b = 69;
        
     });
    // color 8
            $('.color-8').on('click', function() {
         r = 233; g = 150; b = 122;
       
     });
    //color 9
             $('.color-9').on('click', function() {
         r = 255; g = 182; b = 193;
        
     });
    // clear the screen  
      $('.btn-4').on('click', function() {
         
         background(81);
        r = 255; g = 255; b = 255;
        x = n;
        y = n;
     });
}

