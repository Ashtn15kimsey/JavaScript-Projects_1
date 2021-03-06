function Sport_Function() {
    var Sport_Output;
    var sport=document.getElementById("Sport_Input").value;
    var Sport_String="is a great sport!";
    switch(Sports) {
        case"Basketball":
        Sport_Output="Basketball"+ Sport_String;
        break;
        case"Football":
        Sport_Output="Football"+ Sport_String;
        break;
        case"Soccer":
        Sport_Output="soccer"+ Sport_String;
        break;
        case"Tennis":
        Sport_Output="Tennis"+ Sport_String;
        break;
        case"hockey":
        Oport_Output="Hockey"+ Sport_String;
        break;
        case"Golf":
        Sport_Output="Golf"+ Sport_tring;
        break;
        default:
        Sport_Outputt="Please enter a sport exactly as written on the above list.";
       
    }
    document.getElementById("Output").innerHTML=Sport_Output;
}
function myCanvas() {
    var A= document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed!";
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(0.5, "red");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150, 100);
}
    


