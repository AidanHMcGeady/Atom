var output;
var i;

function init() {
  output = document.getElementBtId("output");
  i = document.getElementBtId("i");
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
    output.innerHTML += i + "<br />";
  }
}

function byFive() {
  i += 5;

  output.innerHTML = i + "<br />";
}
