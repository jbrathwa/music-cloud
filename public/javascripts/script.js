$(function(){
    
});

function player(song){
    var id=song.id;
    $(".player").fadeIn("slow");
    var audio = document.getElementById("song");
    audio.src = "/music/songs/"+id+"/play";
    audio.play();
    return false;
}