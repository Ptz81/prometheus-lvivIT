function showText(el) {
    if(el.previousElementSibling.clientHeight === 70) {
        el.previousElementSibling.style.height = "100%";
        el.innerHTML = "Show less...";

    } else {
        el.previousElementSibling.style.height = "70px";
        el.innerHTML = "Read more...";
    }


}


var foo = 10 + '20'
console.log(foo);