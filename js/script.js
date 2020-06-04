


 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'qoutes.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

var data;
function intermediate(json){
    data = json;
    createSlides(data.quotes);
}

function loadJsonInit(){
    var data;
    loadJSON(function(response){
        data = JSON.parse(response);        
        intermediate(data)
    })
}

function load_js()
   {
       
      var head= document.getElementsByTagName('head')[0];
    //   console.log(head)
      var script= document.createElement('script');
      script.src= 'js/webslides.js';
      head.appendChild(script);

      var newScript= document.createElement('script');

      newScript.innerHTML= "window.ws = new WebSlides();";
      head.appendChild(newScript)

    //   console.log(head)
   }

function createSlides(data){
    
    
    if(typeof data !== "undefined"){
        // alert('')
        var webslides = document.getElementById('webslides');   
        
        
        var section;
        for(i=0; i<3; i++){
            section = document.createElement('section');
            section.setAttribute('id', `section-${i+1}`);
            section.setAttribute('class', 'slide')
            section.innerHTML = `            
                <div id="slider">
                    <div class=${i} id="pic">
                        <img src="images/Malcolm-X.jpg" alt="Malcolm-X">
                        <p id="creditBlock">Credit:</p>                   
                    </div>                   
                    <div>                    
                        <p class="text-context" id="textBlock">
                            "Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Doloribus laudantium
                            beatae repellendus. Similique placeat
                            amet pariatur ducimus eligendi asperiores
                            dolor minus est quos natus. Voluptate."
                            <br><br>
                            From: Malcolm-X
                        </p>                        
                    </div>
                </div>            
            `
            webslides.appendChild(section)
        }
       
        load_js();
    }else{
        // alert('not loaded')
        
    }
}

loadJsonInit();
// setTimeout(createSlides, 5000);
createSlides();
