const textArray = [
  "This",
  "is",
  "a",
  "text",
];

function addFunc() {
  let input = document.getElementById("keywords").value;
  document.getElementById("alertTxt").innerHTML = "";

  if (textArray.find(checkText) !== input) {
    textArray.push(input);
    document.getElementById("typedText").innerHTML += input + " ";
    console.log(textArray);
    return 0;
  }

  function checkText(text) {
    return text == input;
  }

  document.getElementById("alertTxt").innerHTML = "Word ' " + textArray.find(checkText) + " ' already exist inside text!";
  return 0;     
}

function searchFunc() {
  let input = document.getElementById("inputText").value;
  const startUrl = "https://www.google.com/search?q=";
  var finalUrl = startUrl + input;
  window.open(finalUrl, '_blank').focus();
}