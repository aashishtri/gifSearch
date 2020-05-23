/* 1.grab the input*/



var clik=document.getElementsByClassName("js-go");
for(var i=0;i<clik.length;i++){

	clik[i].addEventListener('click',function(){
	
	var inp=document.querySelector("input").value;
	//console.log(inp);
	// pushToDOM(inp);
	container.innerHTML="";
	
	showgif(inp);
});
}

document.querySelector(".js-userinput").addEventListener("keyup",function(k){
	 var input = document.querySelector("input").value;
  
  	
	// if the key ENTER is pressed...
	if(k.which === 13) {
	// pushToDOM(input);
	var container = document.querySelector(".js-container");
	container.innerHTML="";
	showgif(input);
	
	}
});

// using the api
function showgif(input){

	var url="https://api.giphy.com/v1/gifs/search?api_key=0B52ey4A2WpD2sk2tU1E432AQH5sbv2q&q="+input+"&limit=25&offset=0&rating=G&lang=en";
	var ajaxcall = new XMLHttpRequest();
	ajaxcall.open("GET", url, true);
	ajaxcall.send();
	ajaxcall.addEventListener('load', function(event) {
		var data=event.target.response;
		window.console.log(data);
		pushToDOM(data);
		
		var img=document.createElement('img');

		//window.console.log(event);
	});
}


function pushToDOM(input) {

  var response=JSON.parse(input);
  // console.log(response.data.images.fi);

  var container = document.querySelector(".js-container");
  for(var i=0;i<response.data.length;i++){
  	console.log(response.data[i].images.fixed_height.url);
  	var img = document.createElement('img');
  	img.src= response.data[i].images.fixed_height.url;
  	img.className="container-image";
  	container.appendChild(img);
  	// container.innerHTML = response.data[i]["url"];
  }
  
  

}
