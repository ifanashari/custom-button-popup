var globalButtonTarget = document.getElementsByClassName("c_popup-btn")
var contentId = null
var contentTarget = null

for (let buttonTargetCounter = 0; buttonTargetCounter < globalButtonTarget.length; buttonTargetCounter++) {
    globalButtonTarget[buttonTargetCounter].addEventListener("click", () => {
        contentId = globalButtonTarget[buttonTargetCounter].getAttribute("data-target-content")
        contentTarget = document.getElementById(contentId)

        if(contentTarget.classList.contains("c_popup-content-active")){
            contentTarget.classList.remove("c_popup-content-active")
            globalButtonTarget[buttonTargetCounter].classList.remove("c_popup-btn-active")
        } else {
            contentTarget.classList.add("c_popup-content-active")
            globalButtonTarget[buttonTargetCounter].classList.add("c_popup-btn-active")
        }
    })
}
