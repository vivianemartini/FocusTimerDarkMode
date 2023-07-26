const buttonForest = document.getElementById('forest')
const audioForest = new Audio('./sounds/Floresta.wav')
const buttonRain = document.getElementById('rain')
const audioRain = new Audio('./sounds/Chuva.wav')
const buttonCoffee = document.getElementById('coffee')
const audioCoffee = new Audio('./sounds/Cafeteria.wav')
const buttonFire = document.getElementById('fire')
const audioFire = new Audio('./sounds/Lareira.wav')
let isPlaying = false

let volumeSlider = document.getElementById("volumeSlider");

function handleButtonClick(button, audio) {

  button.addEventListener('click', function () {

    volumeSlider.addEventListener("mousemove", setVolume);

    if (isPlaying) {
      // Stop the music
      audio.pause()
      isPlaying = false
      button.style.backgroundColor = ''
      button.querySelector('i').style.color = ''
      button.querySelector('input').style.backgroundColor = ''
      button.querySelector('.slider::-webkit-slider-thumb').style.webkitSliderThumbColor = '';
    } else {
      // Play the music
      audio.play()
      isPlaying = true
      button.style.backgroundColor = '#02799d'
      button.querySelector('i').style.color = '#ffffff'
      button.querySelector('input').style.backgroundColor = '#ffffff'
      button.querySelector('.slider::-webkit-slider-thumb').style.webkitSliderThumbColor = 'yellow';
    }

    function setVolume(){
	    audio.volume = volumeSlider.value / 100;
    }
  })
}

handleButtonClick(buttonForest, audioForest)
handleButtonClick(buttonRain, audioRain)
handleButtonClick(buttonCoffee, audioCoffee)
handleButtonClick(buttonFire, audioFire)

export default handleButtonClick
