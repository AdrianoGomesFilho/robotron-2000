
const aparece = "aparece"
const some = "some"

function mostraTintas(variavel) {
    if(variavel === "aparece") {
      console.log("peidei")
      document.querySelector(".lista").style.display = "block";

    } else {
      console.log("some")
      document.querySelector(".lista").style.display = "none";

    }
}
