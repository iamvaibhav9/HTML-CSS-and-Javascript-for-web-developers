
(function(window){
	hellospeaker = new Object();
	var speakWord = "Hello";

	hellospeaker.speak = function (name) {
  	console.log(speakWord + " " + name);
	}

	window.helloSpeaker = hellospeaker;

})(window);


