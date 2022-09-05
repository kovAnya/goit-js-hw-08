import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds
);

function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(event));
}
