var intert = document.querySelectorAll('.statInter');
        var progbar = document.getElementsByClassName('progressBar');
        var educStates = document.querySelectorAll('.educState');
        var centerEduc = document.getElementById('centerEduc');

        centerEduc.style.height = educStates.length * 110 + "px"; 
        for (var i = intert.length - 1; i >= 0; i--){
            for(var x = intert.length - 1; x >= 0; x--){
                progbar[x].style.width = intert[x].innerHTML;
            };

        }