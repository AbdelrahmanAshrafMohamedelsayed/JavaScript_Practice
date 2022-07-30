let a = document.querySelectorAll("li");
let ex = document.querySelector(".experiment")
if (window.localStorage.getItem("color")) {
    ex.style.backgroundColor = window.localStorage.getItem("color")
    a.forEach(el => {
        el.classList.remove("active");
    });
    a.forEach(el => {
        if (el.dataset.color === window.localStorage.getItem("color")) {
            el.classList.add("active");

        }
    });

}
a.forEach(el => {
    el.addEventListener("click", function(e) {
        //  console.log(e.target.dataset.color);
        a.forEach(el => {
            el.classList.remove("active");
        });
        e.target.classList.add("active");
        window.localStorage.setItem("color", e.target.dataset.color);
        ex.style.backgroundColor = e.target.dataset.color;
        // console.log(window.localStorage.getItem("color"));
    });

});