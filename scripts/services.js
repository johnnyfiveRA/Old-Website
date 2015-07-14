$(document).ready(function(){
    // the first part handles the image change for the button on mouse over and the div visibility
    //when it is clicked
    $("#bizP").hide(0);
    $("#homeP").hide(0);
    $("#webP").hide(0);
    $("#customP").hide(0);

   $("#websiteB").hover(function () {
       this.src = this.src.replace("-off", "-on");
   }, function () {
       this.src = this.src.replace("-on", "-off");
   });

    $("#websiteB").click(function () {
        $("#start").hide(250);
        $("#bizP").hide(250);
        $("#homeP").hide(250);
        $("#customP").hide(250);
        $("#webP").show(500);
    });

    //same for the business button and <p>

    $("#businessB").hover(function () {
        this.src = this.src.replace("-off", "-on");
    }, function () {
        this.src = this.src.replace("-on", "-off");
    });

    $("#businessB").click(function () {
        $("#start").hide(250);
        $("#homeP").hide(250);
        $("#webP").hide(250);
        $("#customP").hide(250);
        $("#bizP").show(500);
    });

    // the home part
    $("#homeB").hover(function () {
        this.src = this.src.replace("-off", "-on");
    }, function () {
        this.src = this.src.replace("-on", "-off");

    });

    $("#homeB").click(function () {
        $("#start").hide(250);
        $("#bizP").hide(250);
        $("#webP").hide(250);
        $("#customP").hide(250);
        $("#homeP").show(500);
    });
    
    $("#customB").hover(function () {
        this.src = this.src.replace("-off", "-on");
    }, function () {
        this.src = this.src.replace("-on", "-off");

    });

    $("#customB").click(function(){
        $("#start").hide(250);
        $("#bizP").hide(250);
        $("#webP").hide(250);
        $("#homeP").hide(250);
        $("#customP").show(500);
    });

});