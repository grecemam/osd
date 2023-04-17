var audio;
            addEventListener('load', function(){
                audio = document.getElementById('audio');
            })

            addEventListener('click', function(){
                audio.pause();
                audio.load();
                audio.play();
            })