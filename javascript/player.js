//testing for HTML5 Functionality
function load(source) {
    loc = source.indexOf('/');
    len = source.length;
    sor = source.substring(loc + 1, len);

    for (var i = 0; i < 10; i++) {
        sor = sor.replace("_", " ");
        sor = sor.replace("%20", " ");
    }

    NowPlay = ">>> Now Playing <<<";
    looper = 'loop';
    if (sor == "") looper = '';
    if (sor == "") source = '../music';
    if (sor == "") NowPlay = "";
    if (sor == "") sor = "Click on Part to Activate Player";
    document.getElementById('mediaplayer').innerHTML =
        '<audio id="aud" preload="auto" controls autoplay ' + looper + 'controls controlsList="nodownload" controls style="width: 95%;" controls style="height: 100px;">' +
        '	<source src="' + source + '.mp3" />' +
        '</audio>' +
        '</script>';
    PBR = aud.playbackRate;
    Rate = parseInt(100 * PBR);

    document.getElementById('sor').innerHTML =
        '' + sor + '';

    document.getElementById('pbr').innerHTML = Rate + '%';
}

function loadRemote() {
    source = document.remote.url.value;
    console.log(source);
    loc = source.indexOf('/');
    len = source.length;
    sor = source.substring(loc + 1, len);

    for (var i = 0; i < 10; i++) {
        sor = sor.replace("_", " ");
        sor = sor.replace("%20", " ");
    }

    NowPlay = ">>> Now Playing <<<";
    looper = 'loop';
    if (sor == "") looper = '';
    if (sor == "") source = '../music';
    if (sor == "") NowPlay = "";
    if (sor == "") sor = "Click on Part to Activate Player";
    document.getElementById('mediaplayer').innerHTML =
        '<audio id="aud" preload="auto" controls autoplay ' + looper + 'controls controlsList="nodownload" controls style="width: 95%;" controls style="height: 100px;">' +
        '	<source src="' + source + '" />' +
        '</audio>' +
        '</script>';
    PBR = aud.playbackRate;
    Rate = parseInt(100 * PBR);

    document.getElementById('sor').innerHTML =
        '' + sor + '';

    document.getElementById('pbr').innerHTML = Rate + '%';
}

function Play() {
    aud.play();
}

function Pause() {
    aud.pause();
}

function Rewind() {
    aud.pause();
    aud.currentTime = 0;
    aud.play();
}

function Back10() {
    POS = aud.currentTime;
    if (POS <= 10) POS = 0;
    if (POS > 10) POS = POS - 10;
    aud.currentTime = POS;
}

function Back1() {
    POS = aud.currentTime;
    if (POS <= 3) POS = 0;
    if (POS > 3) POS = POS - 3;
    aud.currentTime = POS;
}

function Forward1() {
    POS = aud.currentTime;
    END = aud.seekable.end(0);
    if (POS >= END - 3) POS = END;
    if (POS < END - 3) POS = POS + 3;
    aud.currentTime = POS;
}

function Forward10() {
    POS = aud.currentTime;
    END = aud.seekable.end(0);
    if (POS >= END - 10) POS = END;
    if (POS < END - 10) POS = POS + 10;
    aud.currentTime = POS;
}

function LoopIt() {
    aud.pause();
    a = Number(document.abloop.Start.value);
    b = Number(document.abloop.End.value);
    aud.currentTime = a;
    aud.play();
    var loopid = setInterval(function() {
        if (aud.currentTime > b) aud.currentTime = a;
    }, 100);
}

function EndLoop() {
    aud.pause();
    //clearInterval(loopid);
    a = 0;
    b = aud.seekable.end(0);
    document.abloop.Start.value = a;
    document.abloop.End.value = b;
    aud.currentTime = 0;
    //aud.play();
}

var slider = document.getElementById("speed");
var output = document.getElementById("pbr");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = (this.value * 100) + '%';
}

function toSpeed() {
    PBR = slider.value;
    aud.playbackRate = PBR;
}