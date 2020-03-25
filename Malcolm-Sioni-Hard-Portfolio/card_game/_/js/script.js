var num_cards = ['Ace','2','3','4','5','6','7','8','9','Jack','Queen','King'];
var suit = ['Spades','Diamonds','Hearts','Clubs'];


var cardTop =50;
var cardLeft =50;
var w = window.outerWidth;

$(document).bind('pageinit', function(ev)
{
    var ran_num = num_cards[Math.floor(Math.random() * num_cards.length)];
    var ran_suit = suit[Math.floor(Math.random() * suit.length)];
      
if(window.DeviceMotionEvent)
{
window.addEventListener('deviceorientation', function(eventData)
    {
    
    
    var tiltLR = eventData.gamma;
    var tiltFB = eventData.beta;
			
    cardLeft += tiltLR/10;
    cardTop += tiltFB/10;
   
  
    if(cardLeft <= 0 || cardLeft >= w)
		{
			
            
            if(ran_suit == "Diamonds" || ran_suit == "Hearts")
            {     
                $('#home').css("background-color", "red");
                $('#card').css("color", "red");
                $('#card_num').css("color", "red");       
            }
            else if(ran_suit == "Spades" || ran_suit == "Clubs")
            {
                $('#home').css("background-color", "black");
                $('#card').css("color", "black");
                $('#card_num').css("color", "black");
            }
            
			$('#card_num').html(ran_num + " of " + ran_suit);
            location.reload(1);
		}			
    });
}
    
    
    
    $('#shuffle').on('click', function()
    {
        var ran_num = num_cards[Math.floor(Math.random() * num_cards.length)];
        var ran_suit = suit[Math.floor(Math.random() * suit.length)];

        
        if(ran_suit == "Diamonds" || ran_suit == "Hearts")
        {     
        $('#home').css("background-color", "red");
        $('#card').css("color", "red");
        $('#card_num').css("color", "red");       
        }
        else if(ran_suit == "Spades" || ran_suit == "Clubs")
        {
            $('#home').css("background-color", "black");
            $('#card').css("color", "black");
            $('#card_num').css("color", "black");
        }
        
        
        $('#card_num').html(ran_num + " of " + ran_suit);
        
    });
});

$(document).bind('pageshow', function(ev){});

