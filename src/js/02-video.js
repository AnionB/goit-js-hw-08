import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', currentTime => throt_currentTime(currentTime));

const throt_currentTime = throttle(function (time) {
  setsCurrentTime(time);
}, 1000);

function setsCurrentTime(currentTime) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(JSON.parse(savedTime).seconds);
}
