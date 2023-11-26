var smallCups = document.querySelectorAll(".cup-small");
var liters = document.getElementById("liters");
var percentage = document.getElementById("percentage");
var remained = document.getElementById("remained");
updateBigCup();
smallCups.forEach(function (cup, idx) {
    cup.addEventListener("click", function () { return highlightCups(idx); });
});
function highlightCups(idx) {
    var _a;
    if (idx === 7 && smallCups[idx].classList.contains("full")) {
        idx--;
    }
    else if (smallCups[idx].classList.contains("full") &&
        !((_a = smallCups[idx].nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.contains("full"))) {
        idx--;
    }
    smallCups.forEach(function (cup, idx2) {
        if (idx2 <= idx) {
            cup.classList.add("full");
        }
        else {
            cup.classList.remove("full");
        }
    });
    updateBigCup();
}
function updateBigCup() {
    var fullCups = document.querySelectorAll(".cup-small.full").length;
    var totalCups = smallCups.length;
    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = "0";
    }
    else {
        percentage.style.visibility = "visible";
        percentage.style.height = "".concat((fullCups / totalCups) * 330, "px");
        percentage.innerText = "".concat((fullCups / totalCups) * 100, "%");
    }
    if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = "0";
    }
    else {
        remained.style.visibility = "visible";
        liters.innerText = "".concat(2 - (250 * fullCups) / 1000, "L");
    }
}
