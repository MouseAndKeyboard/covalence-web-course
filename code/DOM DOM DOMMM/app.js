
function pick_random_colour(){
    let color_list = ["red", "green", "blue", "yellow", "orange", "black", "purple", "white"]
    return color_list[color_list.length * Math.random() | 0]
}



function add_div(flexbox) {
    let div = document.createElement('div');
    div.className = 'box'
    
    let boxcount = document.getElementsByClassName('box').length;   
    div.id = boxcount
    div.addEventListener('mouseenter', function(event){
        event.target.textContent = event.target.id
    });

    div.addEventListener('mouseleave', function(event){
        event.target.textContent = ''
    });

    div.addEventListener('click', function(event){
        event.target.style.backgroundColor = pick_random_colour();
    });

    div.addEventListener('dblclick', function(event){
        even = event.target.id % 2 == 0;

        if (even){
            // delete the next item if an even id
            next_item = event.target.nextSibling
            if (next_item){
                next_item.remove()
            } else {
                alert('No item to delete!')
            }
        } else {
            // delete the previous item if an odd id
            previous_item = event.target.previousSibling
            if (previous_item){
                previous_item.remove()
            } else {
                alert('No item to delete!')
            }
        }

    });

    flexbox.appendChild(div);


}

document.addEventListener("DOMContentLoaded", function(){
    let addsquarebtn = document.createElement('button');
    let addsquarebtn_text = document.createTextNode('Add Square');

    let flexbox = document.createElement('div');
    flexbox.className = 'container'
    document.body.appendChild(flexbox);

    addsquarebtn.appendChild(addsquarebtn_text);
    addsquarebtn.addEventListener('click', function(){
        add_div(flexbox);
    });
    document.body.appendChild(addsquarebtn);

});