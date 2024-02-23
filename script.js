$(document).ready(function(){

   $('.fa-bars').click(function(){
      $(this).toggleClass('fa-xmark');
      $('nav').toggleClass('nav-toggle');
   });

   $('nav ul li a').click(function(){
      $('.fa-bars').removeClass('fa-xmark');
      $('nav').removeClass('nav-toggle');
   });

   $(window).scroll(function(){
      if($(window).scrollTop() >= 20){
          $('header').addClass('active');
      }else{
          $('header').removeClass('active');
      }
  })
})

function myFunction() {
   var input, filter, i, txtValue,span, count=0;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   div2 = document.getElementsByClassName("package");

   for (i = 0; i < div2.length; i++) {
     span = div2[i].getElementsByClassName("filter")[0];
     txtValue = span.textContent || span.innerText;
     
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       div2[i].style.display = "";
     } else {
      div2[i].style.display = "none";
     }
     Array.from(div2).forEach(element => {
      if(element.style.display==""){
         count++;
      }
     });

     if(count==0){
      div2.insertAdjacentHTML("beforened","<div>Destination not found</div>")
     }
   }
}

//SMTP

function sendEmail() {
   Email.send({
     'SecureToken': 'ca3235ab-a796-49dc-a662-dc46cc9e6fef',
     'To': "aakashkhandare19@gmail.com",
     'From': "aakashkhandare19@gmail.com",
     'Body': "Name: " + document.getElementById("name").value + "<br>Email: " + document.getElementById('email').value + "<br>Message: " + document.getElementById("message").value
   }).then(_0x39a115 => popup(_0x39a115));
 }
