var main = function () {
    var labelState = true; // false is hidden, true is shown
    var pitches;
    var piano = new Wad({
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
    jQuery.ajax('js/pitch.json').done(function(pitchArray){
        pitches = pitchArray;
        $(pitches).each(function () {
            var note = this;
            var keyclass;
            if (this.note.length == 1){
                keyclass = 'white key';
            } else if (this.note.length == 2){
                keyclass = 'black key';
            } else {
                keyclass = 'red key';
            }
            var btn = $('<button id="' + this.note + '" class="'+keyclass+'">' + this.note + '</button>').appendTo($('#piano'));
            $(btn).click(function(){
                playNote = note.pitch;
                console.log(playNote);
                piano.play({
                    pitch: playNote
                })
            })
        });
    });
    $('#labelDisplay').click(function(){
        $('.key').each(function(num, btn){
            if (labelState == false){
                var btnClass = btn.getAttribute('class');
                if (btnClass.indexOf('red') < 0){
                    $(btn).css('font-size', '10px');
                }
            } else {
                $(btn).css('font-size', '0px');
            }
        })
        labelState = !labelState;
    })
}
$(document).ready(function () {
    main();
})