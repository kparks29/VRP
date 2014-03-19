


$(document).ready(function() {
	var currentTime = 0;
	var durationTime = 0;


$('#vrmain').on('loadedmetadata', function() {
    var dimensions = [this.videoWidth, this.videoHeight];
    durationTime = this.duration;
    var myVar = setInterval(function(){makeVideo();},10);
	  function makeVideo() {
			var view1 = document.getElementById("vr1").getContext("2d");
			var view2 = document.getElementById('vr2').getContext("2d");
			var vid = document.getElementById("vrmain");
			view1.drawImage(vid, 0, 0, 642, 768);
			view2.drawImage(vid, 0, 0, 642, 768);
			currentTime += 0.01;
			if (currentTime > durationTime) {
				clearInterval(myVar);
			}
		}
  });

  
});

