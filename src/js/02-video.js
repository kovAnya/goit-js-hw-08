import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

if (currentTime) {
  player.setCurrentTime(currentTime.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(event));
}
