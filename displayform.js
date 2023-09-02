const openFormBtn = document.getElementById('open-form-btn')
const closeFormBtn = document.getElementById("close-form-btn")
openFormBtn.addEventListener('click',() => {
    document.getElementById("myForm").style.display = "block";
  })
  
  closeFormBtn.addEventListener('click',() => {
    document.getElementById("myForm").style.display = "none";
  })