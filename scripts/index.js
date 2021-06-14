var push = true;
     function changeI(){
           var element = document.getElementById("hamburger");

           


           if(push==true){
            element.classList.remove("fas","fa-bars");
           element.classList.add("fas","fa-times");
           push=false;
           }else{
               element.classList.remove("fas","fa-times");
               element.classList.add("fas","fa-bars");
               push=true;
           }
           
        }
