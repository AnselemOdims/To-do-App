
window.addEventListener('DOMContentLoaded', ()=>{

// Get the modal
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("user")
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("closer");

// When the user clicks the button, open the modal 

btn1.addEventListener('click', (e)=>{
    e.preventDefault()
    modal1.style.display = "flex";
}) 

btn2.addEventListener('click', (e)=>{
    e.preventDefault()
    modal2.style.display = "flex";
} )

btn3.addEventListener('click', (event)=>{
    event.preventDefault();
    modal2.style.display = "none"
    btn1.addEventListener('click', (e)=>{
        modal1.style.display = "flex";
    }) 
    
})
// When the user clicks on <span> (x), close the modal
for(val of span){
  val.addEventListener ('click', (e)=>{
    e.preventDefault()
  modal1.style.display = "none";
  modal2.style.display = "none";
})
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener ('click', (event)=> {
    // event.preventDefault()
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
})
})