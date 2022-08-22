document.addEventListener("DOMContentLoaded", function(){

    var number = document.querySelector("p");
    var modifyNumber = Array.from(document.getElementsByTagName("button"));
    var counter=0;

    modifyNumber[0].addEventListener("click", function(){
        counter++;
        number.innerHTML = counter;
    });

    modifyNumber[1].addEventListener("click", function(){
        if(counter==0) counter=0;
        else{
            counter--;
            number.innerHTML = counter;
        }
    });

    modifyNumber[2].addEventListener("click", function(){
        counter=0;
        number.innerHTML = counter;
    });
});