var titluPiese = ["RapSodic - Aere", "RapSodic - De vara"];
var pozeCover = ['RapSodic - Aere.jpg', 'RapSodic - De vara.jpg' ];
var piese = ['RapSodic - Aere.mp3', 'Rapsodic - De vara.mp3'];
var i = piese[0]

document.getElementById('audio').src = piese[0];
document.getElementById('img-cover').src = pozeCover[0];
document.getElementById('title').innerHTML = "Asculti: " + titluPiese[0];



const audio = document.querySelector('audio')

const playSong = document.getElementById('play-song')
playSong.style.display = '';
const pauseSong = document.getElementById('pause-song')
pauseSong.style.display = 'none'

document.getElementById('play-song').addEventListener('click', 
	function clickPlay() {
		playSong.style.display = 'none';
		pauseSong.style.display = ''});

document.getElementById('pause-song').addEventListener('click', 
	function clickPause() {
		playSong.style.display = '';
		pauseSong.style.display = 'none'});

document.getElementById('stop-song').addEventListener('click', 
		function clickStop() {
			playSong.style.display = '';
			pauseSong.style.display = 'none'});



function play() {
	var audio = document.getElementById('audio');
	audio.play();
}

function pause() {
	var audio = document.getElementById('audio');
	audio.pause();
}

function stop() {
	var audio = document.getElementById('audio');
	audio.pause();
	audio.currentTime = 0;
}

function next() {
	document.getElementById('audio').src = piese[1];
	document.getElementById('img-cover').src = pozeCover[1];
	document.getElementById('title').innerHTML = "Asculti: " + titluPiese[1];
}

function prev() {
	document.getElementById('audio').src = piese[0];
	document.getElementById('img-cover').src = pozeCover[0];
	document.getElementById('title').innerHTML = "Asculti: " + titluPiese[0];
}
