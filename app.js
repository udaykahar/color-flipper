const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    //get random number b/w 0 to 3
    const randomNumber = getrandomNumber();
    console.log(document.body);

    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})
function getrandomNumber(){
    let rand = Math.random() * colors.length;
    // console.log(rand); // say 99.81321410836433
    rand = Math.floor(rand); // 99
    return rand;
}
