function tellStory() {
  //gather all variables
  var txtBoy = document.getElementById("txtBoy");
  var txtGirl = document.getElementById("txtGirl");
  var txtGeol = document.getElementById("txtGeol");
  var txtVerb = document.getElementById("txtVerb");
  var txtContainer = document.getElementById("txtContainer");
  var txtLiquid = document.getElementById("txtLiquid");
  var txtPart = document.getElementById("txtPart");
  var txtGerund = document.getElementById("txtGerund");
  var output = document.getElementById("output");

  //create variables for input
  var Boy = txtBoy.value;
  var Girl = txtGirl.value;
  var Geological = txtGeol.value;
  var Verb = txtVerb.value;
  var Container = txtContainer.value;
  var Liquid = txtLiquid.value;
  var Part = txtPart.value;
  var Gerund = txtGerund.value;

  //write the Story
  var Story = = boy + „ and „ + girl + „ went up the „;
      story += geol + „ to „ + verb + „ a „ + container;
      story += „ of „ + liquid + „. <br / > <br />“;
      story += boy + „ fell down and broke his „ + part;
      story += „ and „ + girl + „ came „ + gerund + „ after.“;

  //copy story to output
  output.innerHTML = story;
} // end tellStory
