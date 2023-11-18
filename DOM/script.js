// function reveal(el){
//     console.log(el);
// }


// function message(el){
//     console.log(el.innerText)
// }

// function toggleDisplay(){
//     let p = document.getElementById("magic");
//     if(p.style.color === "red" || p.style.color === "blue") {
//     p.style.color = "yellow";
//     } else {
//     p.style.color = "blue";
//     }
// }
   

// function rainbowify(){
//     let divs = document.getElementsByTagName("div");
//     for(let i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundColor = divs[i].id;
//     }
// };


// function disappear(){
//     // document.getElementById("shape").classList.add("hide");
//     document.getElementById("shape").classList.toggle("hide");
// };

// --------- Practice exercise 10.8

// let element = document.getElementById("output")

// let html = "<h1>My Friends list</h1>";

// element.innerHTML = html;

// let colors = [
//     "red",
//     "black",
//     "yellow",
//     "green",
//     "pink",
//     "chocolate"
// ];


// function addColorBox(){
//     for(let i=0; i < colors; i++){
//         let colorBox = document.createElement("div");
//         colorBox.style.backgroundColor = colors[i];
//         colorBox.style.height = "50px";
//         colorBox.style.width = "50px";
//         // colorBox.style.margin = "5px";
//         // colorBox.style.borderRadius = "5px";
//         document.body.appendChild(colorBox);
//     };
// };
// window.onload = addColorBox;



let colors = [
    "red",
    "black",
    "yellow",
    "green",
    "pink",
    "chocolate"
];

function getRandomColor() {
    // Generate a random index to pick a color from the array
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function addRandomColorBox() {
    let colorBox = document.createElement("div");
    colorBox.style.backgroundColor = getRandomColor();
    colorBox.style.height = "10vw";
    colorBox.style.width = "10vw";
    colorBox.style.margin = "0px";
    colorBox.style.borderRadius = "10px";
    colorBox.style.display = "inline-block";
    document.body.appendChild(colorBox);
    if (document.body.scrollHeight > window.innerHeight) {
        // Scroll to the bottom of the page
        window.scrollTo(0, document.body.scrollHeight); 
    }
}





// function addRandomNumber(){
//     let el = document.createElement("p");
//     el.innerText = Math.floor(Math.random() * 100);
//     document.body.appendChild(el);
// };
 



   