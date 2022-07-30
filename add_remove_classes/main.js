let ad = document.querySelector(".classes-to-add")
let rem = document.querySelector(".classes-to-remove")
let current = document.querySelector(".element")
let diiv = document.querySelector("h5").nextElementSibling
    //console.log(diiv.innerHTML); // console.log(current);
ad.addEventListener("blur", function() {


    //  console.log(spans);
    if (this.value) {
        let arrayOfClasses = this.value.split(" ")
        let a = arrayOfClasses.map(el => {
            return el.toLowerCase();
        })
        a.forEach(element => {
            if (!current.classList.contains(element))
                current.classList.add(element)
        });
        //  console.log(a.sort());
    }
    // console.log(current.classList);
    // while (diiv.firstChild) {
    //     diiv.removeChild(diiv.firstChild);
    // }

    showclasses(current.classList.value.split(" "))
})
rem.addEventListener("blur", function() {

    //diiv.remove()
    //console.log(diiv);
    //  console.log(spans);
    if (this.value) {
        let arrayOfClasses = this.value.split(" ")
        let a = arrayOfClasses.map(el => {
            return el.toLowerCase();
        })
        a.forEach(element => {
            if (current.classList.contains(element))
                current.classList.remove(element)
        });
        //  console.log(a.sort());
    }
    // console.log(current.classList);
    // while (diiv.firstChild) {
    //     diiv.removeChild(diiv.firstChild);
    // }
    //diiv.remove();
    showclasses(current.classList.value.split(" "))
})

function showclasses(arr) {
    // console.log(diiv.children[0].remove());
    // diiv.children.forEach(element => {
    //     element.remove();
    // });
    while (diiv.firstChild) {
        diiv.removeChild(diiv.firstChild);
    }
    console.log(arr);
    if (arr.length === 0 || arr[0] == "") {
        let el = document.createElement("span")
        let txt = document.createTextNode("no element")
        el.appendChild(txt)
        diiv.appendChild(el)
        console.log("object");
    } else {
        // diiv.remove();
        // let d = document.createElement("div");
        // document.querySelector(".classes-list").appendChild(d)
        // diiv.style.display = "none";

        arr.sort();
        // console.log(arr);
        arr.forEach(element => {
            let el = document.createElement("span")
            let txt = document.createTextNode(element)
            el.appendChild(txt)
            diiv.appendChild(el)
                // diiv.style.display = "inline-block";

            //  console.log(el);
        });
    }
}