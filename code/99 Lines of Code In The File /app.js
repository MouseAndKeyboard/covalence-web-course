friends = [
    "jeff",
    "sally",
    "alex",
    "isaac",
    "jill"
]

document.addEventListener('DOMContentLoaded', function(){
    let btn = document.getElementById('sing');
    btn.addEventListener('click', sing);
});

function sing() {
    for (i in friends){
        friend = friends[i]

        let friend_div = document.createElement('div');
        let friend_header = document.createElement('h3');
        let friend_header_text = document.createTextNode(friend);
        friend_header.appendChild(friend_header_text);
        friend_div.appendChild(friend_header);
        document.body.appendChild(friend_div);

        console.log(friend + ":")
        for (let i = 99; i > 0; --i) {
            if (i > 1){
                line = `${i} lines of code in the file, ${i} lines of code; ${friend} strikes one out, clears it all out, ${i - 1} ${i-1 == 1 ? 'line' : 'lines'} of code in the file`
            }
            else{
                line = `1 line of code in the file, 1 line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file`
            }
            line_p = document.createElement('p');
            line_p_text = document.createTextNode(line);
            line_p.appendChild(line_p_text);

            friend_div.appendChild(line_p);
        }
    }
}

