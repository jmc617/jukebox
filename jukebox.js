document.addEventListener("DOMContentLoaded",function jukebox(){
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
  // tests

  // console.log(playlist.length);
  // console.log(playlist[0].path);
  // console.log(song1);
  // console.log(song1.title);
  // console.log(song1.path);

  // intial song load
  var nowPlaying = []
  player.innerHTML = playlist[0].path
  nowPlaying.push(2)
  // console.log(nowPlaying[0]);

  // button actions
  var next = document.getElementById("next")
  next.addEventListener("click", function(){
    var i = playlist[i]
    if (nowPlaying[0] > playlist.length) {
      player.innerHTML = playlist[0].path
      nowPlaying.splice(0,1,2)
      // console.log(nowPlaying);
      player.load()
    } else {
      var newNowPlaying = nowPlaying[0]+1
      var newSong = playlist[nowPlaying-1]

      nowPlaying.splice(0,1,newNowPlaying)
      // console.log(nowPlaying);
      // console.log(nowPlaying-1);

      player.innerHTML = newSong.path
      // console.log(newSong.path);
      // console.log(newNowPlaying);
      // console.log(nowPlaying);
      player.load()
    }
  })
  var play = document.getElementById("play");
  play.addEventListener("click", function(){
    player = document.getElementById("player");
    player.play()
  })
  var pause = document.getElementById('pause')
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
