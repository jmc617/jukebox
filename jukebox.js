document.addEventListener("DOMContentLoaded",function Jukebox(){
  var songTest =  ("<source src=\"test.mp3\" type=\"audio/mp3\">")
  var songTest2 = ("<source src=\"test3.ogg\" type=\"audio/ogg\">")
  var playlist = [songTest,songTest2]
  player = document.getElementById("player");
  player.innerHTML = playlist[0]
  console.log(playlist[0]);
  console.log("hello");

  play = document.getElementById("play");
  pause = document.getElementById("pause")
  stop = document.getElementById("stop");
  next = document.getElementById("next");
  source = document.getElementById("source")

  play.addEventListener("click", function(){
    player.play()
  })
  pause.addEventListener("click", function(){
    player.pause()
  })
  stop.addEventListener("click", function(){
    player.pause()
    player.currentTime = 0;
  next.addEventListener("click", function(){
      // console.log(playlist [i+1]);
      console.log("helloB");
    })
  })
})


  // function Jukebox(sourceURL){


// var songTest = new Jukebox ("<source src=\"test.mp3\" type=\"audio/mp3\">")
// var songTest2 = new Jukebox ("<source src=\"test3.ogg\" type=\"audio/ogg\">")
// var playlist = [songTest,songTest2]



// need loop
// next.addEventListener("click", function() {
//   this.player.innerHTML = this.playlist[0].sourceURL
// })
// }
//
// })




// var songTest = new Jukebox ("<source src=\"test.mp3\" type=\"audio/mp3\">")
// var songTest2 = new Jukebox ("<source src=\"test3.ogg\" type=\"audio/ogg\">")
// var playlist = [songTest,songTest2]
//
// document.addEventListener("load",function(){
//   this.player.innerHTML = this.playlist[0].sourceURL
//   console.log(playlist[0].sourceURL);
//   console.log(hello);
// })
//
// this.next.addEventListener("click", function() {
//   this.player.innerHTML = this.playlist[0].sourceURL
// })
