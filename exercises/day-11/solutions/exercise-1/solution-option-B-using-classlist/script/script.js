

function togglePattern() {
  // get the video element
  var myPattern = document.getElementById('pattern');

  // also get the id of reveal button, so we can change what it says
  var patternButton = document.getElementById('patternButton');

  // now toggle the pattern and the button text, depending on current state
  if (myPattern.classList.contains("invisible")) {
      // pattern is visible. hide it
      myPattern.classList.remove("invisible")
      // change button text
      patternButton.innerHTML = 'Hide pattern';
  } else {
      // pattern is hidden. show it
      myPattern.classList.add("invisible")
      // change button text
      patternButton.innerHTML = 'Show pattern';
  }
}