


/*var getHours
var getMinutes
var period

if (getHours = 8 && getMinutes > 30 && getMinutes < 59 || ){

} */


/*function getTime(){
    var today = new Date();
    var hour = getHours
    var minute = getMinutes
    var period =  (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour;

    if (hour ==0){
        hour = 12;
    }else if (hour > 12){
        hour= hour - 12;
        period = "PM";
    }
}*/


  /*if (hour == 8 && minute >= 30 && minute <= 59 || hour == 9 && minute >= 0 && minute <= 30 && period == "AM")
  { 
    console.log("It's about 9 in the morning");
}else if {console.log("I don't know what time it is") ;
}  */



function getTime(){
var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var period = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;



  if (hour===0 && period===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  period=' Noon';
  } 
  else
  { 
  hour=12;
  period=' PM';
  } 
  } 
  if (hour===0 && period===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  period=' Midnight';
  } 
  else
  { 
  hour=12;
  period=' AM';
  } 
  } 
console.log("Current Time : "+hour  + " : " + minute + " : " + second + period);
}
getTime();


/*function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();*/



