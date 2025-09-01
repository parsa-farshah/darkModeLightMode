let inpDrkLt = document.getElementById("drkLt");
let imgDrkLt = document.getElementById("imgDrkLt");

inpDrkLt.addEventListener("click", () => {
  inpDrkLt.classList.toggle("bg-[#b392ff]");

  if (imgDrkLt.getAttribute("src") === "src/images/lightModeWhite.png") {
    imgDrkLt.setAttribute("src", "src/images/darkModeBlack.png");
  } else {
    imgDrkLt.setAttribute("src", "src/images/lightModeWhite.png");
  }
});
