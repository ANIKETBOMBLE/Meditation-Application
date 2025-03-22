
const icons = document.querySelectorAll('.img-arrow');
const allpara = document.querySelectorAll('.acc-content p');


const text = [
	"You matter.",
	"You're awesome!",
	"You did great today!",
	"I believe in you!",
	"You are loved!",
	"You are worthy",
	"Keep going!",
	"I love you!",
	"Make it happen.",
	"Be a light.",
	"Know your worth.",
	"Things will get better",
	"Be good. Do good.",
	"Follow your heart.",
	"Stay hopeful!",
	"You are strong!",
	"Protect your peace.",
	"Be still.",
	"You are beautiful!",
	"Keep on fighting!",
  ];
  let count = 0;
  let  index = 0;
  let currentText = "";
  let letter = "";
  function type(){
  	if(count === text.length){
  		count = 0;
  	}
  	currentText = text[count];
  	letter = currentText.slice(0, ++index);
  	document.querySelector(".typing").textContent = letter;
  	if(letter.length === currentText.length){
  		count++;
  		index = 0;
  	}
  	setTimeout(type, 500);
  }
  type();
  
  icons.forEach((icon) => {
	icon.addEventListener("click", () => {
	  const para = icon.parentElement.nextElementSibling;
  
	  if (para.classList.contains("active")) {
		//hide the para
		para.classList.remove("active");
  
		//change sign - to +
		icon.classList.remove("fa-square-minus");
		icon.classList.add("fa-square-plus");
	  } else {
		allPara.forEach((para) => {
		  if (para.classList.contains("active")) {
			para.classList.remove("active");
			return;
		  }
		});
  
		//show the para
		para.classList.add("active");
  
		//change sign + to -
		icon.classList.remove("fa-square-plus");
		icon.classList.add("fa-square-minus");
	  }
	});
  });
  