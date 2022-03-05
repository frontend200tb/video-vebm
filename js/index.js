console.log('start frontend200tb video-webm');


/*****************
Константы
*****************/
const video = document.querySelector('video');
const playTime = document.querySelector('.play-time');
const trackTime = document.querySelector('.track-time');


/*****************
Переменные
*****************/


/*****************
Функции
*****************/
/*******************
Время трека
*******************/
const getTrackTime = () => {
  let sec_num = video.duration;
  let hours   = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours < 10) {
    hours   = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds; 
  } 

  trackTime.innerHTML = minutes + ':' + Math.floor(seconds);
};

video.addEventListener('loadeddata', getTrackTime);


/*******************
Текущее время
*******************/
const changeTime = () => {

  let sec_num = video.currentTime;
  let hours   = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);
  seconds=Math.round(seconds);

  if (hours < 10) {
    hours   = "0"+hours;
  }
  if (minutes < 10) {
    minutes = "0"+minutes;
  }
  if (seconds < 10) { seconds = "0"+seconds; } playTime.innerHTML = minutes+':'+seconds; 
  currentTime.value = video.currentTime; 
};

video.addEventListener('timeupdate', changeTime);

// Клик на кнопке play
const clickPlay = () => {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
};


/*****************
События
*****************/
// Клик по видео
video.addEventListener('click', clickPlay);


console.log('end frontend200tb video-webm');
