$("#add").on("click", function(e) {
  e.preventDefault();
  let text = document.getElementById("input");
  let list = document.getElementById("shopList");
  let newDiv = document.createElement("div");

  if (text.value === "") {
    alert("Add something to the shopping list first.");
    return false;
  }
  newDiv.setAttribute("class", "shopItem");
  newDiv.innerHTML = `
  <p class="heading"> ${text.value}</p>
  <button type="submit" class="check"> check </button>
   <button type="submit" class="delete"> delete </button>`;

  list.appendChild(newDiv);
  text.value = "";
});

$("#shopList").on("click", ".check", function(e) {
  let check = e.currentTarget;
  if ($(check).prev()) {
    return true;
  }
});

$("#shopList").on("click", ".delete", function(e) {
  let div = $(e.currentTarget).parent();
  div[0].parentNode.removeChild(div[0]);
});
