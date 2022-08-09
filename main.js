const openMenu = document.querySelector("#openMenu");
const sideMenu = document.querySelector("#sideMenu");
const closeMenu = document.querySelector("#closeMenu");
const items = document.querySelectorAll(".item");

openMenu.addEventListener("click", () =>{
    sideMenu.classList.add("showMenu");
})

closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("showMenu");
})

items.forEach(item => item.addEventListener("click", () => {
    sideMenu.classList.remove("showMenu");
}))