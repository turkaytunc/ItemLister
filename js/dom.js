function ChangeEveryOtherColor(arr, colorOdd, colorEven, flag) {
if (flag == 1) {
    for (let i = 0; i < arr.length; i++) {
        if (!(i % 2)) {
            arr[i].style.backgroundColor = `${colorEven}`;
        }
        else {
            arr[i].style.backgroundColor = `${colorOdd}`;
        }
    }
}
else {
    for (let i = 0; i < arr.length; i++) {
        if (!(i % 2)) {
            arr[i].style.backgroundColor = `${colorOdd}`;
        }
        else {
            arr[i].style.backgroundColor = `${colorEven}`;
        }
    }
}
};

document.getElementById("button").addEventListener('click', buttonClick);

let doc = document.getElementsByClassName("list-group-item");
let arr = [...doc];

let flag = 1;
function buttonClick() {
    ChangeEveryOtherColor(arr, "#9DA9A0", "#A6D49F", flag);
    flag = !flag;
}