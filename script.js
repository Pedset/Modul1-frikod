document.querySelector("#button1").addEventListener("click", (event) => {
  document.querySelector("#button1").innerHTML = "clicked!";
});

document.querySelector("#button2").addEventListener("click", function (event) {
  alert("The URL of this page is: " + window.location.href);
});

document.querySelector("#button3").addEventListener("click", function (event) {
  document.querySelectorAll("li").forEach((el) => {
    el.style.color = "blue";
  });
});

document.querySelector("#button4").addEventListener("click", function (event) {
  console.log("hej");
});

var namesOfppl = ["Pedram", "Niloo", "Bob", "Max", "Dan", "Sara", "Daniel"];

document.querySelector("#button5").addEventListener("click", function (event) {
  var list = document.createElement("lu");

  for (var x = 0; x < namesOfppl.length; x++) {
    var listname = document.createElement("li");
    listname.innerHTML = namesOfppl[x];
    list.appendChild(listname);
  }
  document.getElementById("div1").appendChild(list);

  document.getElementById("button5").disabled = true;
});

document.querySelector("#button6").addEventListener("click", function (event) {
  var numbers = [1, 2, 3];

  var list1 = document.createElement("lu");

  var newNumbers = numbers.map((x) => x + 2);
  console.log(newNumbers[1]);

  for (var xx = 0; xx < newNumbers.length; xx++) {
    var listname1 = document.createElement("li");

    listname1.innerHTML = newNumbers[xx];

    list1.appendChild(listname1);
  }

  document.getElementById("div3").appendChild(list1);

  document.getElementById("button6").disabled = true;
});

document.querySelector("#button7").addEventListener("click", function (event) {
  var numbers = [1, 2, 3];

  var list1 = document.createElement("lu");

  var newNumbers = numbers.map((x) => x * 10);
  console.log(newNumbers[1]);

  for (var xx = 0; xx < newNumbers.length; xx++) {
    var listname1 = document.createElement("li");

    listname1.innerHTML = newNumbers[xx];

    list1.appendChild(listname1);
  }

  document.getElementById("div4").appendChild(list1);

  document.getElementById("button7").disabled = true;
});

document.querySelector("#button8").addEventListener("click", function (event) {
  var newNames = namesOfppl.filter((word) => word.length > 3);

  var list1 = document.createElement("lu");

  newNames.forEach((name) => {
    var listname1 = document.createElement("li");

    listname1.innerHTML = name;

    list1.appendChild(listname1);
  });

  document.getElementById("div5").appendChild(list1);

  document.getElementById("button8").disabled = true;
});

document.querySelector("#button9").addEventListener("click", function (event) {
  var newNames = namesOfppl.filter((word) => word === "Pedram");

  var list1 = document.createElement("lu");

  newNames.forEach((name) => {
    var listname1 = document.createElement("li");

    listname1.innerHTML = name;

    list1.appendChild(listname1);
  });
  document.getElementById("div6").appendChild(list1);

  document.getElementById("button9").disabled = true;
});

document.querySelector("#button10").addEventListener("click", function (event) {
  var numbers = [1, 2, 3];

  var newNumber = numbers.reduce((firstN, secondN) => firstN + secondN);

  var list1 = document.createElement("lu");

  var listname1 = document.createElement("li");

  listname1.innerHTML = newNumber;

  list1.appendChild(listname1);

  document.getElementById("div7").appendChild(list1);

  document.getElementById("button10").disabled = true;
});

document.querySelector("#button11").addEventListener("click", function (event) {
  var numbers = [1, 2, 3];

  var newNumber = numbers.reduce((firstN, secondN) => firstN - secondN);

  var list1 = document.createElement("lu");

  var listname1 = document.createElement("li");

  listname1.innerHTML = newNumber;

  list1.appendChild(listname1);

  document.getElementById("div8").appendChild(list1);

  document.getElementById("button11").disabled = true;
});
