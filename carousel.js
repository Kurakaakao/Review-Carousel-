// objects
// DOMContentLoader
// AddEventListener
// array.length
// textContent

let arr = [
    {
        id: 1,
        name: "Hodd Toward",
        job: "A regular citizen",
        img: "img/Hodd Toward.jpg",
        text: "Elder Scrolls V: Skyrim™ has been the best game I have ever played. I wholeheartedly recommend buying Skyrim, and the Fallout-series.",
    },
    {
        id: 2,
        name: "Chad Man",
        job: "Danger to society",
        img: "img/chad with a gun.png",
        text: "This is no longer asking t. gun man",
    },
    {
        id: 3,
        name: "Sburdogachi",
        job: "Professional actor",
        img: "img/id geds hard when i bull id.jpg",
        text: "Sorry for whad :-DD? Our fadhers daughd us nod do be ashamed of our digs :D, esbecially widh de good size and all :D. Id geds bigger when I bull id :DD. Somedimes I bull so hard, I rib de sgin :-DD",
    },
    {
        id: 4,
        name: "Tonio Trussardi",
        job: "Pro chef",
        img: "img/bellissimo.jpg",
        text: "Excellent servings. Even my own restaurant, the Trattoria Trussardi is not as good. It feels like they have used Pearl Jam on this!",
    },
    {
        id: 5,
        name: "Mr. Rex",
        job: "Gen 2 representative",
        img: "img/mr square.jpg",
        text: "Wrooargh *theme plays*",
    }
]; 

let img = document.getElementById("user-img");
let user = document.getElementById("user");
let ocp = document.getElementById("occupation");
let det = document.getElementById("details");

let prvBtn = document.querySelector(".prv-btn");
let nxtBtn = document.querySelector(".nxt-btn");
let rndBtn = document.querySelector(".rnd-btn");

let current = 0;

window.addEventListener("DOMContentLoaded", function() {
    let item = arr[current];
    img.src = item.img;
    user.textContent = item.name;
    ocp.textContent = item.job;
    det.textContent = item.text;
});

function PersonReview(person) {
    let item = arr[person];
    img.src = item.img;
    user.textContent = item.name;
    ocp.textContent = item.job;
    det.textContent = item.text;
}

nxtBtn.addEventListener("click", function() {
    current++;
    if (current > arr.length - 1) {
        current = 0;
    }
    PersonReview(current);
    console.log(current);
});
prvBtn.addEventListener("click", function() {
    current--;
    if (current < 0) {
        current = arr.length - 1;
    }
    PersonReview(current);
    console.log(current);
});
rndBtn.addEventListener("click", function() {
    current = Math.floor(Math.random() * arr.length);
    PersonReview(current);
    console.log(current);
});
