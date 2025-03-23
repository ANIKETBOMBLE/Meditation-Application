
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
  

const icons = document.querySelectorAll(".accord img");
const allPara = document.querySelectorAll(".accord p");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const para = icon.parentElement.nextElementSibling;

    if (para.classList.contains("active")) {
      para.classList.remove("active");
    } else {
      allPara.forEach((para) => {
        if (para.classList.contains("active")) {
          para.classList.remove("active");
          return;
        }
      });
      para.classList.add("active");
      icon.classList.remove("icons");
      icon.classList.add("icons");
    }
  });
});


const modalBtn = document.querySelector(".modal-btn"); // Use the correct selector for the button that opens the modal
const modalBg = document.querySelector(".modal-bg");
const close = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("modal-active");
});

close.addEventListener("click", () => {
  modalBg.classList.remove("modal-active");
});
