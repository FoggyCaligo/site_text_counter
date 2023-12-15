//컨텐츠토글버튼
function content_toggle_btn(b){
    speed = document.getElementById("Speed");
    count = document.getElementById("Count");
    mainbox = document.getElementById("mainBox");
    if(b==true){
        speed.style.backgroundColor="white";
        count.style.backgroundColor="#EDEDED";
        mainbox.innerHTML = '<object style="width:90vw; height:70vh;" type="text/html" data="speed&count/Speed.html"></object>';
        // get_html1("mainBox","speed&count/Speed.html");
    }else{
        speed.style.backgroundColor="#EDEDED";
        count.style.backgroundColor="white";
        mainbox.innerHTML = '<object style="width:90vw; height:70vh;" type="text/html" data="./speed&count/Count.html"></object>';
        // get_html1("mainBox","speed&count/Count.html");
    }
    

}





    // function get_html1(id,html){
        //     let xhr = new XMLHttpRequest();
        //     xhr.open("GET",html,true);
        //     xhr.send();
        //     xhr.onload=function(){
        //         console.log(xhr.responseText);
        //     }
        //     document.getElementById(id).innerHTML=xhr.responseText;
        // }
