import './style.css';
import {choreographer, enableMarioMorphing} from '../js/mario';
import {interval} from '../js/parallax';
import '../js/serviceCards';
import '../js/map';
import '../js/reveals';
import '../js/streamersTabs';
// import './js/tooltips';

// LISTENERS
window.addEventListener('scroll', function () {
    enableMarioMorphing();
    choreographer.runAnimationsAt(window.pageYOffset)
}, false);

setInterval(interval, 3500);
