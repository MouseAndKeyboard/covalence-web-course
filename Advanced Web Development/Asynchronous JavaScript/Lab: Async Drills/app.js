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

document.addEventListener("DOMContentLoaded", () => {

    log("hello world");
    // setTimeout(() => {
    //     log("hello universe");
    // }, 3000);

    getWords('test', 'ing', '12', '3 :)')

});