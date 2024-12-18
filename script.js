const promptInput = document.getElementById("promptInput"),
    categoryButtons = document.getElementById("categoryButtons"),
    itemList = document.getElementById("itemList");

function createButtons(t) {
    categoryButtons.innerHTML = "", itemList.innerHTML = "", Object.entries(t).forEach(([t, e], n) => {
        let o = document.createElement("button");
        o.classList.add("category-button"), o.textContent = t, o.onclick = () => toggleItems(t, e), categoryButtons.appendChild(o), 0 === n && o.click()
    })
}

function toggleItems(t, e) {
    itemList.innerHTML = "", e.forEach(t => {
        let e = document.createElement("button");
        e.classList.add("item-button"), e.textContent = t, e.onclick = () => addToInput(t), itemList.appendChild(e)
    })
}

function addToInput(t) {
    "" === promptInput.value || promptInput.value.endsWith(" ") ? promptInput.value += `${t},` : promptInput.value += ` ${t},`
}

function clearInput() {
    promptInput.value = ""
}
fetch("data.json").then(t => t.json()).then(t => createButtons(t)).catch(t => console.error("Error loading the JSON file:", t));