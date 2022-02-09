function submit_values(){
    var namee = document.getElementById("nm").value;
    var mob = document.getElementById("mob_no").value;
    checkNull(namee, mob);
 
   
}       

function checkNull(namee, mob){
    if(namee == "" ) {
        document.getElementById("error1").innerHTML= "*Field empty or invalid entry!";
        document.getElementById("nm").style.borderColor="red";}
    else if (isNaN(namee) === false ){
        document.getElementById("error1").innerHTML= "*Field empty or invalid entry!";
        document.getElementById("nm").style.borderColor="red";
        }
    else if (!/^[a-zA-Z]*$/g.test(document.getElementById("nm").value)){
        document.getElementById("error1").innerHTML= "*Field empty or invalid entry!";
        document.getElementById("nm").style.borderColor="red";
    }
    else{
        document.getElementById("error1").innerHTML= "valid";
        document.getElementById("nm").style.borderColor="black"
        document.getElementById("error1").style.color= "green";
    }
    if(mob ==""){
        document.getElementById("error2").innerHTML= "*Field empty or invalid entry!";
        document.getElementById("mob_no").style.borderColor="red";
    }
    else{
        if(isNaN(mob) || mob.length != 10){
            document.getElementById("error2").innerHTML= "*Field empty or invalid entry!";
            document.getElementById("mob_no").style.borderColor="red";
        }
        else{
            document.getElementById("mob_no").style.borderColor="black";
            document.getElementById("error2").innerHTML= "Valid";
            document.getElementById("error2").style.color= "green";
            
        }
    }
}
