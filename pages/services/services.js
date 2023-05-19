window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      var elements = document.getElementsByClassName('fade-in-1');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = '1';
      }
    }, 500); // Delay of 500 milliseconds (adjust as needed)
  });
  window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      var elements = document.getElementsByClassName('fade-in-2');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = '1';
      }
    }, 700); // Delay of 700 milliseconds (adjust as needed)
  });
  window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      var elements = document.getElementsByClassName('fade-in-3');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = '1';
      }
    }, 900); // Delay of 900 milliseconds (adjust as needed)
  });
  window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      var elements = document.getElementsByClassName('fade-in-4');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = '1';
      }
    },1100); // Delay of 1100 milliseconds (adjust as needed)
  });
 window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      var elements = document.getElementsByClassName('fade-in-5');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = '1';
      }
    }, 1300); // Delay of 1300 milliseconds (adjust as needed)
  });
 
  var card = document.querySelector('.card');

card.addEventListener('click', function() {
  card.classList.toggle('flipped');
})