let head = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (head.classList.contains('fixed') && window.pageYOffset < 1) {
    head.classList.remove('fixed');
    } else if (window.pageYOffset > 1) {
    head.classList.add('fixed');
    }
 });



 function updater(d, h, m, s) {
    
    var baseTime = new Date(2018, 6, 16);
    
    var period = 10*24*60*60*1000;
  
    function update() {
      var cur = new Date();
   
      var diff = period - (cur - baseTime) % period;
      
      var millis = diff % 1000;
      diff = Math.floor(diff/1000);
     
      var sec = diff % 60;
      if(sec < 10) sec = "0"+sec;
      diff = Math.floor(diff/60);
      
      var min = diff % 60;
      if(min < 10) min = "0"+min;
      diff = Math.floor(diff/60);
    
      var hours = diff % 24;
      if(hours < 10) hours = "0"+hours;
      var days = Math.floor(diff / 24);
      d.innerHTML = days;
      h.innerHTML = hours;
      m.innerHTML = min;
      s.innerHTML = sec;
    
      
      setTimeout(update, millis);
    }
    setTimeout(update, 0);
  }
  
  updater(document.getElementById("days"),
   document.getElementById("hours"), document.getElementById("minutes"),
   document.getElementById("seconds"));

