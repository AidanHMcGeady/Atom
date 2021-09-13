function addWrong () {
  //takens from Index.html and combines two numbers together incorrectly
  var x = prompt("X");
  var y = prompt("Y");
  var sum = x + y;

  alert(X + " + " + Y + " = " + sum);
} //End of function

function addRight() {
    //takens from Index.html and adds two numbers together correctly
    var x = prompt("X");
    var y = prompt("Y");

    x = parseInt(x);
    y = parseInt(y);

    var sum = x + y;
    alert(X + " + " + Y + " = " + sum);
} //End of function

function checkName() {
  lblOutput = document.getElementById("lblOutput");
  txtInput = document.getElementById("txtInput");

  userName = txtInput.value;

  if (userName == "Tim Berners-Lee")
  {
    lblOutput.innerHTML = "Thanks for inventing HTML";
  } else {
    lblOutput.innerHTML = "Do I know you?";
  }
}
