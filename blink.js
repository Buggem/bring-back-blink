// save it in __internal_blink incase someone wants it off
window.__internal_blink = setInterval(function() {
  let blinks = [...document.getElementsByTagName("blink")]; // evil hack - undo HTMLCollection using spread syntax into an array 
  for(let blinkElem of blinks) {
    blinkElem.style.visibility = (blinkElem.style.visibility != "hidden" && blinkElem.style.visibility !=  "collapse") ? "hidden" : "visible";
  }
}, 750);
