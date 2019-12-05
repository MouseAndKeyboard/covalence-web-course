let list_len = 0;
let color_list = ["red", "green", "blue", "yellow", "orange", "black", "purple", "white"]
function add_list_item(){
    let list = document.getElementById("list");
    let item = document.createElement("li");
    let item_text = document.createTextNode(`This is list item #${list_len}`);
    item.appendChild(item_text)


    item.addEventListener('click', function() {
        item.style.color = color_list[color_list.length * Math.random() | 0];
    });

    item.addEventListener('dblclick', function() {
        item.remove();
    });

    list.appendChild(item)

    list_len = list_len + 1;
    
}


document.addEventListener("DOMContentLoaded", function(){
    let headerContainer = document.createElement("div");
    headerContainer.className = "header-container";

    

    for (let i=1; i<7;i++){
        let header = document.createElement(`h${i}`);
        let header_text = document.createTextNode(`This is a H${i}`);
        header.appendChild(header_text);
        header.className = `h${i}`
        header.addEventListener("dblclick", function(){
            header.style.color = color_list[color_list.length * Math.random() | 0];
        });

        headerContainer.appendChild(header);
    }
    
    document.body.appendChild(headerContainer);


    let btn = document.getElementsByClassName('additem').item(0)
    btn.addEventListener("click", add_list_item)

});