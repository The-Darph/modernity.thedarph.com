import 'normalize.css';
import '../less/style.less';
const general = require('./general.js');

const firstLine = document.querySelector(".line");
general.typeLine(firstLine, "> the system is observing." + '<br />' + "> influencing." + '<br />' + "> profiting.", 30);

const secondLine = document.querySelector('.line2');
general.typeLine(secondLine, "> profiling...");

const thirdLine = document.querySelector('.line3');
general.typeLine(secondLine, "> session dump in progress...");

const fourthLine = document.querySelector('.line4');
general.typeLine(secondLine, "> FINGERPRINT_ID: ...");