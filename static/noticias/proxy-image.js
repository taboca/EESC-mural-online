
doFilter = function (that) { 

 var link = $(that).find('description').text();
 $('#temp').html(link);
 var plainDesc = $('#temp').text();	

 /*
try { 
                  if (link.indexOf('http')>-1) { 
    			     src = "http"+link.split('http')[1].split('jpg')[0]+"jpg";
                     link = link.split('#IMG')[0];
                     src = '<img src="'+src+'" style="display:none"/>';
                  } 
                } catch(i) { }  
                */

 var foundImage = false;
 var src ='';
 var link = plainDesc;
 try { 
    if(plainDesc.indexOf('#IMG')>-1) { 
       var slides = plainDesc.split('#IMG')[1];
       src = 'http'+slides.split('http')[1];
       link = link.split('#IMG')[0];
       foundImage = true; 
       src=src.trim();
    } 
 } catch(i) { 

 } 
	
 return {'check': foundImage, 'src':src, 'strip': link};

}

