// -------------------------------------------------------------------------------------------------------------------------------------------------------
// Utilities I have made to make this project easier.
// Replaces simple tasks that take too long to write and gives it a dedicated function to be more efficient and consistent.
// -------------------------------------------------------------------------------------------------------------------------------------------------------

const doc = document; // Shorten version of getting the DOM

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function hideElement(element) {
    element.style.display = "none";
}

function showElement(element) {
    element.style.display = "";
}

function isHidden(element) {
    if (element.style.display === "none") {
        return true;
    }

    return false;
}

function addClass(element, className) {
    element.classList.add(className);
}

function addMulitpleClasses(element, classNames) {
    classNames.forEach(className => element.classList.add(className));
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function hasClass(element, className) {
    if (element.classList.contains(className)) {
        return true;
    }

    return false;
}

function setClass(element, className) {
    element.className = className;
}

function nodeListToArrayList(nodeList) {
    return Array.prototype.slice.call(nodeList);
}