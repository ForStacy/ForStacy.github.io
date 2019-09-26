let count = 0;
let phNumber = 20;
let strImg = '';

let ind = 1;

while (ind <= phNumber) {

    document.getElementById("gg-box").innerHTML += '<img src="assets/img/' + ind + '.jpg">';
    ++ind;

    if (ind == phNumber && count < 3) {
        ind = 1;
        ++count;
    }
}