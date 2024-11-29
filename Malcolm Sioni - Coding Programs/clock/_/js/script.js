$(document).ready(function(){

    $("button").click(function(){
        var second = 0;
      
        var time = 0;
        
        var minute = $("#m").val();
        
        
        var hour = $("#h").val();
        var am_pm = $("#am_pm").val();
        
        
    
    time = setInterval(function()
    {
        second++;
        
    
        $('#timer').html(hour + ":" + minute + ":" + second + " " + am_pm);
        
       
        
        if(second == 60)
        {
            second = 0;
            
            return minute++;
        }
        
        if(minute == 60)
        {
            minute = 0;
            
            return hour++;
        }
        
        if(hour > 12)
        {
            second = 0;
            minute = 0;
            hour = 1;   
            
            if( am_pm = html('AM'))
            {
                $('#am_pm').html('PM');
            }
            else
            {
                $('#am_pm').html('AM');
            }
        
            $('#timer').html('0:0:' + second + am_pm);
        }

    }, 1000);
});
});

