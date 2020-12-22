// fiching the data from the Api provided
// const url = "https://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur"; // Since I am Using HTTPS, the API url has to be HTTPS to work. if its HTTP the request may be blocked
//
// fetch(url)
//   .then(response => response.json())
//   .then(data => desplay(data)).catch(error => {
//     // alert("API erorr please refrish");
//   });;

// updating the h1 & h2 with the time from the Api

// function desplay(name) {
//   $("h1").text(name.datetime.slice(11, 19));
//   $("h2").text(name.datetime.slice(0, 10));
// // }
// $("#home-link").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#1").offset().top
//     }, );
// });
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});
