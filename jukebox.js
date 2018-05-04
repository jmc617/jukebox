document.addEventListener("DOMContentLoaded",function Jukebox(){
  // audio player
  var player = document.getElementById("player");
  // songs object
  function Music(title, path) {
    this.title = title;
    this.path = path;
  }
  // songs
  var song1 = new Music ("song 1", "<source src=\"song1.mp3\" type=\"audio/mp3\">")
  var song2 = new Music ("song 2", "<source src=\"song2.mp3\" type=\"audio/mp3\">")
  var song3 = new Music ("song 3", "<source src=\"song3.mp3\" type=\"audio/mp3\">")
  var test = new Music ("song 4", "<source src=\"test.mp3\" type=\"audio/mp3\">")

  // playlist array
  var playlist = [song1,song2,song3,test]

  // intial song load
  var nowPlaying = []
  player.innerHTML = playlist[0].path
  nowPlaying.push(2)

  // button actions
  Jukebox.next = document.getElementById("next")
  next.addEventListener("click", function(){
    var i = playlist[i]
    if (nowPlaying[0] > playlist.length) {
      player.innerHTML = playlist[0].path
      nowPlaying.splice(0,1,2)
      player.load()
    } else {
      var newNowPlaying = nowPlaying[0]+1
      var newSong = playlist[nowPlaying-1]
      nowPlaying.splice(0,1,newNowPlaying)
      player.innerHTML = newSong.path
      player.load()
    }
  })
  Jukebox.play = document.getElementById("play");
  play.addEventListener("click", function(){
    player = document.getElementById("player");
    player.play()
  })
  Jukebox.pause = document.getElementById('pause')
  pause.addEventListener("click", function(){
    player = document.getElementById("player");
    player.pause()
  })
  var stop = document.getElementById('stop')
  stop.addEventListener("click", function(){
    player = document.getElementById("player");
    player.pause()
    player.currentTime = 0;
  })
})
