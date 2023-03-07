const burger = document.querySelector(".burger")
const but = document.querySelector(".menu")
const uznat = document.querySelector(".znaniya")
const soveti = document.querySelector(".soveti")


burger.addEventListener("click", () => {
  but.classList.toggle("none") 
  but.classList.toggle("menu--active")

})

uznat.addEventListener("click", () => {
    soveti.classList.toggle("none")
})