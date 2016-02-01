var init = function () {
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
    jQuery.ajax('js/pitch.json').done(function(pitches){
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
            var btn = $('<button id="' + this.note + '" class="'+keyclass+'">' + this.note + '</button>').appendTo($('body'));
            $(btn).click(function(){
                playNote = note.pitch;
                console.log(playNote);
                piano.play({
                    pitch: playNote
                })
            })
        });
    });
    piano.play({
        pitch: 5000
    })
}
$(document).ready(function () {
    init();
})