(function(window) {

'use strict';

var position;
var targetid;
var targetElem = document.getElementById(targetid);
var targetclass;
var h = window.innerHeight;

window.onscroll = function() {
		// this.ignitePos = ignitePos;

		if (getElemPosition() < parsePos()) {
			setAnimation();
		}
};

function parsePos() {
	if (position < 1) {
		return h * position;
	} else {
		return position;
	}
}

function getElemPosition() {
	var y =
		document.documentElement.scrollTop ||
		document.body.scrollTop;
	var bounds = targetElem.getBoundingClientRect();
	var yPos = Math.round(bounds.top);
	return yPos;
}

function setAnimation() {
	targetElem.classList.add(targetclass);
}


if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(visible);
    } else {
        // Browser globals
        window.visible = visible;
    }

})(window);