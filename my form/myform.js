const form = document.querySelector("#shelterForm")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    console.log(newLI);
    list.append(newLI);
    
});