
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
  updateCartCount();
}

function addToWishlist(name) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push({ name });
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert(name + " added to wishlist!");
}
function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartList = document.getElementById("cart-items");
  let total = 0;

  cartList.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    cartList.appendChild(li);
    total += item.price;
  });

  document.getElementById("cart-total").textContent = "Total: $" + total;
}

function displayWishlist() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let wishlistList = document.getElementById("wishlist-items");

  wishlistList.innerHTML = "";
  wishlist.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name;
    wishlistList.appendChild(li);
  });
}
function checkout() {
  alert("Proceeding to checkout...");
}
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

// Run on page load
document.addEventListener("DOMContentLoaded", updateCartCount);
