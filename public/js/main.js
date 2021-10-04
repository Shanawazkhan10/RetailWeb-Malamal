var a = document.getElementById("a");
function Geeks() {
a.innerHTML="devicePixelRatio is : "+window.devicePixelRatio; 
} 
// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
       $('[data-toggle="tooltip"]').click(function () {
          $('[data-toggle="tooltip"]').tooltip("hide");

       });
   });
// tooltip

// search-results
$(document).ready(function(){

  var awesomeBar = {
    toggleResults: function(){
      $('.search-results').show();
      if(!$('input').val().length >= 1){
        $('.search-results').hide();
      }
    },
    hideCloseIcon: function(){
      console.log('hey');
      $('.close-search')
        .text('more_vert')
          .addClass('dropdown')
            .removeClass('close-search');
      $('.dropdown').on('click', awesomeBar.toggleMenu);
      $('.search-icon').show();
      $('input').val('');
    },
  };
  
  $('body').on('click', '.close-search', awesomeBar.hideCloseIcon);
  $('input').keyup(awesomeBar.toggleResults);
  awesomeBar.showStatus();
  Mousetrap.bind('ctrl+space', function(e) {
    $('input').blur();
    awesomeBar.toggleSearch();
    $('.search-results').hide();
  });
});

$(document).ready(function(){

  var awesomeBar = {
    toggleResults: function(){
      $('.search-results-modal').show();
      if(!$('input').val().length >= 1){
        $('.search-results-modal').hide();
      }
    },
    hideCloseIcon: function(){
      console.log('hey');
      $('.close-search')
        .text('more_vert')
          .addClass('dropdown')
            .removeClass('close-search');
      $('.dropdown').on('click', awesomeBar.toggleMenu);
      $('.search-icon').show();
      $('input').val('');
    },
  };
  
  $('body').on('click', '.close-search', awesomeBar.hideCloseIcon);
  $('input').keyup(awesomeBar.toggleResults);
  awesomeBar.showStatus();
  Mousetrap.bind('ctrl+space', function(e) {
    $('input').blur();
    awesomeBar.toggleSearch();
    $('.search-results-modal').hide();
  });
});
// search-results


// read more
$(document).ready(function () {
    $('.nav-toggle').click(function () {
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
                toggle_switch.html('Read More');
            } else {
                toggle_switch.html('Read Less');
            }
        });
    });

});
// read more