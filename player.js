function play(){
    var x = document.getElementById("ad");
    var p1 = document.getElementById("pp1");
    p1.src="./img/play-yellow.svg";
    var p2 = document.getElementById("pp2");
    p2.src="./img/pause-white.svg";
    x.play()
}

function pause(){
    var x = document.getElementById("ad");
    var p1 = document.getElementById("pp1");
    p1.src="./img/play-white.svg";
    var p2 = document.getElementById("pp2");
    p2.src="./img/pause-yellow.svg";
    x.pause()
}

function setpercent(percent){
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = percent + '%';
}

jd = false;
function x2(){
    var x = document.getElementById("ad");
    if(jd==false){
        x.playbackRate=2;
        var y = document.getElementById("x2");
        y.style.color="#EAE4BD";
        jd=true;
    }else
    if(jd==true){
        x.playbackRate=1;
        var y = document.getElementById("x2");
        y.style.color="#aaaaaa";
        jd=false;
    }
}

function act_value(){
    var x = document.getElementById("ad");
    setpercent((x.currentTime/x.duration)*100);

    cur = Math.floor(x.currentTime);
    dur= Math.floor(x.duration);

    out = Math.floor(cur/60) + ":";
    if(Math.floor(cur%60) < 10){
        out+="0";
    }
    out+=Math.floor(cur%60);
    

    out+="/";

    out+=Math.floor(dur/60) + ":";
    if(Math.floor(dur%60) < 10){
        out+="0";
    }
    out+=Math.floor(dur%60);
    var y = document.getElementById("timeid");
    y.innerText=out;
}