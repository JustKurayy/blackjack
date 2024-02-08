//const selt = document.querySelector(".selt");
const selbtn = document.querySelector(".selbtn");
const jackcard = document.querySelector(".jackcard");
const totalp = document.querySelector(".totalp");
let totalc = 0;

selbtn.addEventListener("click", () => { //hit btn
    if (totalc < 21) {
        let num = Math.floor(Math.random() * 10) + 1
        totalc += num;
        totalp.textContent = totalc;
        jackcard.innerHTML += getCard(num);
        if (totalc > 21) {
            selbtn.disabled = true;
            alert("You lost bruh");
        }
    } else {
        selbtn.disabled = true;
        alert("You lost bruh");
    }
});

function getCard(num) {
    const letters = ["C", "D", "H", "S"];
    let randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(num + randomLetter);
    if (num == 1) {
        num = "A";
    }
    let dat = `<img src="img/` + num + randomLetter + `.png" class="card" draggable="false">`;
    return dat;
}