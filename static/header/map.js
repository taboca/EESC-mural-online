/* Grids On The Fly */

$(document).ready(function() {

   register("/main/esquerdo", "clock", "../tempo/index.html", iframeTemplate);
   register("/main/direito", "date", "../tempo/date.html", iframeTemplate);
   compile();   

});


