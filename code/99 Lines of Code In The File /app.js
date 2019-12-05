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
        console.log(friend + ":")
        for (let i = 99; i > 0; --i) {
            if (i > 1){
                console.log(`${i} lines of code in the file, ${i} lines of code; ${friend} strikes one out, clears it all out, ${i - 1} ${i-1 == 1 ? 'line' : 'lines'} of code in the file`)
            }
            else{
                console.log(`1 line of code in the file, 1 line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file`)
            }
        }
    }
}

