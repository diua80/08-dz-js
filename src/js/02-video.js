import Player from '@vimeo/player';
import storage from './storage';
import throttle from 'lodash.throttle';


const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

const LOCALKEY = 'videoplayer-current-time';

const saveCurrentTime = throttle(function({ seconds }) {
  storage.save(LOCALKEY, seconds);
}, 1000);

player.on('timeupdate', saveCurrentTime);

const storedTime = storage.load(LOCALKEY);
if (storedTime !== undefined) {
  player.setCurrentTime(storedTime);
}
