console.log("Connected...");

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
  <button type="submit"> check </button>
   <button type="submit"> delete </button>`;

  list.appendChild(newDiv);
});
