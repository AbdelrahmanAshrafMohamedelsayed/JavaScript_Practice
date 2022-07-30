let pl = document.querySelector(".text")
let d = document.querySelector(".popup")
let btn = document.createElement("button");

function create_popup() {
    d.classList.add("active");
    let h = document.createElement("h3")
    h.textContent = "Welcome";

    let p = document.createElement("p")
    p.textContent = "Welcome to Abdo Ashraf";
    pl.appendChild(h)
    pl.appendChild(p);
    // let btn = document.createElement("button");
    btn.textContent = "x";
    pl.appendChild(btn);
}
// create_popup();
// setTimeout(create_popup, 5000);
// lebt d = document.querySelector("button");
btn.addEventListener("click", function(e) {
    btn.parentElement.parentElement.remove();
});


///
let da = document.querySelector("div")
let x = setInterval(() => {
    da.textContent = +da.textContent - 1;
    if (da.textContent == 0) {
        create_popup();
        da.remove();
        clearInterval(x)
    }
}, 1000);