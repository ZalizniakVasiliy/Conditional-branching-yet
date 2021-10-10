const randomNum = 13;

const userOffer = confirm("Do you want to play?");

if (userOffer) {
  alert("Cool! Continue.");
  const userNumb = +prompt("Try to divine which number you need to enter:");
  if (!isNaN(userNumb) && userNumb === randomNum) {
    alert("You won! Our congratulations!");
  } else if (!isNaN(userNumb) && userNumb !== randomNum) {
    alert("You can try to do it one more time.");
  } else if (isNaN(userNumb)) {
    alert("Invalid input. You had to enter a number.");
  }
} else {
  alert("You are losing an interesting possibility!");
}
