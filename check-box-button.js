var globalButtonTarget = document.querySelector(".c_popup-btn")
var contentId = null
var contentTarget = null

globalButtonTarget.addEventListener("click", (e) => {

    contentId = globalButtonTarget.getAttribute("data-target-content")
    contentTarget = document.getElementById(contentId)

    if(contentTarget.classList.contains("c_popup-content-active")){
        console.log('alpha')
        contentTarget.classList.remove("c_popup-content-active")
    } else {
        contentTarget.classList.add("c_popup-content-active")
        console.log('bravo')
    }
})