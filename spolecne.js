
const button = document.querySelector("#menu-tlacitko")

button.addEventListener("click", () => {
  const menu = document.querySelector("#menu-polozky")
  menu.classList.toggle("show")

  const icon = button.querySelector("i")

  if (menu.classList.contains("show")) {
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-xmark")
  } else {
    icon.classList.remove("fa-xmark")
    icon.classList.add("fa-bars")
  }
})







