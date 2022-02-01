const AddCom = $('.AddCom')
var textareaCom = $('.textareaCom')
var nameCom = $('.nameCom')

AddCom.on('click', function(){
    let now = new Date();
    var coments = document.getElementById('coments')

    var createDivCom = document.createElement('div');
    createDivCom.className = "comentsItem";
    coments.appendChild(createDivCom);
    /* add coment*/

    var createNameCom = document.createElement('div');
    createNameCom.className = "comentsName";
    createNameCom.textContent  = 'Author: ' + document.getElementById('nameCom').value;
    createDivCom.appendChild(createNameCom);
     /* add name for coment*/

    var createTextCom = document.createElement('div');
    createTextCom.className = "comentsText";
    createTextCom.textContent  = document.getElementById('textareaCom').value;
    createDivCom.appendChild(createTextCom);
    /* add text for coment*/

    var createTimeCom = document.createElement('div');
    createTimeCom.className = "timeCom";
    createTimeCom.textContent  = now.getDate() + "." + (now.getMonth()+ 1) + "." + now.getFullYear();
    /*getMonth показывает неправильное значение*/
    createDivCom.appendChild(createTimeCom);
    /* add text for coment*/

});