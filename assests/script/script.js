
const nextBtn = document.getElementById("NEXT");
const container = document.querySelector(".pentagonAlign");
const children = document.querySelectorAll(".Pentagon");
// ////////////
const container2 = document.querySelector(".MainContendAlign");
const children2 = document.querySelectorAll(".Car");
// ////////////
const container3 = document.querySelector(".RightNavAlign");
const children3 = document.querySelectorAll(".RNav");
// ////////////
const container4 = document.querySelector(".PentagonTextAlign");
const children4 = document.querySelectorAll(".textCart");

let currentIndex = 0;

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % children.length;
    updateClassesOnPrev();
});

function updateClassesOnPrev() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`);
        child.classList.add(`carr${newIndex}`);
    });
}


let currentIndex1 = 0;

//////////////////////////////////////////////
//////////////////////////////////////////////

nextBtn.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % children2.length;
    updateClassesOnPrev2();
});

function updateClassesOnPrev2() {
    children2.forEach((child1, index) => {
        const newIndex = (index - currentIndex + children2.length) % children2.length + 1;
        child1.classList.remove(`car1`, `car2`, `car3`);
        child1.classList.add(`car${newIndex}`);
    });
}
//////////////////////////////////////////////
//////////////////////////////////////////////

nextBtn.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % children3.length;
    updateClassesOnPrev1();
});

function updateClassesOnPrev1() {
    children3.forEach((child1, index) => {
        const newIndex = (index - currentIndex + children3.length) % children3.length + 1;
        child1.classList.remove(`cartt1`, `cartt2`, `cartt3`);
        child1.classList.add(`cartt${newIndex}`);
    });
}
//////////////////////////////////////////////
//////////////////////////////////////////////

nextBtn.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % children4.length;
    updateClassesOnPrev10();
});

function updateClassesOnPrev10() {
    children4.forEach((child4, index) => {
        const newIndex = (index - currentIndex + children4.length) % children4.length + 1;
        child4.classList.remove(`Text1`, `Text2`, `Text3`);
        child4.classList.add(`Text${newIndex}`);
    });
}