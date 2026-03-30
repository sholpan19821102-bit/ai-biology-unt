function startTest() {
  let name = document.getElementById("name").value;
  if(name === "") {
    alert("Атыңды енгіз!");
  } else {
    alert(name + " тест басталды!");
  }
}