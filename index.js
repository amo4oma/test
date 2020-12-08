

const url = `http://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur`;

fetch(url)
.then(response => response.json())
.then(data => desplay(data)).catch(error => {
    alert("API erorr please refrish");
  });;

function desplay(name){
  $("h1").text(name.datetime.slice(11 , 19));
  $("h2").text(name.datetime.slice(0 , 10));
}
