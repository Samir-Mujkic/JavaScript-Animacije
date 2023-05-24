let textTag = document.querySelector('.section1 h1');

let text = textTag.textContent;

let splittedtext = text.split('');
//izspraznili h1
   textTag.innerHTML = '';
//popunili h1
for( let i =0; i < splittedtext.length; i++) {
	if(splittedtext[i] == " ") {
		splittedtext[i] = "&nbsp;";
	}
	textTag.innerHTML += `<span>${splittedtext[i]}</span>`;
}

//Dodajemo spanu klasu u interavlu
let spans = textTag.querySelectorAll('span');
let k = 0;
let interval = setInterval(() => {
	
	let singlespans = spans[k];

	singlespans.className = 'fadeMove';

	k++;

	if(k === spans.length) {
		clearInterval(interval);
	}


}, 100);
let border =document.querySelector('.border-line');

let animationW = 0;
window.onscroll = () => {

	if(this.oldScroll > this.scrollY) {
       animationW -= 1;
	}else {
		animationW += 1;
	}

if(animationW >= 100) {
	animationW = 100;


}

if(animationW <= 0) {
	animationW =0;
}

	
	border.style.width = animationW + '%';
	

 this.oldScroll = this.scrollY;

 let sectionForAnimation = document.querySelector('.section2 .images');
 let sectionPostion = sectionForAnimation.getBoundingClientRect().top
 let screnPosition = window.innerHeight /1.3;

 let leftImg = document.querySelector('.slideFromLeft');
 let rightImg = document.querySelector('slideFromRight');
 if(sectionPostion < screnPosition) {
     leftImg.classList.add('animated');
     rightImg.classList.add('animated');
  }
}

