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
    var nameUser = document.getElementById('nameCom').value
    if (nameUser.length > 50){
        nameUser = 'NoName'
        alert("Please write name how be not bigger when 50 letters")
        createDivCom.removeChild()
    } else {
        createNameCom.textContent  = 'Author: ' + nameUser;
        createDivCom.appendChild(createNameCom);
        /* add name for coment*/
    };
        

    var createTextCom = document.createElement('div');
    createTextCom.className = "comentsText";
    createTextCom.textContent  = document.getElementById('textareaCom').value;
    createDivCom.appendChild(createTextCom);
    /* add text for coment*/

    var createDateCom = document.createElement('div');
    createDateCom.className = "DateCom";
    createDateCom.textContent  = now.getDate() + "." + (now.getMonth()+ 1) + "." + now.getFullYear();
    /* getMonth показывает неправильное значение */
    createDivCom.appendChild(createDateCom);
    /* add text for coment*/

    var createTimeCom = document.createElement('div');
    createTimeCom.className = "timeCom";
    createTimeCom.textContent  = now.getHours() + "HR " + now.getMinutes() + "MIN";
    /* getMonth показывает неправильное значение */
    createDateCom.appendChild(createTimeCom);
    /* add text for coment*/

});