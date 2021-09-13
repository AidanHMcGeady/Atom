var output;

function init() {
  output = document.getElementBtId("output");
}

function count() {
  output.innerHTML = "";

  for (i = 1; i <= 10; i++) {
    output.innerHTML += i + "<br />";
  }
}

function backwards() {
  output.innerHTML = "";

  for (i; i >= 0; i--) {
    output.innerHTML -= i + "<br />";
  }
}

function byFive() {
  i = i + 5;

  output.innerHTML = i + "<br />";
}
