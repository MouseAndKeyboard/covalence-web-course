
// DOM elements can't be manipulated until the browser has finished 
// loading the HTML document
document.addEventListener("DOMContentLoaded", function(){
    // DOM Workflow
    // create element
    // modify element
    // insert element to document

    // create element
    let paragraph = document.createElement("p");
    let text = document.createTextNode("Example paragraph text. Blah blah blah");

    // modify element
    paragraph.style.color = "red";
    paragraph.style.textTransform = "uppercase";
    paragraph.className = "some-paragraph"
    paragraph.appendChild(text);

    // insert element to document
    document.body.appendChild(paragraph);

    let btn = document.createElement("button");
    let btn_text = document.createTextNode("Click me")
    btn.appendChild(btn_text)

    // insert element to document
    document.body.appendChild(btn);

    btn.addEventListener("click", function(){
        let h1 = document.createElement('h1');
        let h1_text = document.createTextNode("You clicked me!");
        h1.appendChild(h1_text);
        document.body.appendChild(h1);
    });
});

