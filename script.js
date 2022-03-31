console.log("running")

let but = document.querySelector(".but")
let pop = document.querySelector(".pop")
let lists = document.querySelector(".lists")

but.addEventListener("click", newevent)

function newevent() {
    console.log("newevent")
    pop.style.display = ""
    pop.innerHTML = `
    <div class="popy">
        <p id="newt">New Event</p> 
        <button class="x">x</button> 
    <div class="head">
    <input id="inp"; type="text"; placeholder="add title"> <button class="sub"> submit </button>
    </div>
    <textarea id="inpp"; placeholder="description here";type="text"></textarea></div>`
    let x = document.querySelector(".x")
    let sub = document.querySelector(".sub")
    x.addEventListener("click", closepop)
    sub.addEventListener("click", addlist)
}

function closepop() {
    pop.style.display = "none"
}

function addlist() {
    var puranahtml = lists.innerHTML
    var top = document.getElementById("inp")
    var descrip = document.getElementById("inpp")
    lists.innerHTML = puranahtml + `
    <div class="box">
        <div class="header">
            <textarea readonly class="topic" rows= "2"> ${top.value} </textarea>
            <div class="icon1"> X </div>
            <div class="icon2"> - </div> 
        </div>
        <div class="mainn">
        <textarea readonly class="descrip" rows="13"> ${descrip.value} </textarea>
        </div>
    </div>`
    var top = ""
    var descrip = ""
    crossandmini()
    closepop()
}

function crossandmini() {
    let icon1 = document.querySelectorAll(".icon1")
    let icon2 = document.querySelectorAll(".icon2")
    console.log("running mini and cross", icon1)

    for (let i = 0; i < icon1.length; i++) {
        console.log("loop runs", i)
        icon1[i].addEventListener("click", closetick);
    }
    for (let j = 0; j < icon2.length; j++) {
        icon2[j].addEventListener("click", mintick)
    }
}

function closetick(e) {
    console.log("closetick running", e.target.closest('.box'))
    let box = e.target.closest('.box')
    box.style.display = 'none'
}

function mintick(e){
    let box = e.target.closest(".box")
    let ta = box.querySelector(".descrip")
    if (ta.style.display != "none"){
        ta.style.display = "none"
        box.style.height = "80px"
    }
    else{
        ta.style.display = "flex"
        box.style.height = "280px"
    }
}