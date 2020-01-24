function changeEveryOtherColor(arr, colorOdd, colorEven, flag) {
    if (flag == 1) {
        this.color1 = colorEven;
        this.color2 = colorOdd;  
    }
    else {
        this.color1 = colorOdd;
        this.color2 = colorEven;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!(i % 2)) {
            arr[i].style.backgroundColor = `${color1}`;
        }
        else {
            arr[i].style.backgroundColor = `${color2}`;
        }
    }
};

document.getElementById("button").addEventListener('click', changeColor);
document.querySelector("#submit-button").addEventListener("click", addListItem);

let flag = 1;
function changeColor(e) {
    let doc = document.getElementsByClassName("list-group-item");
    let arr = [...doc];
    changeEveryOtherColor(arr, "#9DA9A0", "#A6D49F", flag);
    if (flag == 1) {
        document.getElementById("button").innerHTML = "Green Grey";
    }
    else
        document.getElementById("button").innerHTML = "Grey Green";
    flag = !flag;
}

function addListItem() {
    let newLi = document.createElement("li");
    newLi.className = "list-group-item";
    let inputValue = document.querySelector("#input-box").value;
    if (inputValue) {
        newLi.appendChild(document.createTextNode(`${inputValue}`));
        document.querySelector(".list-group").appendChild(newLi); 
        changeColor();
    }
    document.querySelector("#input-box").value = "";
}