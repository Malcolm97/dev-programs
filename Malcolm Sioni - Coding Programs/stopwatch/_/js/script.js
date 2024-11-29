$(document).bind('pageinit', function(ev)
{
    var s1 = 0;
    var s2 = 0;
    var m1 = 0;
    var m2 = 0;
    var h1 = 0;
    var h2 = 0;

    var t = 0;


$('#tick').on('click', function()
{
    t = setInterval(function()
    {
        s1++;
            
        $('#timer').html("" + h2 + h1 + ":" + m2 + m1 + ":" + s2 + s1);
			
        if(s1 == 9)
        {
            s1 = -1;
            s2 = s2 + 1;
                
               
        }
        if(m1 == 9)
        {
            m1 = -1;
            m2 = m2 + 1;
        }         
        if(h1 == 9)
        {
            h1 = -1;
            h2 = h2 + 1;
        }
            
            
        if(s2 == 6 && s1 == 0)
        {
            s1 = 0;
            s2 = 0;
            m1 = m1 + 1;
        }
        if(m2 == 6 && m1 == 0)
        {
            m1 = 0;
            m2 = 0;
            h1 = h1 + 1;
        }

    }, 1000);		
});	
	
$('#reset').on('click', function()
{
		s1 = 0;
    
        clearInterval(t);
       $('#timer').html('00:00:00');
        
});

    
$(document).bind('pageshow', function(ev){

});
});
    
    
    
    
 