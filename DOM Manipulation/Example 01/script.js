document.getElementById("add-btn").addEventListener("click", function () {
  const ul_list = document.getElementById("list");
  const listItemsCount = ul_list.getElementsByTagName("li").length;
  const newItem = document.createElement("li");
  newItem.textContent = `New Item ${listItemsCount}`;
  ul_list.appendChild(newItem);
});
