const reviews = [
    {
    id:1,
    name: "Priya Roy",
    job: "web desinger",
    img: "img/1.jpg",
text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Quos, laudantium placeat magnam molestiae dolorem illum! Explicabo rerum aperiam."

},
{
    id:2,
    name: "Rosy Son",
    job: "Graphic Designer",
    img: "img/2.jpg",
text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum "

},
{
    id:3,
    name: "Devid Jonson",
    job: "Modelar",
    img: "img/3.jpg",
text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."

},
{
    id:4,
    name: "Charls Jack",
    job: "web devoloper",
    img: "img/5.jpg",
text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."

}
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prvbtn = document.querySelector(".prvs-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded" , function(){
const item = reviews[ currentItem];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
});
function showperson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    }
nextbtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem> reviews.length -1){
        currentItem=0;
    }
    showperson(currentItem);
});

prvbtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem= reviews.length -1 ;  }
        showperson(currentItem);
});
randombtn.addEventListener("click", function(){
    currentItem = Math.floor( Math.random() * reviews.length);
    showperson(currentItem); 
})










