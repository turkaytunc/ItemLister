function ChangeEveryOtherColor(arr, colorOdd, colorEven) {
    for (let i = 0; i < arr.length; i++) {
        if (!(i % 2)) {
            arr[i].style.backgroundColor = `${colorEven}`;
        }
        else {
            arr[i].style.backgroundColor = `${colorOdd}`;
        }
    }
};
let doc = document.getElementsByClassName("list-group-item");
let arr = [...doc];

ChangeEveryOtherColor(arr, "#9DA9A0", "#A6D49F");
