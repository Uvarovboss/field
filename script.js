var field = document.getElementById('field');
var ball = document.getElementById('ball');

field.onclick = function(event) {
 var fieldCoords = this.getBoundingClientRect();
 var fieldInnerCoords = {
   top: fieldCoords.top + field.clientTop,
  left: fieldCoords.left + field.clientLeft
  };
 var ballCoords = {
 top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
 left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
   };

if (ballCoords.left + ball.clientWidth > field.clientWidth) {
     ballCoords.left = field.clientWidth - ball.clientWidth;
      }
 if (ballCoords.top + ball.clientHeight > field.clientHeight) {
       ballCoords.top = field.clientHeight - ball.clientHeight;
 }
ball.style.left = ballCoords.left + 'px';
ball.style.top = ballCoords.top + 'px';
}


// var evenY = event.clientY;
// var evenX = event.clientX;
//  document.getElementById("ball").innerHTML = style.
// var backg = document.getElementById('field');

// backg.onclick =function () {
//   backg = innerHTML
// }
