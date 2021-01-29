const div = document.getElementById("content"); 

console.log(div);

let borderR = (e) => {
    console.log(e.target); 
    e.target.style.border = "1px dashed red";
}

div.addEventListener("click", (e) =>{
    borderR(e);
});




