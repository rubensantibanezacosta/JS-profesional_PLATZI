import  MediaPlayer from "./mediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";


const video=document.querySelector("video");
const buttonPlay = document.querySelector("#button__play");
const buttonMute = document.querySelector("#button__mute");
const player=new MediaPlayer({el: video, plugins:[//new AutoPlay()
]});
buttonPlay.onclick = () => {
    player.togglePlay();
};
buttonMute.onclick = () => {
    player.toggleMute();
};
