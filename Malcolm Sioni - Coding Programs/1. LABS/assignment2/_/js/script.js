// Distance Remaining // Lives
var DR = 1500;
var lives = 5;

var scrollSpeed = 0;
var gameOver = false;

var playerLeft = $(window).width() / 2;

// Fixed positions:
var playerX = 0;
var playerY = 0;

var virus1X = 0;
var virus1Y = 0;
var virus2X = 0;
var virus2Y = 0;
var virus3X = 0;
var virus3Y = 0;
var healthX = 0;
var healthY = 0;

$(document).bind('pageinit', function(ev)
{
    // Update header
    $('#head').html("Lives: " + lives + " " + "Left: " + DR + " m");

    // Virus Positions:
	$('#virus1').css
    ({
		position:	'absolute',
		left:		virus1X + 'px',
		top:		virus1Y + 'px'
	});

    $('#virus2').css
    ({
		position:	'absolute',
		left:		virus2X + 'px',
		top:		virus2Y + 'px'
	});

    $('#virus3').css
    ({
		position:	'absolute',
		left:		virus3X + 'px',
		top:		virus3Y + 'px'
	});

    // health position
    $('#health').css
    ({
		position:	'absolute',
		left:		healthX + 'px',
		top:		healthY + 'px'
	});

if(window.DeviceMotionEvent)
{
    window.addEventListener('deviceorientation', function(eventData)
    {
        var tiltLR = eventData.gamma;

        playerLeft += tiltLR/3;

        if(playerLeft > 0 && playerLeft < $(window).width() - 20)
        {
            $('#player').css('left', playerLeft + 'px');
        }

        if(playerLeft <= 0)
        {
            playerLeft = 0;
            $('#player').css('left', playerLeft + 'px');
        }

        if(playerLeft >= $(window).width() - 20)
        {
            playerLeft = $(window).width() -20 - 2;
            $('#player').css('left', playerLeft + 'px');
        }


        // Interval for falling viruses
        function startScroll()
        {
            var i = 0;
            var t = 0;


            t = setInterval(function()
            {

                if(i % 300 == 0)
                {
                    var virus1 = (Math.random() * $(window).width()) - 50;
                    if(virus1 <= 0){virus1 += 200;}

                    var virus2 = (Math.random() * $(window).width()) - 50;
                    if(virus2 <= 0){virus2 += 200;}

                    var virus3 = (Math.random() * $(window).width()) - 50;
                    if(virus3 <= 0){virus3 += 200;}

                    var health = (Math.random() * $(window).width()) - 50;
                    if(health <= 0){health += 200;}

                    var obj1 = '<img style="left:' + virus1 + 'px" src="images/virus1.png" alt class="virus1" id="obj1-' + i + '" />';
                    $('#game').append(obj1);

                    var obj2 = '<img style="left:' + virus2 + 'px" src="images/virus2.png" alt class="virus2" id="obj2-' + i + '" />';
                    $('#game').append(obj2);

                    var obj3 = '<img style="left:' + virus3 + 'px" src="images/virus3.png" alt class="virus3" id="obj3-' + i + '" />';
                    $('#game').append(obj3);

                    var obj4 = '<img style="left:' + health + 'px" src="images/firewall.png" alt class="health" id="obj4-' + i + '" />';
                    $('#game').append(obj4);
                }

                i++;
                DR--;

                $('.virus2').css('top', '+=0.5') && $('.virus1').css('top', '+=0.7') && $('.virus3').css('top', '+=1') && $('.health').css('top', '+=0.6');

                $('#dialog').on('click', function()
                {
                    i = 0;
                    clearInterval(t);

                    $('#head').html("Lives: " + lives + " " + "Left: " + DR + " m");
	            });

                // Collision Detect:
                    // Virus1
                if(playerLeft + 100 >= virus1X && playerLeft <= virus1X + 100)
                {
                    if(playerLeft + 100 >= virus1Y && playerLeft <= virus1Y + 100)
                    {
                        //lives = lives - 1;

                        $('#head').html("Lives: " + lives + " " + "Left: " + DR + " m");
                    }
                }

                    // Virus2
                if(playerLeft + 100 >= virus2X && playerLeft <= virus2X + 100)
                {
                    if(playerLeft + 100 >= virus2Y && playerLeft <= virus2Y + 100)
                    {
                        //lives = lives - 1;

                        $('#head').html("Lives: " + lives + " " + "Left: " + DR + " m");
                    }
                }

                    // Virus3
                if(playerLeft + 100 >= virus3X && playerLeft <= virus3X + 100)
                {
                    if(playerLeft + 100 >= virus3Y && playerLeft <= virus3Y + 100)
                    {
                        //lives = lives - 1;

                        $('#head').html("Lives: " + lives + " " + "Left: " + DR + " m");
                    }
                }

                    // health
                if(playerLeft + 100 >= healthX && playerLeft <= healthX + 100)
                {
                    if(playerLeft + 100 >= healthY && playerLeft <= healthY + 100)
                    {
                        lives = lives + 1;

                        $('#head').html("Lives: " + lives + " " + "Left: " + DR + " m");
                    }
                }

                // Update header
                $('#head').html("Lives: " + lives + " " + "Left: " + DR + " m");

                // End Game:
                    // When distance remaining is = 0
                if(DR == -1)
                {
                    i = 0;
                    clearInterval(t);

                    DR = 0;

                    $('#head').html("Lives: " + lives + " " + "Left: " + DR + " m");

                    alert("Congratulations! You have survived the first wave.");
                    location.reload();

                }

                    // When lives remaining is = 0
                /*
                if(lives == -1)
                {
                     i = 0;
                    clearInterval(t);

                    lives = 0;

                    $('#head').html("Lives: " + lives + " " + "Left: " + DR + " m");

                    alert("No Lives Left! Game Over.");
                    location.reload();
                }
                */
            }, 35);
        }

        // Play game when 'Play' button is clicked
        $('#playbtn').on('click', function()
        {
            alert("Prepare Yourself!");

            startScroll();

             document.getElementById('audio').play();

            $('.play').css('opacity', '0');
            $('.play').attr('disabled', 'disabled');
	    });

        // Resume game when resume from menu is clicked
        $('#resumedialog').on('click', function()
        {
            startScroll();

            document.getElementById('audio').play();

            $('.play').css('opacity', '0');
            $('.play').attr('disabled', 'disabled');
        });
    });
}
});

$(document).bind('pageshow', function(ev){


});
