const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1280px-Firefox_logo%2C_2019.svg.png") {
    myImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Firefox_Nightly_logo%2C_2019.svg/1280px-Firefox_Nightly_logo%2C_2019.svg.png")
  } else {
    myImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1280px-Firefox_logo%2C_2019.svg.png");
  }
};

let myButton = document.querySelector("#changeUsernameBtn");
//let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name",myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };

const submitBtn = document.querySelector("#submitBtn");