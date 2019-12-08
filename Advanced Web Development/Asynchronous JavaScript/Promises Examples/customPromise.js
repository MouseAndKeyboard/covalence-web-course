function slowEcho(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() > 0.8) {
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

    let trigger2 = document.getElementById('trigger2')
    trigger2.addEventListener('click', () => {

        Promise.all([
            slowEcho("Howdy Partner (1s)", 1000),
            slowEcho("Greetings (2s)", 2000),
            slowEcho("Nice work! (1.5s)", 1500)
        ]).then(([p1, p3, p2]) => {
            console.log(p1, p2, p3);
        }).catch(err => {
            console.log(err);
        });

    });

    let trigger3 = document.getElementById('trigger3')
    trigger3.addEventListener('click', async () => {
        try {
            let message = await slowEcho("async/await test", 2000);
            console.log(message);
        } catch (error) {
            // if the promise rejects
            console.log(error);
        }
    });

});