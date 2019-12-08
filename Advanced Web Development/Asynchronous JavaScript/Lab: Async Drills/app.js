function log(msg) {
    console.log(msg);
}

function getWords(m1, m2, m3, m4) {
    log(m1);
    setTimeout(() => {
        log(m2)
        setTimeout(() => {
            log(m3)
            setTimeout(() => {
                log(m4)
            }, 1000);
        }, 2000);
    }, 3000);
}

function countdown(num, callback) {
    console.log(num);
    if (num <= 0) {
        callback();
        return;
    } else {
        setTimeout(() => {
            num = num - 1;
            countdown(num, callback);
        }, 1000);
    }
}

function done() {
    log("Job's done!")
}

let lunchTime = true;

function orderMeSomeFood() {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            resolve({
                lunch: "Apple",
                drink: "Water"
            });
        } else {
            reject(new Error("Not lunch time"))
        }
    });

}

document.addEventListener("DOMContentLoaded", () => {

    // log("hello world");
    // setTimeout(() => {
    //     log("hello universe");
    // }, 3000);

    // getWords('test', 'ing', '12', '3 :)')

    // countdown(5, done);

    orderMeSomeFood()
        .then(lunch => {
            log(lunch);
        }).catch(err => {
            log(err);
        });
});