var speech_recognition=window.webkitSpeechRecognition;
var recognition=new speech_recognition();

function start(){
    document.getElementById("selfie").innerHTML="";
    recognition.start();
}
 recognition.onresult=function(event){
     console.log(event);
     var Content=event.results[0][0].transcript;
     document.getElementById("selfie").innerHTML=Content;
     if(Content=="selfie"){
        speech();
        speech2();
        speech3();

     }
    }
 
 function speech(){
    var synth = window.speechSynthesis;
     speak_data = "Taking you Selfie in 5 seconds"; 
     var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();   
    },5000);   
 }

 camera=document.getElementById("camera");
Webcam.set({ width:360, height:250, image_format : 'jpeg', jpeg_quality:90 });
 function take_snapshot(){
     Webcam.snap(function (data_uri){
         if(img_id=="selfie1"){ 
              document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){ 
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
      }
      if(img_id=="selfie3"){ 
        document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
  }
  

       
     });
 
    }
    function speech2(){
        var synth = window.speechSynthesis;
         speak_data = "Taking you Selfie in 10 seconds"; 
         var utterThis = new SpeechSynthesisUtterance(speak_data);
          synth.speak(utterThis);
          Webcam.attach(camera);
        setTimeout(function(){
            take_snapshot2();
            save2();   
        },10000);   
     }
    
     camera=document.getElementById("camera");
    Webcam.set({ width:360, height:250, image_format : 'jpeg', jpeg_quality:90 });
     function take_snapshot2(){
         Webcam.snap(function (data_uri){
             if(img_id=="selfie1"){ 
                  document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
            }
            if(img_id=="selfie2"){ 
                document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
          }
          if(img_id=="selfie3"){ 
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
      }
    });
 
}

function speech3(){
    var synth = window.speechSynthesis;
     speak_data = "Taking you Selfie in 15 seconds"; 
     var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot3();
        save3();   
    },15000);   
 }

 camera=document.getElementById("camera");
Webcam.set({ width:360, height:250, image_format : 'jpeg', jpeg_quality:90 });
 function take_snapshot3(){
     Webcam.snap(function (data_uri){
         if(img_id=="selfie1"){ 
              document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){ 
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
      }
      if(img_id=="selfie3"){ 
        document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
  }
});

 }
 function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie1").src;
    link.href=image;
    link.click();
}
function save2(){
    link=document.getElementById("link");
    image=document.getElementById("selfie2").src;
    link.href=image;
    link.click();
}
function save3(){
    link=document.getElementById("link");
    image=document.getElementById("selfie3").src;
    link.href=image;
    link.click();
}



 
