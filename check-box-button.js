// ==========><>|Store|<><==========

var month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

var targetPopUpContainer = null
var renderContentResult = ''
var storedValue = {}
var storedStatus = []
var valueIndex = null
var valueCounter = 1

// ==========><>|Store|<><==========

function initiateCustomMontSelector(popUpContainer) {
    renderContent(popUpContainer)
}

function renderContent(id) {
    targetPopUpContainer = document.getElementById(id)
    valueCounter = 1
    renderContentResult = ''

    month.forEach((data) => {
        renderContentResult += `
            <div class="c_month_selector-item" id="">
                <input type="checkbox" name="month-selector" onchange="setValue(${valueCounter}, '` + id + `')">
                <span>${data}</span>
            </div>
        `

        valueCounter++
    })

    if(targetPopUpContainer != null){
        targetPopUpContainer.innerHTML = renderContentResult
    }

}

function setValue(value, id) {
    if(storedValue[id] != undefined){
        valueIndex = storedValue[id].indexOf(value)

        if(valueIndex >= 0){
            storedValue[id].splice(valueIndex, 1)
        } else {
            storedValue[id].push(value)
        }
    } else{
        storedValue = {
            ...storedValue,
            [id]: []
        }

        storedValue[id].push(value)
    }
}


function getCustomMontSelectorValue(id) {
    if(storedValue[id] != undefined){
        return []
    } else{
        return storedValue[id]
    }
}

function updateStatus(id) {
    targetPopUpContainer = document.getElementById(id)
    if(targetPopUpContainer.classList.contains("c_month_selector-content-active")){
        targetPopUpContainer.classList.remove("c_month_selector-content-active")
    } else {
        targetPopUpContainer.classList.add("c_month_selector-content-active")
    }

    console.log()
}