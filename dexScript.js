const textArray = [
  "This",
  "is",
  "a",
  "text",
  "",
];

function addText() {
  let input = document.getElementById("addInput").value;
  document.getElementById("alertTxt").innerHTML = "";

  function checkText(text) {
    return text == input;
  }

  if (textArray.find(checkText) !== input) {
    textArray.push(input);
    document.getElementById("typedText").innerHTML += input + " ";
  } else {
    document.getElementById("alertTxt").innerHTML = "Word ' " + input + " ' already exist inside text!";
  }
  document.getElementById("addInput").value = "";
  return 0;     
}

function searchText() {
  let input = document.getElementById("searchInput").value;
  document.getElementById("alertTxt").innerHTML = "";

  function checkText(text) {
    return text == input;
  }

  if (textArray.find(checkText) == input) {
    document.getElementById("alertTxt").innerHTML = "Word ' " + input + " ' exist inside text!";
  } else {
    document.getElementById("alertTxt").innerHTML = "Word ' " + input + " ' doesn't exist inside text!";
  }
  return 0;     
}