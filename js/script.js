



function init(){
    var webslides = document.getElementById('webslides');
    if(webslides){
        // alert('Section loaded')
        var section;

        for(i=0; i<3; i++){
            section = document.createElement('section');
            section.innerHTML = `            
                <div id="slider">
                    <div id="pic">
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
        
    }
}

init();
