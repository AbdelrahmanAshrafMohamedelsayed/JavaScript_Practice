let country = document.querySelector("input");
let btn = document.querySelector("button");
let res = document.querySelector(".res");
btn.addEventListener("click", function() {
    let ctn = country.value;
    ctn = ctn.toLowerCase();
    let link = `https://restcountries.com/v3.1/name/${ctn}?fullText=true`
        // console.log(link);
    fetch(link)
        .then((res) => {
            let jsn = res.json();
            console.log(jsn);
            return jsn;
        })
        .then((jsn) => {
            let name = jsn[0].name.common;
            let capital = jsn[0].capital[0];
            let flag = jsn[0].flags.png;
            let contenant = jsn[0].continents[0];
            let fifa = jsn[0].fifa;
            let currKey = Object.keys(jsn[0].currencies)[0];
            let currency = jsn[0].currencies[currKey].name;
            let lang = Object.values(jsn[0].languages).join(", ");
            let pop = jsn[0].population;
            console.log(name);
            res.firstElementChild.src = flag;
            res.firstElementChild.nextElementSibling.textContent = name;
            let info = document.querySelector(".inform");

            info.innerHTML = `<div class="cap">Capital:<span>${capital}</span></div>
            <div class="cont">Continent:<span>${contenant}</span></div>
            <div class="pop">Population:<span>${pop}</span></div>
            <div class="cur">fifa:<span>${fifa}</span></div>
            <div class="cur">Currency:<span>${currency}</span></div>
            <div class="langs">Languages:<span>${lang}</span></div>`
            info.style.cssText = "margin:30px auto;"
            res.appendChild(info);



        })

});