const btnLength = document.querySelectorAll("button").length;
const headingTitle = document.querySelector("h3");
const span1 = document.querySelector(".s1");
const span2 = document.querySelector(".s2");

let num1 = 0;
let num2 = 0;

for (let i = 0; i < btnLength; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    num2 = (Math.floor(Math.random() * 3)).toString();
    console.log(this.className, num2);

    // Move Display
    switch (num2){
      case ("0"):
        span1.innerText = "Rock";
        break;
      case ("1"):
        span1.innerText = "Paper";
        break;
      case ("2"):
        span1.innerText = "Scissors";
        break;
    }
    
    switch (this.className){
      case ("0"):
        span2.innerText = "Rock";
        break;
      case ("1"):
        span2.innerText = "Paper";
        break;
      case ("2"):
        span2.innerText = "Scissors";
        break;
    }

    // Logic
    if (this.className === num2){
      headingTitle.innerText = "Draw";
    }
    else if (this.className === "0" && num2 === "1" || this.className === "1" && num2 === "2" || this.className === "2" && num2 === "0"){
      headingTitle.innerText = "Computer Wins!";
    }
    else if (num2 === "0" && this.className === "1" || num2 === "1" && this.className === "2" || num2 === "2" && this.className === "0"){
      headingTitle.innerText = "You Win!";
    }
  });
}