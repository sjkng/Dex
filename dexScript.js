const textArray = [
  "This",
  "is",
  "a",
  "text",
  "",
  "This is a text.",
];

let input = document.getElementById("inputText").value;

function addText() {
  refreshInput();
  if (textArray.find(checkText) !== input) {
    textArray.push(input);
    document.getElementById("typedText").innerHTML += input + " ";
  } else {
    document.getElementById("alertTxt").innerHTML = "Cannot add Word, ' " + input + " ' already exist inside text!";
  }
  document.getElementById("inputText").value = "";
  return 0;     
}

function searchText() {
  refreshInput();
  if (textArray.find(checkText) == input) {
    document.getElementById("alertTxt").innerHTML = "Word ' " + input + " ' exist inside text!";
  } else {
   document.getElementById("alertTxt").innerHTML = "Word ' " + input + " ' doesn't exist inside text!";
  }
  return 0;     
}

function refreshInput() {
  document.getElementById("alertTxt").innerHTML = "";
  input = document.getElementById("inputText").value;
  return 0;
}

function checkText(text) {
  return text == input;
}