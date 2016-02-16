var piano;
var pitches;
var playback;
var musicArray = new Array;
var musicCount = 0;
var playNote;
var main = function () {
    var labelState = true; // false is hidden, true is shown
    piano = new Wad({
        source: 'square',
        env: {
            attack: .01,
            decay: .005,
            sustain: .2,
            hold: .015,
            release: .3
        },
        filter: {
            type: 'lowpass',
            frequency: 1200,
            q: 8.5,
            env: {
                attack: .2,
                frequency: 600
            }
        }
    })
    $('#labelDisplay').click(function () {
        $('.key').each(function (num, btn) {
            if (labelState == false) {
                var btnClass = btn.getAttribute('class');
                if (btnClass.indexOf('red') < 0) {
                    $(btn).css('font-size', '10px');
                }
            } else {
                $(btn).css('font-size', '0px');
            }
        })
        labelState = !labelState;
    })

    playNote = function(number) {
        console.log('Played: ' + number);
        piano.play({
            pitch: number
        });
    }
}
$(document).ready(function () {
    main();
});