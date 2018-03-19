/*console*/
$(document).ready(function ($) {
	"use strict";
    $(".klick-down").click(function () {
        $(".drop-down-pst-list").toggleClass("drop-down-pst-lists");
        
    });
    $(".click-nav").click(function () {
        $(".nav ul").toggleClass("nav-right-2");
    });
    $(".more-post .description").click(function () {
        $(".model-head-post").fadeIn(200);
    });
    
    $(".click-nav i").click(function () {
        $(".header.header .nav .nav-right").toggleClass("nav-right-2");
    });

    $(".comment-post .comment-post-foem form textarea").click(function () {
        $(this).addClass("textarea-height");
        $(this).parent().children("input").fadeIn(200);
    });
    
    $(".model-post").click(function () {
        $(".model-head-post").fadeOut(200);
        $(".comment-post .comment-post-foem form textarea").removeClass("textarea-height");
        $(".comment-post .comment-post-foem form input[type='submit']").fadeOut(200);
        $(".comment-post-head").slideUp(200);
    });
    $('.lang').click(function () {
        var as = $("#ln").attr('href');
        if (as === 'css/style-ar.css') {
            $('#ln').attr('href', 'css/style-en.css');
        } else {
            $('#ln').attr('href', 'css/style-ar.css');
        }
    });
    
    $(".reply-posr").click(function () {
        $(".comment-post-head").slideDown(200);
    });
    

    $(".slider-click").click(function () {
        var mysliderclick = $(this).attr('slider-clic'),
            myslideritem = $('.slider-item[img-slider=' + mysliderclick + ']');
        $(".slider-item").removeClass("activ");
        $(myslideritem).addClass("activ");
        $(this).addClass("slider-click-too");
        $(".slider-click").not(this).removeClass("slider-click-too");
    });
    
});
