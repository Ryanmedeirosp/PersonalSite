function toggleMode(){
  const html = document.documentElement

  

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    document.querySelector("#avatar").src = "./assests/1.png"
  }else{
    html.classList.add("light")
     document.querySelector("#avatar").src = "./assests/2.png"
  }
}

document.querySelector(".switch").addEventListener("click",(e)=>{
  toggleMode()
})
