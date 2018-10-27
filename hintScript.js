var hints = ["Double-jumping is very powerful", "You need to go back the way you came.", "Don't destroy all of the sheep on the way.  You will need to come back."];
var errors = ["Sorry, we're fresh out.", "We don't want to make it too easy, do we?", "I've already told you everything I know."];
var hintVariable = document.getElementById("hintText");

function showhint(){
    if(hints.length > 0){
        hintVariable.innerHTML += "<br>" + hints[0];
        hints.splice(0, 1);
    }else{
        let errorIndex = Math.floor(Math.random() * errors.length);
        alert(errors[errorIndex]);
    }
}
