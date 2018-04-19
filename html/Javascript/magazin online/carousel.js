var slider_content = document.getElementById('box');

      // contain images from Firebase in an array
    
      function getImages () {
          
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
    
            if (this.readyState == 4 && this.status == 200) {
    
                listaProduse = JSON.parse(this.responseText);
                
                for (i in listaProduse.Audiobooks, i<=2) {
                    var picture = [listaProduse.Audiobooks[i].imagine];
                }
    
                for (i in listaProduse.Ebooks, i<=2) {
                    var poza = [listaProduse.Ebooks[i].imagine];
                }
    
    
                for (i in listaProduse.OnlineCourses, i<=3) {
                    var imagine = [listaProduse.OnlineCourses[i].imagine];
                }
            }
    
            xhttp.open("GET", "https://capstone-project-ffeb9.firebaseio.com/.json", true);
            xhttp.send();
    
    
        }
      }

      

    // function for next slide 

    function nextImage(){
    	
    }


    // function for previous slide

    function prevImage(){

    }

  
  // auto-play image slider

  setInterval(nextImage() , 5000);
