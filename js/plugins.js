/* global console */

var $;

$(document).ready(function () {
    
    'use strict';

    // Nice Scroll
    $("html").niceScroll();
    
    // Carousel
    $('.carousel').carousel({
    
        interval: 2000
    
    });
    
    //// Scroll To Top Down
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
    
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
           
    
    });

    // Click On Button To Scroll Top    
    scrollButton.click(function () {
        
        $("html,body").animate({scrollTop : 0}, 600);
    
    });
    

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        
        document.getElementById("myDropdown").classList.toggle("show");

    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content"),

                i,

                openDropdown;

            for (i = 0; i < dropdowns.length; i += 1) {

                openDropdown = dropdowns[i];

                if (openDropdown.classList.contains('show')) {

                    openDropdown.classList.remove('show');

                }

            }

        }
    };

});