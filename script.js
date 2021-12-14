var bold = false;
var italic = false;
var underline = false;

function changeFont(font){
    document.getElementById('content').style.fontFamily = font.value;
}
function changeFontSize(size){
    var content = document.getElementById('content');
    content.style.fontSize = size.value +'px';
}
function isBold(){
    bold = !bold;
    if(bold == true){
        document.getElementById('content').style.fontWeight = 'bold';
    }
    else{
        document.getElementById('content').style.fontWeight = 'normal';
    }
}
function isItalic(){
    italic = !italic;
    if(italic == true){
        document.getElementById('content').style.fontStyle = 'italic';
    }
    else{
        document.getElementById('content').style.fontStyle = 'normal';
    }
}
function isUnderline(){
    underline = !underline;
    if(underline == true){
        document.getElementById('content').style.textDecoration = 'underline';
    }
    else{
        document.getElementById('content').style.textDecoration = 'none';
    }
}
function reset(){
    document.getElementById('content').style.textDecoration = 'none';
    document.getElementById('content').style.fontStyle = 'normal';
    document.getElementById('content').style.fontWeight = 'normal';
}
function clearPage(){
    console.log("clearrr");
    document.getElementById('content').value = " ";
}
function exportNotes(){
    var notes = document.getElementById('content').value;
    var blob = new Blob([notes], {type:"text/plain;charset=UTF-8"});
    saveAs(blob,"notes.txt");
}