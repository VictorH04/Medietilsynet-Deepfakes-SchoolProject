// line 2-7 A function that draws a line between two particles
function line(particle, particle2) {
	context.beginPath();
	context.moveTo(particle.x, particle.y);
	context.lineTo(particle2.x, particle2.y);
	context.stroke();
}

// Line 18: clearing the previous frame
// Line 19 to 41: For each particle
// Line 22 to 31: Check with every other particle
// Line 23: Make sure you're not checking a particle with itself
// Line 25 to 26: calculate approximate distance between particles (a sum of differences in the X and Y axles). You could use the actual distance [sqrt(distanceX^2+distanceY^2)], but that just slows things down and is not really visible.
// Line 23 to 26: If the distance is lower than the threshold, the width and the color of the line.
// Line 35 to 36: The Particle moves in both dimensions
// Line 34 and 36: Bounce off the edges
function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < maxParticles; i++) {
		let particle = particles[i];
		context.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
		for (let j = 0; j < maxParticles; j++) {
			if (i != j) {
				let particle2 = particles[j];
				let distanceX = Math.abs(particle2.x - particle.x);
				let distanceY = Math.abs(particle2.y - particle.y);
				if (distanceX < threshold && distanceY < threshold) {
					context.lineWidth = (threshold * 2 - (distanceX + distanceY)) / 50;
					context.strokeStyle = '#E9E3D7';
					line(particle, particle2);
				}
			}
		}
		particle.x = particle.x + particle.vx;
		particle.y = particle.y + particle.vy;
		if (particle.x > canvas.width - particleSize || particle.x < particleSize) particle.vx = -particle.vx;
		if (particle.y > canvas.height - particleSize || particle.y < particleSize) particle.vy = -particle.vy;
	}
	window.requestAnimationFrame(animate);
}

// Line 48 to 53: Setting up Variables and parameters
//Line 54 to 61: Initialize the particles with random coordinates and speeds.
//Line 64: Start everything.
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let particles = [];
let particleSize = 3;
let maxParticles = 400;
let threshold = 75;
for (let i = 0; i < maxParticles; i++) {
	let particle = {
		x: Math.random() * canvas.height,
		y: Math.random(5) * canvas.width,
		vx: Math.random(),
		vy: Math.random(),
	};
	particles.push(particle);
}
// context.fillstyle = 'blue';
animate();


// ! True or false game thing

// Get everything
const realBtn1 = document.querySelector('.endsection1-ekteBtn1');
const realBtn2 = document.querySelector('.endsection1-ekteBtn2');

const fakeBtn1 = document.querySelector('.endsection1-fakeBtn1');
const fakeBtn2 = document.querySelector('.endsection1-fakeBtn2');

const correctText1 = document.querySelector('.endsection1-correctText1');
const correctText2 = document.querySelector('.endsection1-correctText2');

const wrongText1 = document.querySelector('.endsection1-wrongText1');
const wrongText2 = document.querySelector('.endsection1-wrongText2');

const defaultText1 = document.querySelector('.endsection1-undertext1');
const defaultText2 = document.querySelector('.endsection1-undertext2');

const wrongSymbol1 = document.querySelector('.endsection1-wrongsymbol1');
const wrongSymbol2 = document.querySelector('.endsection1-wrongsymbol2');

const correctSymbol1 = document.querySelector('.endsection1-correctsymbol1');
const correctSymbol2 = document.querySelector('.endsection1-correctsymbol2');

// Event listeners for the game
realBtn1.addEventListener('click', (event) => {
	event.preventDefault();
	
	defaultText1.style.display = 'none';
	wrongText1.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	wrongText1.style.display = 'grid';

	realBtn1.style.backgroundColor = '#a11d24';

	disableFakeBtn1();
	displayOnWrongSymbol1();
	displayOffCorrectSymbol1();
});

fakeBtn1.addEventListener('click', (event) => {
	event.preventDefault();

	defaultText1.style.display = 'none';
	correctText1.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	correctText1.style.display = 'grid';

	fakeBtn1.style.backgroundColor = '#2fa324';
	
	disableRealBtn1();
	displayOnCorrectSymbol1();
	displayOffWrongSymbol1();
});

realBtn2.addEventListener('click', (event) => {
	event.preventDefault();

	defaultText2.style.display = 'none';
	correctText2.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	correctText2.style.display = 'grid';

	realBtn2.style.backgroundColor = '#2fa324';

	disableFakeBtn2();
	displayOnCorrectSymbol2();
	displayOffWrongSymbol2();
});

fakeBtn2.addEventListener('click', (event) => {
	event.preventDefault();

	defaultText2.style.display = 'none';
	wrongText2.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	wrongText2.style.display = 'grid';

	disableRealBtn2();
	displayOnWrongSymbol2();
	displayOffnCorrectSymbol2();
});

// Functions which disable buttons and appear right symbols

//! Disable
function disableFakeBtn1(event) {
	fakeBtn1.classList.add('disabled');
};

function disableFakeBtn2(event) {
	fakeBtn2.classList.add('disabled');
};

function disableRealBtn1(event) {
	realBtn1.classList.add('disabled');
};

function disableRealBtn2(event) {
	realBtn2.classList.add('disabled');
};

//! Display On Wrong Symbol

function displayOnWrongSymbol1(event) {
	wrongSymbol1.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	wrongSymbol1.classList.add('displayOn');
};

function displayOnWrongSymbol2(event) {
	wrongSymbol2.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	wrongSymbol2.classList.add('displayOn');
};


//! Display off Wrong Symbol

function displayOffWrongSymbol1(event) {
	wrongSymbol1.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	wrongSymbol1.classList.add('displayOff');
};

function displayOffWrongSymbol2(event) {
	wrongSymbol2.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	wrongSymbol2.classList.add('displayOff');
};

//! Display On Correct Symbol

function displayOnCorrectSymbol1(event) {
	correctSymbol1.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	correctSymbol1.classList.add('displayOn');
};

function displayOnCorrectSymbol2(event) {
	correctSymbol2.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	correctSymbol2.classList.add('displayOn');
};


//! Display off Correct Symbol

function displayOffCorrectSymbol1(event) {
	correctSymbol1.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	correctSymbol1.classList.add('displayOff');
};

function displayOffnCorrectSymbol2(event) {
	correctSymbol2.animate([ { opacity: '.1' }, { opacity: '1' } ], { duration: 250, fill: 'forwards' });
	correctSymbol2.classList.add('displayOff');
};
