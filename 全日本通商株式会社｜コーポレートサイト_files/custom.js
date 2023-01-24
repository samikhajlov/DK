/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/
$(function(){
    $(".flash_message").fadeOut(3000)
        .queue(function() {
            this.remove();
        });
});