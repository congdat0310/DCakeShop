var counter = 0, 
    $items = $('.diy-slideshow figure'), 
    numItems = $items.length; 

var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems); 
   
  $items.removeClass('show');
  $items.eq(itemToShow).addClass('show');    
};


$('.next').on('click', function(){
    counter++;
    showCurrent(); 
});
$('.prev').on('click', function(){
    counter--;
    showCurrent(); 
});


if('ontouchstart' in window){
  $('.diy-slideshow').swipe({
    swipeLeft:function() {
      counter++;
      showCurrent(); 
    },
    swipeRight:function() {
      counter--;
      showCurrent(); 
    }
  });
}