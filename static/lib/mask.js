

    var image = './vendor/eesc.png';

    function aMask() { 
         x = parseInt(Math.random()*780); 
         y = parseInt(Math.random()*1920);
         x+=200;
         y+=00;
         x-=1080;
         y-=1920;
         var moz = "-moz-transition-property: -moz-transform; -moz-transition-duration:3s;-moz-transform:translate("+x+"px,"+y+"px);"; 
         document.getElementById('mask').setAttribute("style", moz);

         setTimeout('aMask()',3200);

     } 
