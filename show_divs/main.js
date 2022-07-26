////////////////////////////////////////////////////////////////////////////////////////////////
let formm = document.forms[0];
formm.onsubmit = function(e) {
    let num = formm.firstElementChild.value;
    let txt = document.querySelector('[type="text"]').value;
    let tg = document.querySelector('[name="type"]').value;
    let res = document.querySelector('[class="results"]');
    res.style.display = 'none';
    res.remove();
    let newresult = document.createElement('div');
    newresult.setAttribute('class', 'results');
    newresult.style.cssText = "margin-top:20px; grid-gap: 10px;display: grid;grid-template-columns: 1fr 1fr 1fr;padding: 10px;"
        // newresult.textContent = "txt";
    document.body.appendChild(newresult);
    for (let i = 1; i <= num; i++) {
        let el = document.createElement(tg);
        el.setAttribute('class', 'box');
        el.setAttribute('title', 'Element');
        el.setAttribute('id', 'id -' + i);
        el.textContent = txt;
        el.style.cssText = "background-color: red;text-align: center;padding: 10px;color: antiquewhite;border-radius: 20px;min-width: 70px;"
        newresult.appendChild(el);


    }

    e.preventDefault();
}