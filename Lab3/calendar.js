
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
    var str = "<ul>";
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    str += "</ul>";
      
    
 
     

  
  var HtmlStr = "";
  
  for(var CalNum = 0; CalNum <= numberOfDaysInMonth + firstDayOfWeek; CalNum++)
  {
     if(CalNum < firstDayOfWeek)
       {
          HtmlStr += "<div class ='day'></div>"
       }
      else if(CalNum >= firstDayOfWeek)
       {
          HtmlStr += "<div class ='day'>";
          HtmlStr += CalNum - firstDayOfWeek;
          HtmlStr += "</div>"; 
       }
       
    //Max number of boxes is 36, to make it neat, push row down every 7 days
       if(CalNum == 6 || CalNum == 13 || CalNum == 20 || CalNum == 27 || CalNum == 34)
          {
              HtmlStr += "<br/> <br/> <br/> <br/>";
          }
      results.innerHTML = HtmlStr;
  }
  
  
  $( ".day" ).click(checkDiv);
  
  $( ".yes" ).click(SetAllYes);
  
  $( ".no" ).click(SetAllNo);
  
  $("#results_other").html(str);
  

}


                        
function checkDiv() 
{
  
    switch( $( this ).css("background-color") )
        {
          case 'rgb(0, 128, 0)':     
            $( this ).css( "background-color", 'rgb(255, 0, 0)' );
          break;
          case 'rgb(255, 0, 0)':     
            $( this ).css( "background-color", 'rgb(255, 255, 255)' );
          break;
          default:  
            $( this ).css( "background-color", 'green' );
          break;
        }
        
        console.log($( this ).css("background-color"));
}
                                              
function SetAllYes() 
{         
    $( ".day" ).css( "background-color", 'rgb(0, 128, 0)' );
}    

function SetAllNo() 
{         
    $( ".day" ).css( "background-color", 'rgb(255, 0, 0)' );
}    
        
     


