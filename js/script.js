/**
 * Fetches json file
 * @param {*} callback function to call after request is made
 */
function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'qoutes.json', true); 

    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT 
            // return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}

/**
 * load json file and call create slides
 */
function loadJsonInit(){
    var data;
    loadJSON(function(response){
        data = JSON.parse(response);   
        createSlides(data.quotes)
    })
}

/**
 * Re-load webslides javascript file and create webSlides object
 */
function load_js(){
       
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.src= 'js/webslides.js';
      head.appendChild(script);

      var newScript= document.createElement('script');

      newScript.innerHTML= "window.ws = new WebSlides();";
      head.appendChild(newScript)
}

/**
 * Creates slides by changing innerHTML of webslides element
 * @param {JSON} data json data to create slides
 */
function createSlides(data){
    
    
    if(typeof data !== "undefined"){
        var webslides = document.getElementById('webslides');   
        
        var section;
        for(i=0; i<data.length; i++){
            section = document.createElement('section');
            section.innerHTML = `            
                <div id="slider">
                    <div id="pic">
                        <img src=${data[i].pic} alt="Malcolm-X">
                        <p id="creditBlock">Credit: ${data[i].pic_credit}</p>                   
                    </div>                   
                    <div>                    
                        <p class="text-context" id="textBlock">
                            "${data[i].quote}"
                            <br><br>
                            <i id="author">${data[i].name}</i>
                        </p>                        
                    </div>
                </div>            
            `
            webslides.appendChild(section)
        }
       
        load_js();
    }else{
        
    }
}

loadJsonInit();
createSlides();
