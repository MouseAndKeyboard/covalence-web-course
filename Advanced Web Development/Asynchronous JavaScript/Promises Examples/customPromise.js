
function slowEcho(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (Math.random() > 0.6){
                reject(new Error("Unfortuantly due to a servere weather event, the request could not be processed."));
            }

            resolve(msg)
        }, delay);
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let trigger = document.getElementById('trigger')
    trigger.addEventListener('click', () => {

        slowEcho("Hello World!", 3000)
        .then(message => {
            console.log(message);
        })
        .catch(err => {
            console.log(err);
        })

    });
});