document.addEventListener("DOMContentLoaded", function(){
    let headerContainer = document.createElement("div");
    headerContainer.className = "header-container";

    for (let i=1; i<7;i++){
        let header = document.createElement(`h${i}`);
        let header_text = document.createTextNode(`This is a H${i}`);
        header.appendChild(header_text);
        headerContainer.appendChild(header);
    }
    
    document.body.appendChild(headerContainer);

});