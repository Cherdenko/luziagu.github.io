//7.1 Buttons
window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("mousedown", function () { play("kick.mp3"); });
    document.querySelector(".button2").addEventListener("mousedown", function () { play("snare.mp3"); });
    document.querySelector(".button3").addEventListener("mousedown", function () { play("hihat.mp3"); });
    document.querySelector(".button4").addEventListener("mousedown", function () { play("F.mp3"); });
    ;
    document.querySelector(".button5").addEventListener("mousedown", function () { play("G.mp3"); });
    ;
    document.querySelector(".button6").addEventListener("mousedown", function () { play("A.mp3"); });
    ;
    document.querySelector(".button7").addEventListener("mousedown", function () { play("C.mp3"); });
    ;
    document.querySelector(".button8").addEventListener("mousedown", function () { play("laugh-1.mp3"); });
    ;
    document.querySelector(".button9").addEventListener("mousedown", function () { play("laugh-2.mp3"); });
    ;
    document.querySelector(".PlayButton").addEventListener("click", PlaySong);
});
function play(myMP3) {
    var sound = new Audio("assets/" + myMP3);
    sound.play();
}
//7.2 Arrays
var PlayButton = ["assets/laugh-1.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/laugh-1.mp3"];
function PlaySong() {
    var sound = setInterval(Christmas, 400);
    var index = 0;
    function Christmas() {
        var Beat = new Audio(PlayButton[index]);
        index = index + 1;
        Beat.play();
    }
    ;
}
//# sourceMappingURL=DrumPad.js.map