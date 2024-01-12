import { kfcMenuItems } from "./data/kfcMenu.js";

var foodContainer = document.getElementById("foodContainer");

kfcMenuItems.forEach(function (menuItem) {
  var menuItemDiv = document.createElement("div");
  menuItemDiv.className = "menu-item";

  var img = document.createElement("img");
  img.alt = menuItem.name;
  img.src = menuItem.image;

  var heading = document.createElement("h2");
  heading.textContent = menuItem.name;

  var description = document.createElement("p");
  description.textContent = menuItem.description;

  var priceButton = document.createElement("button");
  priceButton.textContent = "$" + menuItem.price;
  priceButton.className = "price-button";

//   var price = document.createElement("p");
//   price.textContent = "Price: $" + menuItem.price;

  menuItemDiv.appendChild(img);
  menuItemDiv.appendChild(heading);
  menuItemDiv.appendChild(description);
  menuItemDiv.appendChild(priceButton);
//   menuItemDiv.appendChild(price);

  foodContainer.appendChild(menuItemDiv);
});
