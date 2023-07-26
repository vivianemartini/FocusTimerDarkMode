const buttonForest = document.getElementById('forest')
const audioForest = new Audio('./sounds/Floresta.wav')
const buttonRain = document.getElementById('rain')
const audioRain = new Audio('./sounds/Chuva.wav')
const buttonCoffee = document.getElementById('coffee')
const audioCoffee = new Audio('./sounds/Cafeteria.wav')
const buttonFire = document.getElementById('fire')
const audioFire = new Audio('./sounds/Lareira.wav')
let isPlaying = false

function handleButtonClick(button, audio, volumeRange) {

  button.addEventListener('click', function () {

    volumeRange.addEventListener("mousemove", setVolume);

    if (isPlaying) {
      // Stop the music
      audio.pause()
      isPlaying = false
      button.style.backgroundColor = ''
      button.querySelector('i').style.color = ''
      button.querySelector('input').style.backgroundColor = ''
    } else {
      // Play the music
      audio.play()
      isPlaying = true
      button.style.backgroundColor = '#02799d'
      button.querySelector('i').style.color = '#ffffff'
      button.querySelector('input').style.backgroundColor = '#ffffff' 
    }

    function setVolume(){
      if (isPlaying) {
        audio.volume = volumeRange.value / 100;
      }
    }
  })
}

handleButtonClick(buttonForest, audioForest, volumeSliderForest)
handleButtonClick(buttonRain, audioRain, volumeSliderRain)
handleButtonClick(buttonCoffee, audioCoffee, volumeSliderCoffee)
handleButtonClick(buttonFire, audioFire, volumeSliderFire)

export default handleButtonClick
