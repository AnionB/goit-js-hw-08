import Player from '@vimeo/player';
import _ from 'lodash';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', currentTime => throt_currentTime(currentTime));

const throt_currentTime = _.throttle(function (time) {
  setsCurrentTime(time);
}, 1000);

function setsCurrentTime(currentTime) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}

player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds);
