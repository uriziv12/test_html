
/*
// code for collapsible
// Based on https://www.w3schools.com/howto/howto_js_collapsible.asp

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
*/


/*
// code for ul collapse
// based on https://www.codeproject.com/Questions/5275900/Make-my-menu-ul-li-a-collapse-when-one-li-is-click

$(document).ready(function(){
    $('li.dropdown').click(function () {
        $(this).find('ul').toggle();
    });
});
*/

/*
$(document).ready(function(){
  $("div").click(function(){
    $(this).hide();
  });
});
*/


$(".test_class").click(function() {
    $(this).toggleClass("red_bg");
});

/*
$(document).ready(function(){
  $("button").click(function(){
    $(".test_class").toggleClass("hide_class");
    $(".li_container").toggleClass("hide_class");
  });
});
*/

/*
$("div.li_container").click(function() {
  $(this).toggleClass("red_bg");
});
*/

$(document).ready(function() {
  // Add button for each li element
  $('ul li').each(function() {
    var buttonInitText = "-";
    var buttonElem = $('<button class="toggle-button">' + buttonInitText + '</button>');
    $(this).prepend(buttonElem);

    //$(this).find('ul').show();
    var subULs = $(this).find('ul');

    const hasListItems = subULs.length > 0;
    if (hasListItems) {
    } else {
      //buttonElem.text("*");
      buttonElem.removeClass('toggle-button').addClass('empty-button');
      //buttonElem.attr('disabled', true); // Or other action
    }

    subULs.show();

  });

  // Toggle visibility and adjust button text on click
  $('.toggle-button').click(function() {
    const button = $(this);
    const list = button.parent().find('ul');

    list.slideToggle();
    button.text(button.text() === "+" ? "-" : "+");
  });



  $('.empty-button').click(function() {
    const button = $(this);
    const next_elem = button.parent().next();

    next_elem.slideToggle();
    button.text(button.text() === "+" ? "-" : "+");
  });
});


$(document).ready(function() {

    var barButtonsArray = [];

    // Create the pinned button dynamically
    var $hideBarButton = $('<div>', {
        class: 'hide-bar-button',
        id: 'hideBar'
    });

    var $bgButton2 = $('<div>', {
        class: 'bg-button2',
        id: 'toggleBackground2'
    });
    barButtonsArray.push($bgButton2);

    var $incTextButton = $('<div>', {
        class: 'inc-text-button',
        id: 'increase-size'
    });
    barButtonsArray.push($incTextButton);

    var $decTextButton = $('<div>', {
        class: 'dec-text-button',
        id: 'decrease-size'
    });
    barButtonsArray.push($decTextButton);

    var $incPadding = $('<div>', {
        class: 'inc-padding-button',
        id: 'increase-padding'
    });
    barButtonsArray.push($incPadding);

    var $decPadding = $('<div>', {
        class: 'dec-padding-button',
        id: 'decrease-padding'
    });
    barButtonsArray.push($decPadding);

    var $hideBtns = $('<div>', {
        class: 'hide-btns-button',
        id: 'hide-btns'
    });
    barButtonsArray.push($hideBtns);

    var $hideTxtLns = $('<div>', {
        class: 'hide-txt-lns-button',
        id: 'hide-txt-lns'
    });
    barButtonsArray.push($hideTxtLns);

    // Add Buttons to bar

    $('body').append($hideBarButton);
    $('#hideBar').click(function() {
        $(barButtonsArray).each(function() {
          $(this).toggle();
        });
    });

    $('body').append($bgButton2);
    $('#toggleBackground2').click(function() {
        // $('body').toggleClass('dark-mode');
        $('body').toggleClass('dark-mode2');
    });

    $('body').append($incTextButton);
      $('#increase-size').click(function() {
        $('body *').each(function() {
          var link = $(this);
          var fontSize = parseFloat(link.css('font-size')) || 16; // Get current font size (default 16px)
          fontSize = Math.min(fontSize + 1, 30);
          link.css('font-size', fontSize + 'px'); // Update font size
        });
    });

    $('body').append($decTextButton);
      $('#decrease-size').click(function() {
        $('body *').each(function() {
          var link = $(this);
          var fontSize = parseFloat(link.css('font-size')) || 16; // Get current font size (default 16px)
              fontSize = Math.max(fontSize - 1, 8);
          link.css('font-size', fontSize + 'px'); // Update font size
        });
    });

    $('body').append($incPadding);
      $('#increase-padding').click(function() {
        $('body ul').each(function() {
          var link = $(this);
          var ulPadding = parseFloat(link.css('padding-right')) || 16;
              ulPadding = Math.min(ulPadding + 1, 100);
          link.css('padding-right', ulPadding + 'px');
        });
    });

    $('body').append($decPadding);
      $('#decrease-padding').click(function() {
        $('body ul').each(function() {
          var link = $(this);
          var ulPadding = parseFloat(link.css('padding-right')) || 16;
              ulPadding = Math.max(ulPadding - 1, 5);
          link.css('padding-right', ulPadding + 'px');
        });
    });

    $('body').append($hideBtns);
      $('#hide-btns').click(function() {
        $("body button").toggle();
    });

    $('body').append($hideTxtLns);
      $('#hide-txt-lns').click(function() {
        $("a.text_line").toggle();
    });

    // Start with hidden bar buttons
    $(barButtonsArray).each(function() {
      $(this).toggle();
    });

});
