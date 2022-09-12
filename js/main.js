var input = document.getElementById("input_toDo");
var btn = document.getElementById("btn");
var text = document.getElementById("ul__list");




btn.onclick = function(){

		if(input.value == "") return;

		createElements(input.value);
}

function createElements(value){

		//console.log(value);

	var li = document.createElement("li");
	li.className = "li";
	li.innerHTML = value;
	text.appendChild(li);

	var btn1 = document.createElement("button");
	btn1.className = "button";
	btn1.innerHTML = "Выполнено";
	li.appendChild(btn1);
	text.appendChild(li);

	btn1.addEventListener("click", e =>{

		text.removeChild(li)
	})

}		
			
			

		

