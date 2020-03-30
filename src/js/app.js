$(document).ready(function(){
    console.log("jquery is loaded");

//selectores ID

    var example = $('#example').css("color","red")
                                .css("font-weight","bolder")
    ;



//selectores de clases

//  $('.navbar').css('background-color','blue');
//  $('.nav-link').css('background-color','orange');



example.click(function(){
    $(this).css('color', 'yellow');
})



})