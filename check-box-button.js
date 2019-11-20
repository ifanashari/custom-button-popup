var globalButtonTarget = document.getElementsByClassName("c_popup-btn")
var contentId = null
var contentTarget = null

var globalPopupContent = document.getElementsByClassName("c_popup-content")

for (let buttonTargetCounter = 0; buttonTargetCounter < globalButtonTarget.length; buttonTargetCounter++) {
    globalButtonTarget[buttonTargetCounter].addEventListener('focus', function() {
        closeAllPopupContent()
        showPopupContent(buttonTargetCounter)
    })

    globalButtonTarget[buttonTargetCounter].addEventListener('blur', function() {
        closeAllPopupContent(buttonTargetCounter)
    })
}

function showPopupContent(buttonTargetCounter) {
    contentId = globalButtonTarget[buttonTargetCounter].getAttribute("data-target-content")
    contentTarget = document.getElementById(contentId)

    contentTarget.classList.add("c_popup-content-active")
    globalButtonTarget[buttonTargetCounter].classList.add("c_popup-btn-active")
}

function closeAllPopupContent() {
    for (let i = 0; i < globalPopupContent.length; i++) {
        globalButtonTarget[i].classList.remove("c_popup-btn-active")
        globalPopupContent[i].classList.remove('c_popup-content-active')
    }
}